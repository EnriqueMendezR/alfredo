import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import './App.css'

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
  duration: number | null
  timerEnd: number | null
  notified: boolean
}

function formatTimeLeft(ms: number): string {
  if (ms <= 0) return 'Time\'s up'
  const totalSeconds = Math.ceil(ms / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'tasks' | 'learn'>('chat')
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDuration, setTaskDuration] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null)
  const [, setTick] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages: chatMessages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: `${import.meta.env.VITE_API_URL}/api/chat`,
  })

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = Date.now()
      setTasks(prev => {
        let changed = false
        const next = prev.map(t => {
          if (t.timerEnd !== null && !t.notified && now >= t.timerEnd) {
            if (Notification.permission === 'granted') {
              new Notification('Task timer finished', { body: t.title })
            }
            changed = true
            return { ...t, notified: true }
          }
          return t
        })
        return changed ? next : prev
      })
      setTick(n => n + 1)
    }, 1000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  function resetForm() {
    setTaskTitle('')
    setTaskDescription('')
    setTaskDuration('')
    setShowForm(false)
    setEditingTaskId(null)
  }

  async function addTask() {
    if (!taskTitle.trim()) return
    const minutes = parseInt(taskDuration, 10)
    const hasDuration = !isNaN(minutes) && minutes > 0
    if (hasDuration && Notification.permission === 'default') {
      await Notification.requestPermission()
    }
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title: taskTitle.trim(),
        description: taskDescription.trim(),
        completed: false,
        duration: hasDuration ? minutes : null,
        timerEnd: hasDuration ? Date.now() + minutes * 60 * 1000 : null,
        notified: false,
      },
    ])
    resetForm()
  }

  async function saveTask() {
    if (!taskTitle.trim() || editingTaskId === null) return
    const minutes = parseInt(taskDuration, 10)
    const hasDuration = !isNaN(minutes) && minutes > 0
    if (hasDuration && Notification.permission === 'default') {
      await Notification.requestPermission()
    }
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== editingTaskId) return t
        return {
          ...t,
          title: taskTitle.trim(),
          description: taskDescription.trim(),
          duration: hasDuration ? minutes : null,
          timerEnd: hasDuration ? Date.now() + minutes * 60 * 1000 : null,
          notified: hasDuration ? false : t.notified,
        }
      })
    )
    resetForm()
  }

  function openEditForm(task: Task) {
    setTaskTitle(task.title)
    setTaskDescription(task.description)
    setTaskDuration(task.duration !== null ? String(task.duration) : '')
    setEditingTaskId(task.id)
    setShowForm(true)
  }

  function toggleComplete(id: number) {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="avatar">A</div>
        <div className="chat-header-info">
          <span className="chat-name">Alfredo</span>
          <span className="chat-status">Always at your service</span>
        </div>
      </header>

      <nav className="tab-bar">
        <button
          className={`tab-btn${activeTab === 'chat' ? ' tab-btn--active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          Chat
        </button>
        <button
          className={`tab-btn${activeTab === 'tasks' ? ' tab-btn--active' : ''}`}
          onClick={() => setActiveTab('tasks')}
        >
          Tasks
        </button>
        <button
          className={`tab-btn${activeTab === 'learn' ? ' tab-btn--active' : ''}`}
          onClick={() => setActiveTab('learn')}
        >
          Learn
        </button>
      </nav>

      {activeTab === 'chat' && (
        <>
          <main className="chat-messages">
            {chatMessages.length === 0 && !error && (
              <p className="chat-empty">Send a message to start a conversation.</p>
            )}
            {error && (
              <div className="message received">
                <div className="bubble" style={{ color: 'red' }}>
                  Error: {error.message}
                </div>
              </div>
            )}
            {chatMessages.map(msg => (
              <div key={msg.id} className={`message ${msg.role === 'user' ? 'sent' : 'received'}`}>
                <div className="bubble">{msg.content}</div>
                {msg.createdAt && (
                  <span className="time">
                    {msg.createdAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
              </div>
            ))}
            {isLoading && chatMessages.at(-1)?.role !== 'assistant' && (
              <div className="message received">
                <div className="bubble">...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </main>

          <form className="chat-input-bar" onSubmit={handleSubmit}>
            <button type="button" className="attach-btn" aria-label="Attach file">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            <input
              className="input-field"
              placeholder="Type a message…"
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
              autoComplete="off"
            />
            <button
              type="submit"
              className="send-btn"
              aria-label="Send message"
              disabled={isLoading || !input?.trim()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </form>
        </>
      )}

      {activeTab === 'tasks' && (
        <main className="tasks-view">
          {showForm ? (
            <div className="task-form">
              <input
                className="task-input"
                type="text"
                placeholder="Task title"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
                autoFocus
              />
              <textarea
                className="task-textarea"
                placeholder="Description (optional)"
                value={taskDescription}
                onChange={e => setTaskDescription(e.target.value)}
                rows={4}
              />
              <div className="task-duration-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="task-duration-icon">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <input
                  className="task-duration-input"
                  type="number"
                  min="1"
                  placeholder="—"
                  value={taskDuration}
                  onChange={e => setTaskDuration(e.target.value)}
                />
                <span className="task-duration-label">min</span>
              </div>
              <div className="task-form-actions">
                <button className="task-cancel-btn" onClick={resetForm}>
                  Cancel
                </button>
                <button
                  className="task-add-btn"
                  onClick={editingTaskId !== null ? saveTask : addTask}
                  disabled={!taskTitle.trim()}
                >
                  {editingTaskId !== null ? 'Save Changes' : 'Add Task'}
                </button>
              </div>
            </div>
          ) : (
            <button className="task-new-btn" onClick={() => setShowForm(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Task
            </button>
          )}

          {tasks.length === 0 && !showForm && (
            <p className="tasks-empty">No tasks yet. Create one above.</p>
          )}

          <ul className="task-list">
            {tasks.map(task => {
              const now = Date.now()
              const msLeft = task.timerEnd !== null ? Math.max(0, task.timerEnd - now) : null
              const isUrgent = msLeft !== null && msLeft <= 60_000 && msLeft > 0
              const isExpired = msLeft === 0

              return (
                <li key={task.id} className={`task-item${task.completed ? ' task-item--completed' : ''}`}>
                  <button
                    className={`task-complete-btn${task.completed ? ' task-complete-btn--done' : ''}`}
                    onClick={() => toggleComplete(task.id)}
                    aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {task.completed && (
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    )}
                  </button>

                  <div className="task-item-body">
                    <div className="task-item-top">
                      <span className="task-item-title">{task.title}</span>
                      {!task.completed && (
                        <button
                          className="task-edit-btn"
                          onClick={() => openEditForm(task)}
                          aria-label="Edit task"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                      )}
                      {msLeft !== null && (
                        <span className={`task-timer-badge${isUrgent ? ' task-timer-badge--urgent' : ''}${isExpired ? ' task-timer-badge--expired' : ''}`}>
                          {!isExpired && (
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          )}
                          {formatTimeLeft(msLeft)}
                        </span>
                      )}
                    </div>
                    {task.description && (
                      <span className="task-item-description">{task.description}</span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </main>
      )}
      {activeTab === 'learn' && (
        <main className="learn-view">
        </main>
      )}
    </div>
  )
}

export default App

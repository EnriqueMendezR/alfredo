import { useState } from 'react'
import './App.css'

interface Message {
  id: number
  text: string
  sent: boolean
  time: string
}

interface Task {
  id: number
  title: string
  description: string
}

const messages: Message[] = [
  { id: 1, text: "Hey! Are you free to catch up today?", sent: false, time: "10:21 AM" },
  { id: 2, text: "Yeah, what's up?", sent: true, time: "10:22 AM" },
  { id: 3, text: "I've been working on the new designs and wanted your thoughts.", sent: false, time: "10:23 AM" },
  { id: 4, text: "Oh nice! Send them over, I'd love to take a look.", sent: true, time: "10:24 AM" },
  { id: 5, text: "Just sent them. The main change is the color palette — went for something warmer this time.", sent: false, time: "10:26 AM" },
  { id: 6, text: "These look really good. The warm tones feel much more inviting.", sent: true, time: "10:28 AM" },
  { id: 7, text: "Glad you think so! I was going back and forth on it for a while.", sent: false, time: "10:29 AM" },
  { id: 8, text: "The typography is also a big improvement. What font is that?", sent: true, time: "10:30 AM" },
  { id: 9, text: "Geist! It reads really cleanly at smaller sizes too.", sent: false, time: "10:31 AM" },
  { id: 10, text: "Noted, might steal that for my next project 😄", sent: true, time: "10:32 AM" },
]

function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'tasks'>('chat')
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [showForm, setShowForm] = useState(false)

  function addTask() {
    if (!taskTitle.trim()) return
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title: taskTitle.trim(), description: taskDescription.trim() },
    ])
    setTaskTitle('')
    setTaskDescription('')
    setShowForm(false)
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="avatar">A</div>
        <div className="chat-header-info">
          <span className="chat-name">Alfredo</span>
          <span className="chat-status">Online</span>
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
      </nav>

      {activeTab === 'chat' && (
        <>
          <main className="chat-messages">
            <div className="date-divider">Today</div>
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sent ? 'sent' : 'received'}`}>
                <div className="bubble">{msg.text}</div>
                <span className="time">{msg.time}</span>
              </div>
            ))}
          </main>

          <footer className="chat-input-bar">
            <button className="attach-btn" aria-label="Attach file">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            <div className="input-field" aria-placeholder="Type a message…">
              <span className="input-placeholder">Type a message…</span>
            </div>
            <button className="send-btn" aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </footer>
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
              <div className="task-form-actions">
                <button className="task-cancel-btn" onClick={() => { setShowForm(false); setTaskTitle(''); setTaskDescription('') }}>
                  Cancel
                </button>
                <button className="task-add-btn" onClick={addTask} disabled={!taskTitle.trim()}>
                  Add Task
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
            {tasks.map(task => (
              <li key={task.id} className="task-item">
                <span className="task-item-title">{task.title}</span>
                {task.description && (
                  <span className="task-item-description">{task.description}</span>
                )}
              </li>
            ))}
          </ul>
        </main>
      )}
    </div>
  )
}

export default App

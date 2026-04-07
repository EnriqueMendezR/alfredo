import './App.css'

interface Message {
  id: number
  text: string
  sent: boolean
  time: string
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
  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="avatar">A</div>
        <div className="chat-header-info">
          <span className="chat-name">Alfredo</span>
          <span className="chat-status">Online</span>
        </div>
      </header>

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
    </div>
  )
}

export default App

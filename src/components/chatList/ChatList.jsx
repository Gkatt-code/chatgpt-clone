import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">New Chat</Link>
        <Link to="/">Explore React AI</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className='title'>Chats</span>
        <div className="list">
            <Link>My chat title</Link>
            <Link>My chat title</Link>
            <Link>My chat title</Link>
            <Link>My chat title</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src='/logo.png' />
            <div className="texts">
                <span>Upgrade to React AI Pro</span>
                <span>Get Unlimited Access to all Premium Features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList
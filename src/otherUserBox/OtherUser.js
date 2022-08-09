import React, { useState } from 'react'; 
import logo from '../logo.png';
const userIcon = require('../chatbox/assets/user.png');

const OtherUser = ({_updateMessageList}) => {
    const [message, setMessage] = useState('');

    const _handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            sendMessage();
        }
    }

    const sendMessage = () => {
        if (!message.trim() || message.trim() === '') {
            return
          }
          const messageObj = {
            avatar: userIcon,
            auther: 'other',
            auther_name: 'Chat Up',
            data: message,
            created_at: new Date().toDateString()
          }
          _updateMessageList(messageObj);
          setMessage(''.trim());
    }

    return (
        <div className="otherUserBox">
            <div>
                <h2 className="heading"><img src={logo} style={{ height: '40px' }} alt="logo" /> <br></br> Chat Up Demo</h2>
                <textarea placeholder="Send message..." onKeyDown={(e) => _handleKeyDown(e)} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <button onClick={() => sendMessage()}>Send Message</button>
            </div>
        </div>
    )
}

export default OtherUser
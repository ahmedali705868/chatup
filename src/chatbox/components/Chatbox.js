import React, {useState} from 'react';
import Launcher from './Launcher'
import ChatWindow from './ChatWindow'

const Chatbox = (props) => { 
    const [displayChatWindow, setDisplayChatWindow] = useState(false);

    const toggleChatWindow = (newState) => {
        setDisplayChatWindow(newState)
    }

    return (
        <div className="chatbox">
           {
               !displayChatWindow ? 
               <Launcher {...props} toggleChatWindow={toggleChatWindow} /> : 
               <ChatWindow {...props} toggleChatWindow={toggleChatWindow} />
           }
        </div>
    )
}

export default Chatbox
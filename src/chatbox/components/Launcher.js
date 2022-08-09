import React from 'react';
const chatIcon = require('../assets/chat-icon.jpeg');


const Launcher = ({toggleChatWindow, theme="#0099cc"}) => { 

    return (
        <div className="launcher" style={{background:theme}} onClick={() => toggleChatWindow(true)}>
            <img src={chatIcon} style={{filter:'invert(1)'}} alt="chat icon" />
        </div>
    )
}

export default Launcher
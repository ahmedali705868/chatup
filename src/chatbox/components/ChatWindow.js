import React from 'react';
import Header from './Header';
import Messages from './Messages';
import InputField from './InputField';



const ChatWindow = (props) => {   

    const toggleChatWindowFromHeader = () => {
        props.toggleChatWindow();
    }
 
    return (
        <div className="chatWindow">
            <Header {...props} toggleChatWindow={toggleChatWindowFromHeader} />
            <Messages {...props} />
            <InputField {...props}  />
        </div> 
    )
}

export default ChatWindow
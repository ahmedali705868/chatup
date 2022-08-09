import React, { useState } from 'react';
import Chatbox from './chatbox/';
import OtherUser from './otherUserBox/OtherUser';
import './App.css';
import logo from './logo.png';

const userIcon = require('./chatbox/assets/user.png');

function App() {

  const [messages, setMessages] = useState([]);

  const _onSendMessage = (data) => {
    const messageObj = {
      avatar: userIcon,
      auther: 'me',
      auther_name: 'Test User',
      data: data,
      created_at: new Date().toDateString()
    }
    _updateMessageList(messageObj);
  }

  const _updateMessageList = (messageObj) => {
    setMessages((messages) => [...messages, messageObj]);
  }


  return (
    <div className="App">

      <OtherUser _updateMessageList={_updateMessageList} />
      <div className="coverBox"></div>

      <Chatbox
        messages={messages}
        _onSendMessage={_onSendMessage}
        brandLogo={logo}
      />
    </div>
  );
}

export default App;

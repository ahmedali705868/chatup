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
        // theme="#999966" 
        messages={messages}
        _onSendMessage={_onSendMessage}
      // themeTextColor="#fff"
      // brandName={"Stake Game"}
      // brandLogoHeight="30px"
      // brandLogoWidth="30px"
      brandLogo={logo}
      />
    </div>
  );
}

export default App;

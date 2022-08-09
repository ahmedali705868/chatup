import React, { useEffect, useRef, useCallback } from 'react';
import messageNotification from '../assets/notification.mp3';

const userIcon = require('../assets/user.png');


const Messages = ({ theme="#0099cc", messages, avatar = true, sound = true }) => { 
    const messagesEndRef = useRef(null);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollTo({
            top: messagesEndRef.current?.scrollHeight,
            left: 0,
            behavior: 'smooth',
        }); 
    }

    const playMessageNotification = useCallback(() => { 
        if (messages?.length > 0 && messages?.at(-1)?.auther !== 'me' && sound) {
            const audio = new Audio(messageNotification);
            audio.play();
        } 
    }, [messages, sound])

    useEffect(() => {
        scrollToBottom(); 
        playMessageNotification();  
    }, [messages, playMessageNotification]);

    return (
        <div className="chatup_messagesBox" ref={messagesEndRef}>
            {messages?.length > 0 ? messages.map((e, i) =>
                <div className={`chatup_message chatup_${e.auther}`} key={i}>
                    {avatar &&
                        <div>
                            <img src={e.avatar ? e.avatar : userIcon} alt="User" />
                        </div>
                    }
                    <div className={e.auther === 'me' ? 'myMsg' : ''} style={{ flexBasis: avatar ? '85%' : '100%' }}>
                        <div>
                            <p><strong style={{ color: theme }}>{e.auther !== 'me' ? e.auther_name : 'You'}:</strong> <span className="messageTime">{e.created_at}</span></p>
                            <p>{e.data}</p>
                        </div>
                    </div>
                </div>
            ) :
                <div className="chatup_noMsgYet">No message yet</div>
            }
        </div>
    )
}

export default Messages
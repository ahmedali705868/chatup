import React, { useState } from 'react';
import EmojiPopup from './emoji/EmojiPopup';


const SendIcon = require('../assets/send.png');
const EmojiIcon = require('../assets/emoji.png');




const InputField = ({ _onSendMessage, emoji = true }) => {
    const [displayEmojis, setDisplayEmojis] = useState(false);
    const [theMessage, setTheMessage] = useState('');

    const _toggleDisplayEmoji = () => {
        setDisplayEmojis(!displayEmojis);
    }

    const _onEmojiPicked = (char) => {
        setTheMessage(theMessage + ' ' + char + ' ')
        _toggleDisplayEmoji();

    }

    const _handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            _saveMessage();
        }
    }


    const _saveMessage = () => {
        if (!theMessage.trim() || theMessage.trim() === '') {
            return
        }
        _onSendMessage(theMessage);
        setTheMessage(''.trim());
    }

    return (
        <div className="inputfield">
            <div className="inputArea">
                <div className="textAreaBox">
                    <textarea onKeyDown={(e) => _handleKeyDown(e)} onChange={(e) => setTheMessage(e.target.value)} className="inputArea" value={theMessage} placeholder="Type message..."></textarea>
                </div>
                <div className="buttonsBox">
                    {emoji &&
                        <div>
                            {displayEmojis && <EmojiPopup _onEmojiPicked={_onEmojiPicked} />}
                            <img src={EmojiIcon} onClick={() => _toggleDisplayEmoji()} alt="Emoji" />
                        </div>
                    }
                    <div>
                        <img src={SendIcon} onClick={() => _saveMessage()} alt="Send" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputField
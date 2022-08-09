import React, { useState } from 'react';
import EmojiPicker from './EmojiPicker';

const EmojiPopup = ({_onEmojiPicked}) => {

    const [filteredEmoji, setFilteredEmoji] = useState('');

    const onInputChange = (value) => {
        setFilteredEmoji(value)
    }

    const _onEmojiPickedFromPicker = (char) => {
        _onEmojiPicked(char)
    }

    return (
        <div className="emojiWindow">
            <div className="emojiInputBox">
                <input
                    onChange={(e) => onInputChange(e.target.value)}
                    className="chatup_emojiSearch"
                    placeholder="Search emoji..."
                />
            </div>
            <EmojiPicker _onEmojiPickedFromPicker={_onEmojiPickedFromPicker} filter={filteredEmoji} />
        </div>
    )
}


export default EmojiPopup;
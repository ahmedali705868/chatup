import React from 'react'; 
import emoji from './emoji';

const EmojiPicker = ({ _onEmojiPickedFromPicker, filter }) => {
     
    return (
        <div className="chatup_emojiBox">
            {emoji.map((category) => {
                const filteredEmojis = category.emojis.filter(({ name }) => name.includes(filter));
                return (
                    <div className="chatup_emojiFaceBox" key={category.name}>
                        {filteredEmojis.map(({ char, _name }) => {
                            return (
                                <span
                                    key={char}
                                    className="chatup_emojiFace"
                                    onClick={() => _onEmojiPickedFromPicker(char)}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
};

export default EmojiPicker;
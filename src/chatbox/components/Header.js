import React from 'react';
const closeIcon = require('../assets/close-icon.png');

const Header = ({ theme="#0099cc", toggleChatWindow, themeTextColor = "#fff", brandName = "Chat Up", brandLogo = "", brandLogoHeight = '30px', brandLogoWidth = '30px' }) => {

    return (
        <div className="header" style={{ background: theme }}>
            <div className="brandInfo">
                {brandLogo &&
                    <span>
                        <img style={{ height: brandLogoHeight, width: brandLogoWidth }} src={brandLogo} alt="Brand Logo" />
                    </span>
                }
                <span style={{ color: themeTextColor ? themeTextColor : '#000' }}>{brandName}</span>
            </div>
            <div>
                <img className="closeIcon" src={closeIcon} alt="Close Icon" onClick={() => toggleChatWindow(false)} />
            </div>
        </div>
    )
}

export default Header
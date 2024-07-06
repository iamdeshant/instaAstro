import React from 'react';
import './MainSection.css';

const MainSection = () => {
    return (
        <>
            <div className="card-section">
                <div className="section">
                    <div className="lefts">
                        <img src={`https://img.freepik.com/premium-vector/woman-holds-mockup-large-smartphone-with-blank-screen-with-his-second-hand-points-screen-phone-vector-flat-illustration_531064-16477.jpg`} alt="Woman holding phone" className="card-image" />
                    </div>
                    <div>
                        <div className="texts-content">
                            <p>Talk to India's</p>
                            <h1>Best Astrologers at ₹1</h1>
                            <p>And get ₹100 talk time</p>
                        </div>
                        <div className="app-buttons">
                            <button className="app-button">Google Play</button>
                            <button className="app-button">App Store</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chats-buttons">
                <button className="chat-btns">Chat with Astrologer</button>
                <button className="call-btns">Talk with Astrologer</button>
            </div>
        </>
    );
}

export default MainSection;

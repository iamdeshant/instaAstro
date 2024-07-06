import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <>
            <main>
                <div className="content">
                    <div className="left">
                        <img src={`https://static.gameloop.com/img/b4e5b0c629d24bcda62d99c528686514.jpg?imageMogr2/thumbnail/undefinedx266/format/webp`} alt="Phone 1" />
                    </div>
                    <div className="right">
                        <div className="text-content">
                            <p>Talk to India's</p>
                            <h1>Best Astrologers at ₹1</h1>
                            <p>And get ₹100 talk time</p>
                        </div>
                    </div>
                </div>
            </main>
            <div className="buttons">
                <button className="chat-btn">Chat With Astrologer</button>
                <button className="call-btn">Talk To Astrologer</button>
            </div>
        </>
    );
}

export default MainContent;

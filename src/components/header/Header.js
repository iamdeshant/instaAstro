import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
                <div className="navbar">
                    <div className="logo">
                        <img src={`https://d1hltzobzpmnzr.cloudfront.net/static/img/instaastro-logo.svg`} alt="InstaAstro Logo" />
                    </div>
                    <div className="auth-buttons">
                        <button className="chats-btn">Chat with Astrologer</button>
                        <button className="calls-btn">Talk with Astrologer</button>
                        <button className="signup-btn">Sign up</button>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Kundli</a></li>
                        <li><a href="#">Matchmaking</a></li>
                        <li><a href="#">Horoscope</a></li>
                        <li><a href="#">Live</a></li>
                        <li><a href="#">Panchang</a></li>
                        <li><a href="#">Calendar</a></li>
                        <li>
                            <select name="cars" id="cars">
                                <option value="Resource">Resource</option>
                            </select>
                        </li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
        </div>
    );
}

export default Header;

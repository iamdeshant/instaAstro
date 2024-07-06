import React from 'react';
import './HeaderMobile.css';

const Header = () => {
    return (
        <header className="headerMobile">
            <div className="header-left">
                <div className='bar-container'>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <img src={`https://d1hltzobzpmnzr.cloudfront.net/static/img/instaastro-logo.svg`} alt="InstaAstro Logo" className="logo" />
            </div>
            <div className="header-right">
                <button className="get-app-btn">Get App</button>
            </div>
        </header>
    );
}

export default Header;

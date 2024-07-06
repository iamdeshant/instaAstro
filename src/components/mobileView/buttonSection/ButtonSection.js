import React from 'react';
import './ButtonSection.css';

const buttons = [
    { icon: `https://w7.pngwing.com/pngs/182/821/png-transparent-vedic-astrology-chart-astrology-kundli-horoscope-birth-chart-hindu-astrology-jyotisha-jyotishya-indian-astrology-vedic-horoscope-chart-thumbnail.png`, text: "Free Kundli" },
    { icon: `https://www.svgrepo.com/show/20546/sun.svg`, text: "Daily Horoscope" },
    { icon: `https://www.svgrepo.com/show/16200/video.svg`, text: "Live Sessions" },
    { icon: `https://www.svgrepo.com/show/59181/writing.svg`, text: "Astrology Blog" }
];

const ButtonSection = () => {
    return (
        <div className="button-section">
            {buttons.map((button, index) => (
                <div key={index} className="button">
                    <img src={button.icon} alt={button.text} className="button-icon" />
                    <p>{button.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ButtonSection;

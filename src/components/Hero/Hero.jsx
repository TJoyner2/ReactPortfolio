import React from 'react';

import trio_sticker from './src/assets/trio-sticker.jpg';

const Hero = () => {
    return (
        <div className= 'hero'>
            <img src={trio_sticker} alt="" />
            <h1>I am Trent Joyner, Web Developer in USA</h1>
            <p>I am a web developer from North Carolina that is learning something new every day.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero;
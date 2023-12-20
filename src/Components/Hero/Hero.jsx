import React from "react";
import './Hero.css'
import HandIcon from '../Assets/hand_icon.png'
import ArrowIcon from '../Assets/arrow.png'
import HeroImg from '../Assets/hero_image.png'

function Hero() {
  return <div className="hero">
    <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={HandIcon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={ArrowIcon}  alt="abc" />
        </div>
    </div>
    <div className="hero-right">
        <img src={HeroImg} alt="" />
    </div>
  </div>;
}

export default Hero;

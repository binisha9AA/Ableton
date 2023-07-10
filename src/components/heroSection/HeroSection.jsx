import React from 'react';
import heroimage from '../../assets/images/header.jpg';
import './hero.css';

export default function HeroSection() {
  return (
    <div className="image_section">
      <div className="text">
        <h2 className="image_text">Ableton</h2>{' '}
      </div>
      <div className="image">
        <img src={heroimage} alt="" className="hero_image" />
      </div>
    </div>
  );
}

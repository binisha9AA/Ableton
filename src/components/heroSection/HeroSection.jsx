import React from 'react';
import heroimage from '../../assets/images/header.jpg';
import './hero.css';

export default function HeroSection() {
  return (
    <div className="hero_image">
      <img src={heroimage} alt="" />
    </div>
  );
}

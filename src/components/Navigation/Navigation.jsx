import React from 'react';
import { FiGrid } from 'react-icons/fi';
import './Navigation.css';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Navigation() {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left_nav">
            <a href="#">
              <FiGrid className="nav-logo" />
            </a>
            <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Live
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Push
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Note
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Packs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" style={{ color: '#ff8b4d' }}>
                  More +
                </a>
              </li>
            </ul>
          </div>
          <div className="login">
            <a href="#" className="blue">
              Try for free
            </a>
            <a href="#" className="black">
              Login or register
            </a>
          </div>
          <div className="hamburger" onClick={handleToggle}>
            <h2 className="hamburger_dropdown">
              Menu <AiFillCaretDown />
            </h2>
          </div>
        </nav>
      </header>
    </>
  );
}

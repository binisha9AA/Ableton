import React from 'react';
import './BotNav.css';

export default function BotNavigation() {
  return (
    <div className="bottom_navigation">
      <ul>
        <li>
          <a href="" style={{ color: '#ff8b4d' }}>
            About
          </a>
        </li>
        <li>
          <a href="">Jobs</a>
        </li>
        <li>
          <a href="">Apprenticeship</a>
        </li>
      </ul>
    </div>
  );
}

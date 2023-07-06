import React from 'react';
import './footer.css';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/images/bx-right-indent.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <h2 className=" footer_logo">Ableton</h2>
        <div>
          <p>Sign up to our newspaper</p>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className="input_field">
            <input type="text" placeholder="Email address" className="input " />
            <button className="bg-blue w-[84px] rounded-lg">send</button>
          </div>
        </div>
        <div>
          <h2>Education</h2>
          <a href="">
            {' '}
            Offers for student and teachers <FiChevronRight />
          </a>
          <a href="">
            {' '}
            Ableton for the classroom <FiChevronRight />
          </a>
          <a href="">
            {' '}
            Ableton for colleges and Universities <FiChevronRight />
          </a>
        </div>
        <div>
          <h2>Community</h2>
          <a href="">
            {' '}
            Find Ableton user groups
            <FiChevronRight />
          </a>
          <a href="">
            {' '}
            Find Certified Training
            <FiChevronRight />
          </a>
          <a href="">
            {' '}
            Bceome a Certified Trainer
            <FiChevronRight />
          </a>
        </div>
        <div>
          <h2>Language and Location</h2>

          <select>
            <option value="English selected">English</option>
            <option value="Ductch">Dutch</option>
            <option value="Indian">Indian</option>
            <option value="Nepali">Nepali</option>
          </select>
          <select>
            <option value="English selected">English</option>
            <option value="Ductch">Dutch</option>
            <option value="Indian">Indian</option>
            <option value="Nepali">Nepali</option>
          </select>
        </div>
        <div className="contact_us">
          <ul>
            <li>contact us</li>
            <li>Press Resources</li>
            <li>Legal Infor</li>
            <li>Policy Privacy</li>
            <li>Cookie Settings</li>
            <li>Imprint</li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="" /> Made in Berlin
        </div>
      </footer>
    </>
  );
}

import React from 'react';
import './footer.css';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/images/bx-right-indent.svg';
import facebook from '../../assets/images/fb.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/yt.png';
import instagram from '../../assets/images/ig.jpg';

export default function Footer() {
  return (
    <>
      <footer className="footer_content">
        <div className="footer_one">
          <h2 className=" footer_logo">Ableton</h2>
          <div className="signup_text">
            <p className="sign">Sign up to our newspaper</p>
            <p className="sign_para">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
            <div className="input_field">
              <input
                type="text"
                placeholder="Email address"
                className="input "
              />
              <button className="send">sign up</button>
            </div>
          </div>
          <div>
            <div className="link_sections">
              <a href="">Register Live or Push</a>
              <FiChevronRight />
            </div>
            <div className="link_sections">
              <a href="">About Ableton</a>
              <FiChevronRight />{' '}
            </div>
            <div className="link_sections">
              <a href="">Jobs</a>
              <FiChevronRight />
            </div>
          </div>
          <div className="social_media_logos">
            <a href="" className="ae">
              <img
                src={facebook}
                alt=""
                className="logo"
                style={{ maxWidth: '25px' }}
              />
            </a>
            <a href="" className="">
              <img
                src={twitter}
                alt=""
                className="logo"
                style={{ maxWidth: '25px' }}
              />{' '}
            </a>
            <a href="" className="">
              <img
                src={youtube}
                alt=""
                className="logo"
                style={{ maxWidth: '25px' }}
              />{' '}
            </a>
            <a href="" className="">
              <img
                src={instagram}
                alt=""
                className="logo"
                style={{ maxWidth: '25px' }}
              />{' '}
            </a>
          </div>
        </div>

        <div className="footer_two">
          <div className="footer_head">
            <h2 className="title_heading">Education</h2>
            <a href="" className="edn">
              {' '}
              Offers for student and teachers <FiChevronRight />
            </a>
            <a href="" className="edn">
              {' '}
              Ableton for the classroom <FiChevronRight />
            </a>
            <a href="" className="edn">
              {' '}
              Ableton for colleges and Universities <FiChevronRight />
            </a>
          </div>
          <div className="footer_head">
            <h2 className="title_heading"> Community</h2>
            <a href="" className="edn">
              {' '}
              Find Ableton user groups
              <FiChevronRight />
            </a>
            <a href="" className="edn">
              {' '}
              Find Certified Training
              <FiChevronRight />
            </a>
            <a href="" className="edn">
              {' '}
              Bceome a Certified Trainer
              <FiChevronRight />
            </a>
          </div>
          <div className="language_section">
            <h2>Language and Location</h2>
            <div className="selection_box">
              {' '}
              <select className="language_chooser">
                <option value="English selected">English</option>
                <option value="Ductch">Dutch</option>
                <option value="Indian">Indian</option>
                <option value="Nepali">Nepali</option>
              </select>
              <select className="country_chooser">
                <option value="English selected">Nepal</option>
                <option value="Ductch">Dutch</option>
                <option value="Indian">Indian</option>
                <option value="Nepali">Nepali</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer_three">
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
        </div>
      </footer>
    </>
  );
}

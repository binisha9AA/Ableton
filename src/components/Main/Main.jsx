import React from 'react';
import '../Main/Main.css';
import HeroSection from '../heroSection/HeroSection';
import About_text from '../About_text/About_text';
import ImageCard2 from '../ImageCards/ImageCard2/ImageCard2';
import { ImageCard4 } from '../ImageCards/ImageCard4/ImageCard4';
import ImageCard3 from '../ImageCards/ImageCard3/ImageCard3';
import ImageCard1 from '../ImageCards/ImageCard1/ImageCard1';
import ImageC from '../ImageCards/ImageCard1/ImageC';

export default function Main() {
  return (
    <>
      <main className="main_content">
        <div className="page_about">
          <HeroSection />
        </div>
        <div className="about_Section">
          <h2 className="heading">
            We make{' '}
            <span>
              <a>Live</a>
            </span>
            ,{' '}
            <span>
              <a>Push </a>
            </span>
            and{' '}
            <span>
              <a>Link</a>
            </span>
            — unique software and hardware for music creation and performance.
            With these products, our community of users creates amazing things.
          </h2>
          <p className="paragraph">
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        </div>
        {/* <ImageC /> */}
        {/* <ImageCard1 /> */}
        <div className="about_Section">
          <About_text
            heading="Making music isn't easy. It takes time, effort, and learning. But
            when you're in the Row, it's incredibly rewarding."
            paragraph="We feel the same way about making Ableton products. The driving force behind Ableton is our passion
            for what we make, and the people we make it for."
          />
        </div>
        {/* <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe> */}
        <div className="about_Section">
          <About_text
            heading="We believe it takes focus to create truly
            outstanding instruments. We only work
            on a few products and we strive to make
            them great."
            paragraph="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
          />
        </div>
        <div className="about_Section">
          <About_text
            heading="We're passionate about what we do, but
            we're equally passionate about
            improving who we are."
            paragraph="Most of us are active musicians, producers, and DJs,
            and many of us use Live and Push every day. We
            come from a wide range of cultural and professional
            backgrounds. Some of us have PhDs, some are self-
            taught, and most of us are somewhere in between.
            What connects us is the shared belief that each of us
            has the skills and knowledge to contribute to
            something big: helping to shape the future of music
            culture."
          />
        </div>
        <ImageCard3 />
        <div className="about_Section">
          <About_text
            heading="We want our employees to love it here.
            Since we're looking for exceptional
            talent from around the world, we will do
            everything we can to make your
            transition as easy as possible."
            paragraph="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
          />
        </div>
        <ImageCard2 />
        <div className="about_Section">
          <About_text
            heading="We're passionate about what we do, but we're equally
            passionate about improving who we are."
            paragraph="We work hard to foster an environment where people can grow both personally and
            professionally, and we strive to create a wealth of opportunities to learn from and with
            each other.
            Alongside an internal training program, employees are actively supported in acquiring
            new knowledge and skills, and coached on applying these in their daily work. In
            addition, staff-organized development and music salons are a chance to discuss new
            technologies, production techniques and best practices."
          />
        </div>
        <div className="about_Section">
          <About_text
            heading="We want our employees to love it here. Since we're
            looking for exceptional talent from around the world, we
            will do everything we can to make your transition as easy
            as possible."
            paragraph="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
          />
        </div>
        <ImageCard4 />
      </main>
    </>
  );
}

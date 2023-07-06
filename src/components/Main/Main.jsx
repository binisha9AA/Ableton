import React from 'react';
import '../Main/Main.css';
import HeroSection from '../heroSection/HeroSection';
import About_text from '../About_text/About_text';
// import imageCard1 from '../ImageCards/ImageCard1/ImageCard1';

export default function Main() {
  return (
    <>
      <main className="main_content">
        <div className="page_about">
          <HeroSection />
        </div>
        <div className="about_Section">
          <About_text
            heading="We make Live Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
            paragraph="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
          />
        </div>
        <imageCard1 />
        <div className="about_Section">
          <About_text
            heading="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
            paragraph="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.

            "
          />
        </div>
        <div className="about_Section">
          <About_text
            heading="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
            paragraph="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
          />
        </div>
      </main>
    </>
  );
}

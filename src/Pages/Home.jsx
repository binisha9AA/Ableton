import React from 'react';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import ImageCard2 from '../assets/images/photo-6-a.jpg';
import FooterDemo from '../components/Footer/FooterDemo';
import Navigation from '../components/Navigation/Navigation';
import BotNavigation from '../components/bottom Nav/BotNavigation';

// import ImageCard4 from '../assets/images/poster-meet-the-makers.jpg';

export default function Home() {
  return (
    <div className="home">
      <div className="home_main">
        <Navigation />
        <BotNavigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

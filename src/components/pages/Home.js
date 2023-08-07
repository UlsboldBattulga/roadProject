import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Contact from '../Contact';
import Service from '../Service';
import AboutUs from '../AboutUs';
import Cooperation from '../Cooperation';
import ScrollToTopButton from '../ScrollToTop';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Contact />
      <Service />
      <AboutUs />
      <Cooperation />
      <ScrollToTopButton />
    </>
  );
}

export default Home;

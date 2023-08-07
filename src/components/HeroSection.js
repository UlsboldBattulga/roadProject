import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Авто замын <span className='subtext'> бүтээн байгуулалт </span> гүйцэтгэл  </h1>
      {/* <p>Жишээ текст</p> */}
      <div className='hero-btns'>
        <a
          href="/about"
          className='btns text-white border border-white px-8 py-3 hover:text-[#2c234d] hover:bg-white transition-all uppercase'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Бидний тухай
        </a>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;

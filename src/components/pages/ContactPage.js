import React from 'react';
import '../../App.css';
import Contact from '../Contact';
import MapContainer from "../GoogleMap"
import ScrollToTopButton from '../ScrollToTop';


export default function Services() {
  return (
    <div>
      <div className='relative'>
        <img src='images/contactCover.jpg' className='w-full h-[250px] sm:h-full' />
        <h2 className='absolute top-[140px] sm:top-[200px] left-10 sm:left-[100px] text-white text-[24px] sm:text-[48px] '>Холбоо барих</h2>
      </div>
      <Contact />
      <div className='w-full flex h-[950px]  mx-auto sm:pt-10 sm:pb-10 sm:mt-10 mb-20  '>
        <MapContainer />
      </div>
      <ScrollToTopButton />
    </div>
  )
}

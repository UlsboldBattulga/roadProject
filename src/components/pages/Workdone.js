import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTopButton from '../ScrollToTop';

function SignUp() {
  return (
    <div>
      <div>
        <img src='images/projectCover.jpg' className='w-full h-[300px] sm:h-[400px] lg:h-[600px] 2xl:h-[800px]' />
      </div>
      <div className=''>
        <p className='text-[#ff5f13] mx-auto w-full text-center mt-4 md:text-[24px]'>Төсөл хөтөлбөр</p>
        <h1 className='text-[#2c234d] text-[24px] md:text-[32px]'>Гүйцэтгэсэн ажил</h1>
        <div className=''>
          <div className='cards__wrapper'>


            <ul className='grid md:grid-cols-2 lg:grid-cols-3 mb-14 px-16 '>
              <CardItem
                src='images/apartment2.jpg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хотхон'
                path='/services'
              />
              <CardItem
                src='images/apartment.jpeg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хотхон'
                path='/products'
              />
              <CardItem
                src='images/stone.jpg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хувийн орон сууц'
                path='/sign-up'
              />

              <CardItem
                src='images/apartment2.jpg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хотхон'
                path='/services'
              />
              <CardItem
                src='images/apartment.jpeg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хотхон'
                path='/products'
              />
              <CardItem
                src='images/stone.jpg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хувийн орон сууц'
                path='/sign-up'
              />

              <CardItem
                src='images/apartment2.jpg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хотхон'
                path='/services'
              />
              <CardItem
                src='images/apartment.jpeg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хотхон'
                path='/products'
              />
              <CardItem
                src='images/stone.jpg'
                text='Жишээ тайлбар тескт энд байрлана'
                label='Хувийн орон сууц'
                path='/sign-up'
              />
            </ul>
          </div>

          {/* <div className='w-full flex justify-center '>
          <Link to="/workdone" className="">
            <button className=' rounded-md bg-[#1f98f4] text-white hover:bg-[#0981dc] hover:text-white  px-4 py-2 mx-auto transition-all w-[150px]'>Бүгдийг үзэх</button>
          </Link>
        </div> */}
        </div>
      </div>
      <ScrollToTopButton />
    </div>

  );
}

export default SignUp;

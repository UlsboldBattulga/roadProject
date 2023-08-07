import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Cards() {
  return (
    <div className='cards '>
      <p className='text-[#ff5f13] mx-auto w-full text-center md:text-[24px]'>Төсөл хөтөлбөр</p>
      <h1 className='text-[#2c234d] text-[24px] md:text-[32px]'>Гүйцэтгэсэн ажил</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/uuliin-zam.jpg'
              text='Жишээ тайлбар тескт энд байрлана'
              label='Орон нутаг'
              path='/workdone'
            />
            <CardItem
              src='images/dotood-zam.jpeg'
              text='Жишээ тайлбар тескт энд байрлана'
              label='Хотын төв'
              path='/workdone'
            />
          </ul>


          {/* <ul className='cards__items'>
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
          </ul> */}
        </div>

        <div className='w-full flex justify-center '>
          <a href="/workdone" className="">
            <button className=' rounded-md bg-[#1f98f4] text-white hover:bg-[#0981dc] hover:text-white  px-4 py-2 mx-auto transition-all w-[150px]'>Бүгдийг үзэх</button>
          </a>
        </div>
      </div>
    </div>

  );
}

export default Cards;

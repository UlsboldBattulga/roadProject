import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import OurServiceCard from '../OurServiceCard';
import ScrollToTopButton from '../ScrollToTop';

export default function Products() {
  return (
    <div className='relative'>
      <img src='images/serviceCover.jpg' className='w-full h-[400px]' />
      <div className='w-[80%] mx-auto mt-10 sm:mt-0'>
        <h1 className=' text-[#2c234d] text-[24px] sm:text-[34px] mt-5 text-left'>Үйл ажиллагааны тухай</h1>
        <p className='text-[#2c234d] font-mono mt-4'>Манай компанийн техникийн газар нь нийт 200 гаруй машин механизмыг удирдан зохион байгуулж, бэлэн байдлыг ханган ажиллаж байна. Техникийн ухааны магистраар удирдуулсан баг хамт олонд Монгол Улсын онц тээвэрчин ..., хүмүүс ажиллаж авто замын бүтээн байгуулалтад нөр их ажлыг нугалж байна.</p>
      </div>

      <h1 className='text-[#ff5f13] text-[24px] mt-14 sm:my-16 px-10 sm:px-0'>Үйл ажиллагааны чиглэлүүд</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:px-20 lg:px-5 mx-auto xl:px-10 2xl:px-20 gap-16 lg:gap-0 my-10'>
        <OurServiceCard src="images/exge.jpg" title="Техник түрээс" desc="Жишээ тайлбар тескт энд байрлана !!! Lorem Ipsum is simply dummy text of the printing " />
        <OurServiceCard src="images/duguinzam.jpg" title="Явган болон дугуйн зам" desc="Жишээ тайлбар тескт энд байрлана !!! Lorem Ipsum is simply dummy text of the printing " />
        <OurServiceCard src="images/road.jpg" title="Хатуу хучилттай авто зам" desc="Жишээ тайлбар тескт энд байрлана !!! Lorem Ipsum is simply dummy text of the printing " />
        <OurServiceCard src="images/exge.jpg" title="Техник түрээс" desc="Жишээ тайлбар тескт энд байрлана !!! Lorem Ipsum is simply dummy text of the printing " />
        <OurServiceCard src="images/duguinzam.jpg" title="Явган болон дугуйн зам" desc="Жишээ тайлбар тескт энд байрлана !!! Lorem Ipsum is simply dummy text of the printing " />
        <OurServiceCard src="images/road.jpg" title="Хатуу хучилттай авто зам" desc="Жишээ тайлбар тескт энд байрлана !!! Lorem Ipsum is simply dummy text of the printing " />
      </div>

      <ScrollToTopButton />
    </div>
  )
}

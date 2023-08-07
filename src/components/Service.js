import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Services() {
    return (
        <div className='w-[90%] mx-auto'>
            <div className="   ">
                <p className="text-[#ff5f13] w-full text-center mt-8  md:text-[24px]">Үйлчилгээ</p>
                <h1 className="text-[#2c243d] text-[24px] w-full text-center md:text-[32px]">Манай үйл ажиллагааны төрлүүд</h1>
            </div>
            <div className="items-center justify-center w-full my-8">
                <ul className="grid lg:grid-cols-3">
                    <ServiceCard
                        src='images/bicycle.png'
                        text='Жишээ тайлбар тескт энд байрлана'
                        label='Орон нутаг'
                        path='/activity'
                        desc="Явган болон дугуйн зам"
                    />
                    <ServiceCard
                        src='images/destination.png'
                        text='Жишээ тайлбар тескт энд байрлана'
                        label='Орон нутаг'
                        path='/activity'
                        desc="Хатуу хучилттай авто зам"
                    />
                    <ServiceCard
                        src='images/excavator.png'
                        text='Жишээ тайлбар тескт энд байрлана'
                        label='Орон нутаг'
                        path='/activity'
                        desc="Техник түрээс"
                    />
                </ul>
            </div>
            <div className="w-full flex justify-center">
                <a href="/activity">
                    <button className="bg-[#ff5f13] transition-all hover:bg-[#e15514] text-white px-6 rounded-md py-2">Дэлгэрэнгүй</button>
                </a>
            </div>
        </div>
    )
}

export default Services;
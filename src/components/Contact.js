import React from "react";
import css from "./Contact.css";
import location from "../images/location.png";
import telephone from "../images/telephone.png";
import email from "../images/email.png";

function Contact() {
    return (
        <div className=" w-full bg-[#f9f9f9]">
            <div className=" grid lg:grid-cols-3 w-full sm:w-[380px] lg:w-full mx-auto px-6 md:px-0 pb-10">
                <div className="flex items-center justify-center py-20 px-10">
                    <img src={telephone} className="w-[44px] mr-5" />
                    <div>
                        <p className="text-[#677294] text-[14px] font-serif">Бидэнтэй холбогдох</p>
                        <p className="text-[#2c234d] text-[20px]">(+976) 8888-8888</p>
                    </div>
                </div>

                <div className="flex items-center justify-center py-20 px-10">
                    <img src={email} className="w-[44px] mr-5" />
                    <div>
                        <p className="text-[#677294] text-[14px] font-serif">Email хаяг</p>
                        <p className="text-[#2c234d] text-[20px]">autozam@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-[250px] mx-auto sm:w-full sm:px-10  md:px-14">
                    <img src={location} className="w-[44px] mr-5" />
                    <div>
                        <p className="text-[#677294] text-[14px] font-serif">БЗД, УЛААНБААТАР</p>
                        <p className="text-[#2c234d] text-[20px]">13-р хороолол SomangPlaza 601 тоот</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;
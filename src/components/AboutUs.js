import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AboutUs() {
    return (
        <div className="pt-20 relative ">
            <img src="images/aboutus.jpg" className="w-full h-[600px]" />
            <div className="absolute top-[170px] md:right-[60px] md:w-[500px] mx-5 sm:mx-32 md:mx-0 h-[440px] backdrop-blur-sm bg-[#f5f5f5]/70 rounded-xl p-5 sm:p-10 text-center ">
                <div className="text-[#ff5f13] uppercase text-[15px]">Бидний зорилго</div>
                <div className="text-[#2c243d] text-[24px] my-4">Дэлхийн жишгийг Монголын авто замын хөгжилд хэрэгжүүлэхийн төлөө ажиллаж байна.</div>
                <div className="text-[#64676c] text-justify">Чанарыг эрхэмлэгч БИД мэргэжлийн чадварлаг багийг бүрдүүлэн, шинэ дэвшилтэт техник технологийг нэвтрүүлж Дэлхийн жишгийг Монголын авто замын хөгжилд хэрэгжүүлнэ.</div>
                <div className="w-full mt-8">
                    <a href="/about">
                        <button className="bg-[#ff5f13] px-6 py-2 text-white rounded-md hover:bg-[#e15514] transition-all">Дэлгэрэнгүй</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;
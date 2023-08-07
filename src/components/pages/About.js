import React from "react";
import Members from "../Members";
import ScrollToTopButton from "../ScrollToTop";

export default function About() {
    return (
        <div className="w-full">
            <div className="hidden xl:grid xl:grid-cols-2 w-[80%] mx-auto my-20">
                <div className="p-4 flex flex-col justify-center items-center text-center">
                    <h1 className="text-[24px] text-[#ff5f13] my-5">Бидний тухай</h1>
                    <p className="text-[#2c234d] ">Жишээ текст !!! - Монгол Улсын авто замын салбарт төлөвлөлт, хэмжилт, гүйцэтгэл, хяналтийн үйл ажиллагааг цогц байдлаар амжилттай хэрэгжүүлж байна. Бид захиалагч бүрт чанарыг амлаж, төлөвлөсөн цаг хугацаанд төслийг гүйцэтгэхдээ байгаль орчинд ээлтэй, нийгэм, эдийн засгийн үр өгөөжөө илүүтэй өгөхөд чиглүүлж, бизнесийн болон нийтийн эрх ашгийг зохистой хослуулан ажиллаж байна.</p>
                </div>
                <div className="mx-auto">
                    <img src="images/exampleLogo.png" className="" />
                </div>
            </div>
            <div className=" sm:grid-cols-2 block xl:hidden w-[80%] mx-auto">
                <div className="mx-auto">
                    <img src="images/exampleLogo.png" className="mt-14 mx-auto" />
                </div>
                <div className="p-4 flex flex-col justify-center items-center text-center">
                    <h1 className="text-[24px] text-[#ff5f13] my-5">Бидний тухай</h1>
                    <p className="text-[#2c234d] text-justify mb-20">Жишээ текст !!! - Монгол Улсын авто замын салбарт төлөвлөлт, хэмжилт, гүйцэтгэл, хяналтийн үйл ажиллагааг цогц байдлаар амжилттай хэрэгжүүлж байна. Бид захиалагч бүрт чанарыг амлаж, төлөвлөсөн цаг хугацаанд төслийг гүйцэтгэхдээ байгаль орчинд ээлтэй, нийгэм, эдийн засгийн үр өгөөжөө илүүтэй өгөхөд чиглүүлж, бизнесийн болон нийтийн эрх ашгийг зохистой хослуулан ажиллаж байна.</p>
                </div>

            </div>
            <div className="bg-[#f5f5f5] pt-1 pb-10">
                <p className='text-[#ff5f13] mx-auto w-full text-center text-[24px] my-5'> Компаны удирдлагууд </p>
                <h1 className='text-[#2c234d] text-[24px]'></h1>

                <div className='w-[80%] mx-auto'>
                    <div className='w-full flex justify-center'>
                        <ul className='grid lg:grid-cols-3  gap-16 '>
                            <Members name="Б. Ганзориг" img="images/teamMember3.jpg" job="Ерөнхий захирал" />
                            <Members name="Д. Баттулга" img="images/teamMember1.jpg" job="Гүйцэтгэх захирал" />
                            <Members name="Х. Алтансүх" img="images/teamMember2.jpeg" job="Ерөнхий инженер" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 xl:px-10 ">
                <div className="p-8 text-center">
                    <img src="images/mission.png" className=" opacity-80 my-4 w-[60px] h-[60px] mx-auto" />
                    <h1 className="text-[#ff5f13] my-4 text-[15px] font-bold ">АЛСЫН ХАРАА</h1>
                    <p className="text-[#2c234d] font-mono text-[13px]">Жишээ текст !!! Бид 2024 онд мэдээллийн технологийн салбарт тэргүүлэгч компани болно.</p>
                </div>
                <div className="p-8 text-center">
                    <img src="images/purpose.png" className=" opacity-80 my-4 w-[60px] h-[60px] mx-auto " />
                    <h1 className="text-[#ff5f13] my-4 text-[15px] font-bold">ЭРХЭМ ЗОРИЛГО</h1>
                    <p className="text-[#2c234d] font-mono text-[13px]">Жишээ текст !!! Бид шинэчлэлийг тэргүүлэн мэдээлэл, харилцаа холбооны шилдэг технологи, шийдэл, үйлчилгээгээр харилцагчдынхаа бизнесийн хөгжлийг дэмжигч компани байна. </p>
                </div>
                <div className="p-8 text-center">
                    <img src="images/values.png" className=" opacity-80 my-4 w-[60px] h-[60px] mx-auto" />
                    <h1 className="text-[#ff5f13] my-4 text-[15px] font-bold">ҮНЭТ ЗҮЙЛС</h1>
                    <p className="text-[#2c234d] font-mono text-[13px]">Жишээ текст !!! Харилцагчийн дээдлэл, Шинэчлэл ба Мэдлэг
                        Хариуцлага, Ёс зүй, Багийн ажиллагаа</p>
                </div>
            </div>

            <h1 className="text-[#2c234d] text-[24px] my-6 " >Бидний зарчим</h1>

            <div className="grid lg:grid-cols-4 gap-5 px-10 mb-20 xl:px-20 ">
                <div className="border">
                    <img src="images/check.svg" className=" w-[30px] mx-auto pt-8" />
                    <p className="text-[#2c234d] p-4 text-center">Ажилтан бүрийн оролцоог дээд зэргээр хангасан багийн ажиллагаанд тулгуурлаж аливаа ажлыг гүйцэтгэнэ.</p>
                </div>
                <div className="border">
                    <img src="images/check.svg" className=" w-[30px] mx-auto pt-8" />
                    <p className="text-[#2c234d] p-4 text-center">
                        Хууль дүрмийг нягт биелүүлэгч нийгмийн хариуцлагатай хамт олон байна.</p>
                </div>
                <div className="border">
                    <img src="images/check.svg" className=" w-[30px] mx-auto pt-8" />
                    <p className="text-[#2c234d] p-4 text-center">Шийдвэр гаргах эрх мэдлийг ажилтан бүрд олгосон шат дамжлага багатай хурдан шуурхай үйлчилгээтэй хамт олон</p>
                </div>
                <div className="border">
                    <img src="images/check.svg" className=" w-[30px] mx-auto pt-8 " />
                    <p className="text-[#2c234d] p-4 text-center">
                        Бүтэц процесс бүрийг технологийн тусламжтайгаар автоматжуулна.</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5]">
                <div className="w-[70%] mx-auto py-10">
                    <p className="text-[#2c234d] font-mono text-justify"> АвтоЗам ХХК нь 2012 онд мэдээллийн технологи, харилцаа холбоо, мэдээллийн аюулгүй байдлын хамгаалалтаар бизнесийн цогц шийдэл боловсруулах, мэдээлэл технологийн бараа бүтээгдэхүүн нийлүүлэх чиглэлээр байгуулагдан өнөөг хүртэл хэрэглэгчдийнхээ хэрэгцээ шаардлагад нийцсэн, сүүлийн үеийн дэвшилтэт технологийг цаг алдалгүй түргэн шуурхай нийлүүлж байна.</p>
                    <p className="p-4 text-[#2c234d] my-10 shadow-lg">Манай мэргэшсэн, чадварлаг хамт олон дэлхийн шилдэг 50 орчим брэндийн 5000 гаруй нэр төрлийн бүтээгдэхүүнийг албан ёсны эрхтэйгээр харилцагчдынхаа хүсэлтэд тулгуурлан чанарын өндөр түвшинд, түргэн шуурхай нийлүүлж байна.</p>
                    <img src="images/aboutCover.jpg" />
                    <p className="text-[#2c234d] font-mono my-5 text-justify">Мөн мэдээллийн технологийн бүх төрлийн сүлжээний бүтэц, зохион байгуулалтаа бага зардал, оновчтой хувилбараар бий болгоход тань бид үргэлж зөв шийдлийг санал болгон ажиллаж байдагтаа баяртай байдаг. Технологийн хурдацтай өөрчлөлт шинэчлэлд бид үргэлж бэлэн байж хэрэглэгчдийнхээ хэрэглээг илүү хялбар дөхөм, ухаалаг болгох тал дээр үргэлж шинийг санаачлан ажилласаар байх болно.</p>
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    )
}
import React from "react";

function Cooperation() {
    return (
        <div className="bg-[#e0e0e0] lg:h-[350px] w-full pb-20">
            <h2 className="text-[#2c243d] px-4 sm:px-0 text-[24px] md:text-[32px] w-full text-center pt-6">Хамтран ажилласан байгууллагууд</h2>
            <div className=" grid lg:flex gap-10 sm:gap-32 justify-center mt-20">
                <img src="images/khanbank.png" className="w-[100px] mx-auto lg:mx-0" />
                <img src="images/ztyam.png" className="w-[200px]" />
                <img src="images/mobicom.png" className="w-[200px]" />
            </div>
        </div>
    )
}

export default Cooperation;
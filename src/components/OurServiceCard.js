import React from "react";

function OurServiceCard(props) {
    return (
        <div className="w-[300px] border h-[420px] rounded-xl mx-auto my-10">
            <img src={props.src} className="h-[250px] rounded-t-xl mb-2" />
            <h2 className="text-[24px] text-[#2c234d] px-4 text-center h-[70px]">{props.title}</h2>
            <p className="text-[15px] text-[#57667e] px-4">{props.desc}</p>
        </div>
    )
}

export default OurServiceCard;
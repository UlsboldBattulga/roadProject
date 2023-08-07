import React from "react";

function ServiceCard(props) {
    return (
        <>
            <li className='min-h-[396px] w-[285px] border border-gray-400 rounded-md items-center justify-center flex mx-auto my-4'>
                <a className='' href={props.path}>
                    <figure className='w-[70px] mx-auto mb-4 border-b-4 border-[#ff5f13]' data-category={props.label}>
                        <img
                            className='w-[50px] my-5 mx-auto'
                            alt='Travel Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='text-[24px] h-[70px] text-[#2c243d] items-center justify-center flex px-5 text-center my-4'>
                        <h5 className=''>{props.desc}</h5>
                    </div>
                    <div className='px-6 text-center text-[16px] inherit text-[#57667e]'>
                        <h5 className=''>{props.text}</h5>
                    </div>

                </a>
            </li>
        </>
    )
}

export default ServiceCard;
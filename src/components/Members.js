import React from "react";
import './Members.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Members(props) {
    return (
        <>
            <Link className='' to={props.path}>
                <li className='relative border w-[250px] rounded-md'>
                    <figure className='' data-category={props.label}>
                        <img
                            className='w-[250px] rounded-md h-[300px]'
                            alt=''
                            src={props.img}
                        />
                    </figure>
                    <div className='absolute bottom-0 bg-[#fff]/80 text-center flex flex-col items-center justify-center h-[50px] w-full  '>
                        <h1 className="text-[#2c234d] text-[18px]">
                            {props.name}
                        </h1>
                        <p className="text-[#392a70] text-[12px] italic">{props.job}</p>
                    </div>
                </li>
            </Link>
        </>
    )
}

export default Members;
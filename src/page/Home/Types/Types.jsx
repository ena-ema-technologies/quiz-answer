import React from 'react';
import img1 from "../../../assets/images/types.svg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const Types = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-[1440px] mx-auto md:mb-10'>

                <div className='flex flex-col items-center md:flex-row content-center' >
                    <div className=' w-full  md:w-7/12 lg:w-1/2 p-10'>
                        <div>
                            <p className='text-[#33A474] font-bold'>PERSONALITY TYPES</p>
                            <h1 className='font-medium my-2 text-4xl lg:text-5xl text-[#343C4B]'>Understand others</h1>
                            <p className='my-3 text-[#343C4B] text-lg'>In our free type descriptions you’ll learn what really drives, inspires, and worries different personality types, helping you build more meaningful relationships.</p>
                            <div className='flex items-start md:items-center my-8'>
                                <div className="flex  mr-5">
                                    <Link to="/free-test" className="px-6 py-3 md:px-10  md:py-4 rounded-full bg-[#33A474] text-white text-lg md:text-xl mx-auto font-medium">Personality Types </Link>
                                </div>
                                <div>
                                    <Link to='' className='text-[#4298B4] font-medium flex items-center gap-1 py-3 hover:underline'>EXPLORE THEORY <FaArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-5/12 lg:w-1/2 p-10'>
                        <img src={img1} className='mx-5 w-1/2 md:w-full my-auto'></img>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Types;
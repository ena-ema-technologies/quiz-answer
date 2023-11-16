import React from 'react';
import img1 from "../../../assets/images/teams.svg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const Teams = () => {
    return (
        <div className='bg-white'>
        <div className='max-w-[1440px] mx-auto md:mb-10'>

            <div className='flex flex-col items-center md:flex-row content-center' >
                <div className=' p-10 w-full md:w-5/12 lg:w-1/2'>
                        <img src={img1} className='mx-5 w-1/2 md:w-full my-auto'></img>
                    </div>
                <div className='w-full md:w-7/12 lg:w-1/2  p-10'>
                    <div>
                        <p className='text-[#4298B4] font-bold'>Teams</p>
                        <h1 className='font-medium my-2 text-4xl lg:text-5xl text-[#343C4B]'>Understand your team better</h1>
                        <p className='my-3 text-[#343C4B] text-lg'>Understand your team better with our Team Assessments. Improve communication, create harmony, and help team members develop their individual strengths. Works for teams of all sizes.</p>
                        <div className='my-8'>
                            <div className="flex  mr-5">
                                <Link to="/free-test" className="px-6 py-3 md:px-10  md:py-4 rounded-full bg-[#4298B4] text-white text-lg md:text-xl mx-auto font-medium">Team Assessments</Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
               
            </div>

        </div>


    </div>
    );
};

export default Teams;
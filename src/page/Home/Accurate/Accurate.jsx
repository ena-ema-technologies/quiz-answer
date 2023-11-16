import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/images/accurate.svg";
import img2 from '../../../assets/images/accurate2.png';
const Accurate = () => {
    return (
        <div>
            
             <div className="">
                <div className=" my-10 ">
                   
                   
                    
                    <img src={img1} alt="" />
                    <div className="w-full bg-[#33A474] py-10 px-10">
                            <h1 className="text-4xl md:text-5xl text-center font-bold text-white">Curious how accurate we are about you?</h1>
                           
                            <div className="flex justify-center mt-10">
                            <Link to="/free-test" className="px-14  py-6 rounded-full bg-[#88619A] text-white text-xl mx-auto font-medium"> <div className='flex items-center'> Take the Test<span className='ml-[10px]'><FaArrowRight/></span> </div></Link>
                            </div>
                    </div>
                    <div >
                        <img src={img2} className='w-full'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accurate;
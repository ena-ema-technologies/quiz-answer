import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { data } from 'autoprefixer';
import axios from 'axios';
const Banner = () => {
    const [testCount, setTestCount] = useState({})
    const navigate = useNavigate()



    useEffect(()=>{
        fetch("https://16-personality-server.vercel.app/total-test-number")
        .then(res=>res.json())
        .then(data=>setTestCount(data))
    },[])


    const testIncreased = async (id) => {

        const newTestTotal = {
           totalNumber: parseInt(testCount?.totalNumber) + 1
        }

        const res = await axios.patch(`https://16-personality-server.vercel.app/number-increase/${id}`, newTestTotal)

        if(res.data.modifiedCount > 0){
            navigate("/free-test")
        }

        

    }

    console.log(testCount);



    return (

        <div>
            <div className="z-10">
                <div className="w-full bg-[#4298B4] py-10">
                    <h1 className="text-5xl text-center font-bold text-white">“What Is Your EATS SCORE <span className='text-xl '> &copy; </span> ”</h1>
                    <p className='text-center text-white font-bold text-3xl mt-3'>Emotional Appetite Tendency Score</p>
                    <p className="text-white   w-1/2 mt-5 mx-auto text-xl text-center">The EATS SCORE<span className='text-xs '>&copy;</span> was developed in 2023 by author, life coach, and professional chef Molly Zemek as part of her book - <Link to="https://www.mollyzemek.com/book"><span className='underline text-yellow-100'>Decoding Your Emotional Appetite: A Food Lover’s Guide to Weight Loss</span></Link> . In one section of the book, Molly identifies 4 attributes that people tend to have that can drive their emotional eating: <span className='font-bold'> Security</span>, <span className='font-bold'>Escape</span>, <span className='font-bold'>Connection</span>, and <span className='font-bold'>Pleasure</span>.</p>
                    <p className='text-white mt-4 w-1/2 mx-auto text-xl text-center'>Please take the following 16 question short quiz to provide some insight into where your tendencies presently might be. There are no right or wrong answers; there should be no shame in your honesty. Following the quiz, Molly will provide you more of a description of each tendency and some tips to more mindfully eat.</p>
                    <div className="flex justify-center mt-10">
                        <button className='btn bg-[#33a474] border-[#33a474] flex items-center gap-3' onClick={()=>testIncreased(testCount?._id)}> Eats Quiz <FaArrowRight /> </button>
                    </div>
                </div>

            </div>
            <div className='max-w-[1440px] mx-auto'>
                <div className=' text-center mt-10 ' >
                    <h1 className='text-4xl md:text-6xl font-medium  text-[#33A474]'>{testCount?.totalNumber}</h1>
                    <p className='text-lg   text-black py-2'>Total tests taken </p>
                </div>
            </div>
        </div>

    );
};

export default Banner;


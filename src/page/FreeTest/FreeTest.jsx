import React, { useEffect, useRef, useState } from 'react';
import { useForm, } from 'react-hook-form';
import { FaArrowRight, FaFacebook, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { HiOutlineMail, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import icon1 from "../../assets/icons/people.png";
import icon2 from "../../assets/icons/man.png";
import icon3 from "../../assets/icons/tongue.png";
import icon4 from "../../assets/icons/shield.png";
import { HiOutlineEnvelope, HiXMark } from 'react-icons/hi2';

const FreeTest = () => {
    const resultUrl = "https://personality-69fe6.web.app/free-test";
    const subject = encodeURIComponent('Decode Your Emotional Appetite…my present EATS score is…');
    const body = encodeURIComponent('https://personality-69fe6.web.app/free-test');
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    const [userEmail, setUserEmail] = useState(null)
    const [currentPage, setCurrentPage] = useState(0);
    const answerInputRef = useRef(null);
    const [indexNumber, setIndexNum] = useState(-1)
    const [totalData, setTotalData] = useState([])
    const [table, setTable] = useState(false)
    const [totalScore, setTotalScore] = useState(0);
    const [copied, setCopied] = useState(false);


    console.log(totalData);




    const {
        register,
        handleSubmit, reset, formState
    } = useForm();

    const questions = [
        {
            id: 1,
            name: 'When I go to a party, I spend much of the time huddled with friends near the food/drinks.'
        },
        {
            id: 2,
            name: 'After a long or challenging day, I make a beeline to the kitchen or a restaurant.'
        },
        {
            id: 3,
            name: 'I keep snacks/treats stored in a special place. '
        },
        {
            id: 4,
            name: 'I am already scheduling the next great meal.'
        },
        {
            id: 5,
            name: 'I finish what is on my plate because it would be a waste not to.'
        },
        {
            id: 6,
            name: 'I order/prepare extra because it might be needed.'
        },
        {
            id: 7,
            name: 'When I get bad news or am upset, a little of my favorite food can help take the edge off.'
        },
        {
            id: 8,
            name: 'Meeting with a friend/family seems boring if food is not involved.',
        },
        {
            id: 9,
            name: 'Something sweet is a perfect way to end a meal. '
        },
        {
            id: 10,
            name: 'There are certain dishes I love to eat as they remind me of my mom/dad/(other). '
        },
        {
            id: 11,
            name: 'Most events I attend involve eating and drinking.'
        },
        {
            id: 12,
            name: 'I work hard and deserve a treat and a little “me time” with a favorite food'
        },
        {
            id: 13,
            name: 'After completing a project/event, food can serve as a good reward. '
        },
        {
            id: 14,
            name: 'I might stand out or offend someone if I don’t join in eating/drinking when others are.'
        },
        {
            id: 15,
            name: 'There are some foods that I see or smell and just need to have it all. '
        },
        {
            id: 16,
            name: 'I find myself searching the kitchen to find the perfect bite to satisfy a craving. '
        }
    ];

    // const questionsPerPage = 4;


    // const handleAnswer = (number) => {
    //     setIndexNum(-1)

    //     if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
    //         setCurrentPage((prevPage) => prevPage + 1);
    //     }

    //     if (answerInputRef.current) {
    //         answerInputRef.current.value = '';
    //     }

    //     window.scrollTo({ top: 100, left: 0, behavior: 'smooth' });

    // };

    useEffect(() => {
        if (answerInputRef.current) {
            answerInputRef.current.focus();
        }
    }, [currentPage]);

    const handleEmailClick = () => {
        window.location.href = mailtoLink;
    };


    // const startQuestionIndex = currentPage * questionsPerPage;
    // const endQuestionIndex = startQuestionIndex + questionsPerPage

    // const element = document.getElementById(indexNumber + 1);


    const QuestionHandler = (index, question) => {
        setIndexNum(index)
        const divElement = document.getElementById(`question-${index}`);
        divElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }


    const onSubmit = async (data) => {
        // console.log(data)

        const allData = [
            {
                Name: data.questionsName1,
                Score: data.question1
            },
            {
                Name: data.questionsName2,
                Score: data.question2
            },
            {
                Name: data.questionsName3,
                Score: data.question3
            },
            {
                Name: data.questionsName4,
                Score: data.question4
            },
            {
                Name: data.questionsName5,
                Score: data.question5
            },
            {
                Name: data.questionsName6,
                Score: data.question6
            },
            {
                Name: data.questionsName7,
                Score: data.question7
            },
            {
                Name: data.questionsName8,
                Score: data.question8
            },
            {
                Name: data.questionsName9,
                Score: data.question9
            },
            {
                Name: data.questionsName10,
                Score: data.question10
            },
            {
                Name: data.questionsName11,
                Score: data.question11
            },
            {
                Name: data.questionsName12,
                Score: data.question12
            },
            {
                Name: data.questionsName13,
                Score: data.question13
            },
            {
                Name: data.questionsName14,
                Score: data.question14
            },
            {
                Name: data.questionsName15,
                Score: data.question15
            },
            {
                Name: data.questionsName16,
                Score: data.question16
            },
        ];
        // console.log(allData)



        // console.log(allData); // it will remove from here

        if (allData.length === 0) {
            return <span className="loading loading-spinner loading-lg"> </span>

        } else {

            const countScore = allData.reduce((acc, curr) => {
                if (curr.Score === null) {
                    curr.Score = 0;
                }
                // console.log("acc", acc, "curr ", curr, "total ", acc + parseInt(curr.Score));
                return acc + parseInt(curr.Score);

            }, 0);
            setTotalScore(countScore)
            setTotalData(allData);
            setTable(true)

            const newData = {
                allAnswer: allData
            }
            const res = await axios.post("https://16-personality-server.vercel.app/send-user-result", newData)

        }

    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])


    const dataSubmit = async () => {
        const newData = {
            email: userEmail,
            allAnswer: totalData

        }
        // console.log(newData);
        const res = await axios.post("https://16-personality-server.vercel.app/user-test-result", newData)
        if (res.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Your test result saved!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    const copyToClipboard = () => {
        navigator.clipboard.writeText(resultUrl);
        setCopied(true)
    };

    //   Show result question wise
    const result01Indices = [0, 7, 10, 13];
    const result02Indices = [1, 6, 11, 12];
    const result03Indices = [3, 8, 14, 15];
    const result04Indices = [2, 4, 5, 9];

    // Generate Result 
    const Result = ({ indices }) => {
        const result = indices.reduce((acc, index) => acc + parseInt(totalData[index].Score), 0);
        return (
            <span>{result}</span>
        );
    };

    return (
        <section>

            {/* upper part */}
            <div className=' flex flex-col items-center justify-center'>
                <div className='w-full'>
                    <div className='bg-[#33A474] py-14 md:relative'>
                        <h1 className='text-4xl font-bold text-white text-center '>What Is Your EATS Score <span className='text-xs'>Ⓒ</span></h1>
                        <p className='text-white text-center mt-4 text-lg font-semibold'>Emotional Appetite Tendency Score (EATS)</p>
                    </div>
                    <div className="custom-shape-divider-bottom-1699756183 ">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill fill-[#33A474]"></path>
                        </svg>
                    </div>
                </div>

                {/* cards */}

            </div>



            {/* questions part with list */}



            <div className='mt-10'>


                <form onSubmit={handleSubmit(onSubmit)} action="">
                    {questions.map((question, index) => (
                        <div key={index} className='my-16'>
                            <p className='mt-5 text-center text-2xl font-bold text-[#576071] mb-4'>{question.name}</p>

                            <input {...register(`questionsName${question.id}`)} defaultChecked={false} name='questions' type="text" className='hidden' defaultValue={question.name} />
                            <div onClick={() => QuestionHandler(index, question)} className={`${index == indexNumber + 1 ? "static" : "opacity-30 "} `} id={`question-${index}`}>

                                <div className='flex justify-center items-center gap-4 md:gap-10 mt-10 px-2'>

                                    <input {...register(`question${question.id}`)} defaultChecked={false} type="radio" defaultValue={5} name={`question${question.id}`} className="radio h-16 w-16 border-2 hidden " />

                                    <div className='flex flex-col items-center gap-2'>
                                        <input {...register(`question${question.id}`)} defaultChecked={false} type="radio" defaultValue={0} name={`question${question.id}`} className="radio radio-success h-14 w-14 md:h-20  md:w-20 border-2 border-[#33a474]" />
                                        <label htmlFor={`question${question.id}`} className='text-xs md:text-sm font-bold text-[#33a474]'>NEVER</label>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <input {...register(`question${question.id}`)} defaultChecked={false} type="radio" defaultValue={1} name={`question${question.id}`} className="radio radio-success w-12 h-12 md:h-14 md:w-14 border-2 border-[#33a474] " />
                                        <label htmlFor={`question${question.id}`} className='text-xs md:text-sm font-bold text-[#33a474]'>RARELY</label>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <input {...register(`question${question.id}`)} defaultChecked={false} type="radio" defaultValue={2} name={`question${question.id}`} className="radio radio-[#88619A] w-8 h-8 md:h-10 md:w-10 radio-success  border-2 border-[#33a474]" />
                                        <label htmlFor={`question${question.id}`} className='text-xs md:text-sm font-bold text-[#33a474]'>OCCASIONALLY</label>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <input {...register(`question${question.id}`)} defaultChecked={false} type="radio" defaultValue={3} name={`question${question.id}`} className="radio radio-success w-12 h-12 md:h-14 md:w-14 border-2 border-[#33a474]" />
                                        <label htmlFor={`question${question.id}`} className='text-xs md:text-sm font-bold text-[#33a474]'>USUALLY</label>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <input {...register(`question${question.id}`)} defaultChecked={false} type="radio" defaultValue={4} name={`question${question.id}`} className="radio radio-success h-14 w-14 md:h-20  md:w-20 border-2 border-[#33a474]" />
                                        <label htmlFor={`question${question.id}`} className='text-xs md:text-sm font-bold text-[#33a474]'>ALWAYS</label>
                                    </div>

                                </div>

                            </div>


                            <hr className='mt-10' />
                        </div>
                    ))}
                    {/* #88619A */}
                    <div className='flex justify-center  mb-20 mt-10 items-center'>
                        <button className={`px-8 text-xl text-white  btn bg-[#33a474] border-[#33a474] flex items-center gap-4  text-center py-2`} >Calculate My EATS Score<FaArrowRight /></button>
                    </div>
                </form>

                {
                    table ? <div className={`w-full lg:w-[70%] mx-auto items-center flex flex-col gap-5 my-14`}>
                        <p className='text-lg font-semibold'>The larger your number is in a certain emotional appetite area, the higher your Emotional Appetite Tendency
                            Score (EATS) is in that area. One’s relationship with food is not written in stone. Through various thought work,
                            you can work to decode your emotional appetite. As you work to change your relationship with food, you
                            might enjoy taking this quiz again to see if you have decreased your tendency in any areas. </p>

                        <h1 className='text-2xl font-bold my-5'>What Is Your EATS Score ?</h1>

                        <div className='flex flex-col gap-11 my-8'>
                            <div className='flex flex-col md:flex-row gap-12'>
                                <div className='flex items-center gap-10 w-full'>
                                    <img src={icon1} alt="" className='w-16' />
                                    <p className='flex flex-col items-center text-3xl font-bold text-[#88619A]'> Connection <Result indices={result01Indices} /></p>
                                </div>

                                <div className='w-full'>
                                    <p className='text-lg font-bold'>Core Belief: I might stand out if I don’t join in.</p>
                                    <p className='text-lg font-bold'>Key Mindset Shift: I can control my own happiness.</p>
                                    <p className='text-lg font-bold'>Key Emotional Shift: From Obligated to Committed.</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-12'>
                                <div className='flex items-center gap-10 w-full'>
                                    <img src={icon2} alt="" className='w-16' />
                                    <p className='flex flex-col items-center text-3xl font-bold text-[#88619A] whitespace-nowrap'>Escape <Result indices={result02Indices} /></p>
                                </div>

                                <div className='w-full'>
                                    <p className='text-lg font-bold'>Core Belief: I deserve a treat</p>
                                    <p className='text-lg font-bold'>Key Mindset Shift: I want to make time for myself to
                                        decompress without food.</p>
                                    <p className='text-lg font-bold'>Key Emotional Shift: From Overwhelmed to Curious.</p>
                                </div>
                            </div>


                            <div className='flex flex-col md:flex-row gap-12'>
                                <div className='flex items-center gap-10 w-full'>
                                    <img src={icon3} alt="" className='w-16' />
                                    <p className='flex flex-col items-center text-3xl font-bold text-[#88619A]'>Pleasure <Result indices={result03Indices} /></p>
                                </div>

                                <div className='w-full'>
                                    <p className='text-lg font-bold'>Core Belief: More is better.</p>
                                    <p className='text-lg font-bold'>Key Mindset Shift: This is more than enough to be fully
                                        satisfied.</p>
                                    <p className='text-lg font-bold'>Key Emotional Shift: From Dismissive to Satisfied.</p>
                                </div>
                            </div>


                            <div className='flex flex-col md:flex-row gap-12'>
                                <div className='flex items-center gap-10 w-full'>
                                    <img src={icon4} alt="" className='w-16' />
                                    <p className='flex flex-col items-center text-3xl font-bold text-[#88619A]'>Security <Result indices={result04Indices} /></p>
                                </div>

                                <div className='w-full'>
                                    <p className='text-lg font-bold'>Core Belief: Food will make me safe.</p>
                                    <p className='text-lg font-bold'>Key Mindset Shift: I can support myself</p>
                                    <p className='text-lg font-bold'>Key Emotional Shift: From Entitled to Compassionate.</p>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                }


                {/* <div className='flex justify-center  mb-20 mt-16 items-center'>
                    <button className={`${currentPage == 3 ? "hidden" : ""} px-8 text-xl text-white bg-[#88619A] flex items-center gap-4 rounded-full text-center py-2`} onClick={handleAnswer}>Next <FaArrowRight /></button>
                </div> */}

            </div>



            {
                // table === true ?
                //     <>
                //         <div className="overflow-x-auto w-2/3 mx-auto my-8">
                //             <table className="table table-zebra">
                //                 {/* head */}
                //                 <thead>
                //                     <tr className='bg-[#88619A] text-white text-center'>
                //                         <th className='border'>Name</th>
                //                         <th className='border'>Score</th>
                //                     </tr>
                //                 </thead>
                //                 <tbody>

                //                     {
                //                         totalData.map((t, index) => <tr key={index}>
                //                             <th className='text-start border px-3 py-2'>{t.Name}</th>
                //                             <th className='border px-3 py-2'>{t.Score}</th>
                //                         </tr>)
                //                     }

                //                 </tbody>
                //             </table>
                //         </div>

                //         <div className='my-9 text-center'>
                //             <h1 className='font-bold text-2xl text-lime-500'> Total Score : {totalScore} </h1>
                //         </div>
                //     </>
                //     :
                //     <></>
            }


            {/* The button to open modal */}

            


           {
            table ?  <div className={`w-full lg:w-[70%] mx-auto items-center flex flex-col gap-5 my-14 text-[#000]`}>
            <p><span className='text-xl font-semibold'>More</span> information and tips available via Molly’s <a href="https://podcasts.apple.com/us/podcast/weight-loss-for-food-lovers/id1500464977" target='_blank' className='underline text-[#88619A]'>Weight Loss for Food-Lovers podcast</a> and in her book <a href="https://www.mollyzemek.com/" target='_blank' className='underline text-[#88619A]'>Decoding Your
                Emotional Appetite: A Food-Lover’s Guide to Weight Loss.</a></p>
            <div className='inline-flex items-center gap-4'>Share your EATS score: <span className='cursor-pointer text-[#1877f2] border px-3 py-3 rounded-full border-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-500' onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resultUrl)}`, '_blank')}><FaFacebook className='w-5 h-5' /></span>
                <span className='cursor-pointer text-[#000] border px-3 py-3 rounded-full border-[#356aaf] hover:bg-[#000] hover:text-white transition-all duration-500' onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check%20out%20my%20result!&url=${encodeURIComponent(resultUrl)}`, '_blank')}><FaTwitter className='h-5 w-5 text-blue-500' /></span>

                <span className='cursor-pointer text-[#c71610] border px-3 py-3 rounded-full border-[#c71610] hover:bg-[#c71610] hover:text-[#ffffff] transition-all duration-500' onClick={handleEmailClick}><HiOutlineEnvelope className='h-5 w-5' /></span>
            </div>
        </div> : ""
           }


            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-4xl">Get Your Results!</h3>
                    <p className="py-3 text-lg font-medium">Enter your e-mail address to get a copy of your results and save them for access at a later date.
                    </p>

                    <div className='py-4 relative w-4/5 mx-auto'>
                        <input onChange={(e) => setUserEmail(e.target.value)} type="text" placeholder='your@email.com' className='px-12  py-4 border outline-none w-full focus:border-[#87609a] rounded-md placeholder:font-semibold' />
                        <span className='absolute left-4 top-[42%]'><HiOutlineMail className='h-5 w-5 text-[#87609a]' /></span>


                    </div>
                    <div className='mt-0 mb-8 w-4/5 mx-auto'>
                        <div className="flex flex-col space-y-1">
                            <label className="cursor-pointer label relative">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-success"

                                />
                                <p className="label-text absolute left-10 text-base font-medium text-gray-500 mt-1">
                                    {" "}
                                    Send me Defender tips and research insights
                                </p>
                            </label>
                        </div>
                    </div>

                    <div className='w-4/5 mx-auto'>
                        <button onClick={dataSubmit} className='bg-[#87609a] py-4 cursor-pointer text-center flex items-center justify-center rounded-l-full rounded-r-full font-semibold text-white w-full'>Send Result</button>
                    </div>

                    <div className='my-3'>
                        <p className='text-xs font-medium'>We’ll never sell or inappropriately share your personal data. See our <Link to="" className='text-[#4298b4] hover:underline'>Privacy Policy</Link> for more info. By continuing, you agree to our <Link to="/" className='text-[#4298b4] hover:underline'>Terms & Conditions.</Link></p>
                    </div>

                    <div className="modal-action border absolute top-1 right-5 px-1 py-1 rounded-full hover:border-[#87609a] cursor-pointer transition-all duration-500">
                        <label htmlFor="my_modal_6" className=""><HiOutlineX className='h-5 w-5' /></label>
                    </div>
                </div>
            </div>



            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='text-left flex gap-3'>
                        <div>
                            <h3 className="font-bold text-2xl">Share your profile</h3>
                            <p className="py-3 text-lg">Let someone else glimpse into your personality by sharing your profile link.</p>
                        </div>
                        <div>
                            <img src="https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender-male.svg?v=3" alt="Img" className='w-52' />
                        </div>
                    </div>


                    <div className='flex items-center gap-6'>

                        <div>
                            <p className='cursor-pointer text-[#1877f2] border px-5 py-5 rounded-full border-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-500' onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resultUrl)}`, '_blank')}><FaFacebook className='w-7 h-7' /></p>
                            <p className='font-light text-xs text-center mt-2'>Facebook</p>
                        </div>

                        <div>
                            <p className='cursor-pointer text-[#4298b4] border px-5 py-5 rounded-full border-[#4298b4] hover:bg-[#4298b4] hover:text-white transition-all duration-500' onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check%20out%20my%20result!&url=${encodeURIComponent(resultUrl)}`, '_blank')}><FaTwitter className='w-7 h-7' /></p>
                            <p className='font-light text-xs text-center mt-2'>Twitter</p>
                        </div>
                    </div>

                    <div className='my-4'>
                        <p className='font-semibold text-lg'>Or share the link below</p>
                        <div className='my-2 w-full border px-5 py-2 rounded-r-full flex rounded-l-full items-center justify-between'>
                            <input type="text" value={resultUrl} readOnly />
                            <button className='border border-[#33A474] px-3 py-1 rounded-l-full rounded-r-full font-semibold text-[#33A474] hover:bg-[#33A474] hover:text-white transition-all duration-400' onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy URL'}</button>
                        </div>
                    </div>

                    <div className="modal-action border absolute top-1 right-5 px-1 py-1 rounded-full hover:border-[#87609a] cursor-pointer transition-all duration-500">
                        <label htmlFor="my_modal_7" className=""><HiOutlineX className='h-5 w-5' /></label>
                    </div>
                </div>
            </div>


        </section>
    );
};
export default FreeTest;

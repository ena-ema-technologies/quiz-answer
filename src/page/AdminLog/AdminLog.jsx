import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./admin.css"
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Register from '../Register/Register';

const AdminLog = () => {
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation();
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { register, formState: { errors }, handleSubmit, reset, formState } = useForm();


    // console.log(allCodes);

    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }

    const onSubmit = async (data) => {

        const email = data?.email;
        const password = data?.password;

            signIn(email, password)
                .then(res => {
                    const loggedUser = res.user;
                    navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Success!',
                        text: 'Sign In Successful',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    reset();
                    let modalCheckbox = document.getElementById("logIn_modal");
                    modalCheckbox.checked = false;
    
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
    
                })

    }
    
    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])

    const closeModal =()=>{
        let modalCheckbox = document.getElementById("logIn_modal");
        modalCheckbox.checked = false;
    }
    return (
        <div>
            <input type="checkbox" id="logIn_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-left rounded">
                    <h3 className="text-xl font-extrabold">Login</h3>

                    <div className='register-form mt-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


                            <div className="inputGroup">


                                <input type="email"  className='border w-full py-2 px-5 rounded focus:outline-[#4297b3] outline-none' placeholder='Your Email' {...register("email", { required: true })}
                                    aria-invalid={errors.email ? "true" : "false"} />

                                {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Email is required</p>}
                            </div>


                            <div className="inputGroup relative">


                                <input type={type}  className='border w-full py-2 px-5 rounded focus:outline-[#4297b3] outline-none' placeholder='Your Password' {...register("password", { required: true })}
                                    aria-invalid={errors.password ? "true" : "false"} />
                                <div className='absolute right-3 top-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                                    {
                                        IsShow ? <FaEyeSlash className='h-5 w-5 text-[#4298B4]' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-[#4298B4]' onClick={handleShow} />
                                    }
                                </div>
                                {errors.password?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Password is required</p>}

                            </div>




                            <label id='log-btn' className='bg-[#4298B4] w-full py-2 rounded bg-opacity-90 text-center font-semibold text-white cursor-pointer'>
                                <input type="submit" value="Login" />
                            </label>

                        </form>
                    </div>

                    <SocialLogin />
                    <p onClick={closeModal} className='my-3 font-medium'>New to 16Personalities? <label htmlFor="register_modal" className="text-[#4298B4] hover:underline"> Register</label></p>





                    <div className="mb-3">
                        <label htmlFor="logIn_modal" className="absolute top-3 right-3 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7' />
                        </label>
                    </div>
                </div>

                <label className="modal-backdrop" htmlFor="logIn_modal">Close</label>
            </div>

            <Register />
        </div>
    );
};

export default AdminLog;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { googleIn } = useAuth();

    const handleGoogle = () => {
        
        googleIn()
            .then(async(res) => {
                const loggedUser = res.user;
                const newData = {
                    email: loggedUser.email,
                    name: loggedUser.displayName,
                    photo: loggedUser.photoURL,
                    role: "user"
                }
                console.log(newData);
                const result = await axios.post("https://16-personality-server.vercel.app/users", newData)
                if(result.data.insertedId){
                    navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Success!',
                        text: 'Sign In Successful',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })                    
                }

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

    return (
        <section className='w-full text-sm'>
           <div className="divider text-gray-400">or</div> 
            <div className='flex flex-col lg:flex-row items-center justify-evenly w-full gap-3'>
                <div className='inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 font-normal w-full lg:w-fit cursor-pointer' onClick={handleGoogle}>
                    <FaGoogle className='w-6'/>
                    <p className='text-center w-full lg:text-left'>Sign With Google</p>
                </div>
            </div>
        </section>
    );
};

export default SocialLogin;
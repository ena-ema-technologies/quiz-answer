import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/resource/Molly Zemek Coaching logo.png';
import { HiUser } from 'react-icons/hi';
import AdminLog from '../../AdminLog/AdminLog';
import useAuth from '../../../hooks/useAuth';
import { HiArrowRightCircle } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import useAdmin from '../../../hooks/useAdmin';
import { FaArrowRight } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useAuth()
    const [open, setOpen] = useState(false);
    const [isAdmin] = useAdmin();

    const toggle = () => {
        setOpen(!open)
    }

    const logout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }


    return (
        <div>
            <div className=" navbar bg-white   my-0 sticky  ">

                <div className="flex justify-between w-full mx-2 lg:hidden">
                    <div className='navbar-start hidden lg:flex'>
                        <Link to="https://www.mollyzemek.com/" className='inline-flex items-center gap-2'><img src={logo} className='h-[80px]'></img>  </Link>
                    </div>

                    <div>
                        <Link to="https://www.mollyzemek.com/" >
                        <img src={logo} className='h-[50px] w-[90%]'></img></Link>
                    </div>

                    


                    






                </div>
                <div className='navbar-start hidden lg:flex'>
                    <Link to="https://www.mollyzemek.com/" className='inline-flex items-center gap-2'><img src={logo} className='h-[80px]'></img>  </Link>
                </div>






            </div>


            <AdminLog />
        </div>
    );
};

export default NavBar;
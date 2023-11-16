import React from 'react';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.svg"
import useAdmin from '../../hooks/useAdmin';

const AdminDashBoard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet />
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute left-2 top-2"><HiBars3BottomLeft className='w-10 h-10 text-primary' /></label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu py-4 pl-4 pr-0 w-64 h-full bg-base-200 text-base-content">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mt-2 mb-10">
                        <img src={logo} alt="Logo" className='w-40' />
                    </Link>
            {/* Sidebar content here */}
           {
            isAdmin ?  <NavLink to="/admin-dashboard/test-result-check" className={({ isActive }) => (isActive ? "w-full bg-base-100 font-bold text-[#4297b3] py-3 px-3 rounded-tl-lg rounded-bl-lg" : "font-semibold py-3 px-3 text-neutral")}>All Test Result</NavLink> :  <NavLink to="/admin-dashboard/your-result" className={({ isActive }) => (isActive ? "w-full bg-base-100 font-bold text-[#4297b3] py-3 px-3 rounded-tl-lg rounded-bl-lg" : "font-semibold py-3 px-3 text-neutral")}>Your Test Result</NavLink>
           }
          </ul>
        
        </div>
      </div>
    );
};

export default AdminDashBoard;
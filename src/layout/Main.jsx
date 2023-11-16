import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../page/Shared/NavBar/NavBar';
import Footer from '../page/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
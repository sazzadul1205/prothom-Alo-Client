import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar2 from '../Pages/Shared/Navbar2/Navbar2';

const PublicLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PublicLayout;
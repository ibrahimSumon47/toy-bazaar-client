import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Home/Navbar';
import Footer from '../Share/Home/Footer';

const Main = () => {
    return (
        <div className='lg:mx-10'>
            <Navbar/>
            <hr />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
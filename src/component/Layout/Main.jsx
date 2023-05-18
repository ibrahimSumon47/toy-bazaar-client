import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Home/Navbar';

const Main = () => {
    return (
        <div className='mx-10 md:mx-20 my-5'>
            <Navbar/>
            <hr />
            <Outlet/>
        </div>
    );
};

export default Main;
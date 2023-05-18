import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Navbar/>
            <hr />
        </div>
    );
};

export default Main;
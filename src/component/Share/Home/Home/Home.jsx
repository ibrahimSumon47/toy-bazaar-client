import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Brands from './Brands';
import ReactTabs from './ReactTabs';

const Home = () => {
    return (
        <div className='md:mx-20 my-5'>
            <Banner/>
            <Gallery />
            <ReactTabs/>
            <Brands/>
        </div>
    );
};

export default Home;
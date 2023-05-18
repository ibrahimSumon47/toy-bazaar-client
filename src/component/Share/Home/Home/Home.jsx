import React from 'react';
import Main from '../../../Layout/Main';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='md:mx-20 my-5'>
            <Banner/>
            <Gallery />
        </div>
    );
};

export default Home;
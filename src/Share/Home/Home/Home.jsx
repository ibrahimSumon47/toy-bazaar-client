import React from 'react';
import Main from '../../Layout/Main';
import Banner from '../Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='mx-10 md:mx-52 my-5'>
            <Main/>
            <Banner/>
            <Gallery />

        </div>
    );
};

export default Home;
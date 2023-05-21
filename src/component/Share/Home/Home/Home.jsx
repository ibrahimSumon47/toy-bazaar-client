import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Brands from './Brands';
import ReactTabs from './ReactTabs';
import SiteOverView from './SiteOverView';
import Newsletter from './Newsletter';
import useTitle from '../../../../hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div className='md:mx-20 my-5'>
            <Banner/>
            <Gallery />
            <ReactTabs/>
            <Brands/>
            <SiteOverView/>
            <Newsletter/>
        </div>
    );
};

export default Home;
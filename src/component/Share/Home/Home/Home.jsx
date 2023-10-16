import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Brands from './Brands';
import ReactTabs from './ReactTabs';
import SiteOverView from './SiteOverView';
import Newsletter from './Newsletter';
import useTitle from '../../../../hooks/useTitle';
import Reviews from '../Reviews';
import About from './About';
import Contact from './Contact';

const Home = () => {
    useTitle("Home")
    return (
        <div className='md:mx-20 my-5'>
            <Banner/>
            <About/>
            <Gallery />
            <ReactTabs/>
            <Brands/>
            <Contact/>/
            <SiteOverView/>
            <Reviews/>
            <Newsletter/>
        </div>
    );
};

export default Home;
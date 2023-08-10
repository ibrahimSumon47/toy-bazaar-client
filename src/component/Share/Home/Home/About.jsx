import React from 'react';
import Heading from '../../../Heading/Heading';

const About = () => {
    return (
        <div>
        <Heading  heading="About Us"/>
      <div className="lg:flex lg:flex-row-reverse justify-center items-center">
        <img className="lg:w-2/4 lg:rounded-l-full" src="https://img.freepik.com/free-vector/different-kind-toys_1308-71053.jpg?w=900&t=st=1691517473~exp=1691518073~hmac=66faa21e8c5cdd6bdc92f670fa38a96f5c34370d46f5f6350f364a58ecaafa55" alt="" />
      <p className="px-5 md:mt-5 text-2xl lg:text-4xl">Introducing a world of excitement and adventure with our action figure toys at Toy Bazaar! Dive into a realm where imagination knows no bounds and heroic tales come to life. From fearless superheroes to daring space explorers, our meticulously crafted action figures are designed to spark the imaginations of both kids and collectors alike. Immerse yourself in a universe of endless play possibilities, where every figure tells a unique story and every battle is an epic showdown. With a vast selection of characters and themes, Toy Bazaar brings the thrill of action-packed adventures right to your fingertips. Explore, collect, and ignite your passion for play with our extraordinary action figure toys. Welcome to a world of wonder, exclusively at Toy Bazaar!</p>
      </div>
    </div>
    );
};

export default About;
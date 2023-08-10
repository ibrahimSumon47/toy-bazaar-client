import React, { useEffect, useState } from 'react';
import Heading from '../../Heading/Heading';
import Slider from 'react-slick';
import { Rating } from '@smastrom/react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const url = `https://toy-bazaar-server-ten.vercel.app/reviews`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false
  };


    return (
        <div>
      <Heading heading="Customers Reviews" />
      <Slider {...settings} className=" md:px-40 lg:px-96 text-center font-bold mx-auto">
        <div>
          <p className="font-bold">Name: {reviews[0]?.user_name}</p>
          <p><Rating className="mx-auto my-5" style={{ maxWidth: 180 }} value={reviews[0]?.rating} readOnly /></p>
          <p>Course Name: {reviews[0]?.toy_name}</p>
          <p className="my-5">Review: {reviews[0]?.review_details}</p>
        </div>
        <div>
          <p className="font-bold">Name: {reviews[1]?.user_name}</p>
          <p><Rating className="mx-auto my-5" style={{ maxWidth: 180 }} value={reviews[1]?.rating} readOnly /></p>
          <p>Course Name: {reviews[1]?.toy_name}</p>
          <p className="my-5">Review: {reviews[1]?.review_details}</p>
        </div>
        <div>
          <p className="font-bold">Name: {reviews[2]?.user_name}</p>
          <p><Rating className="mx-auto my-5" style={{ maxWidth: 180 }} value={reviews[2]?.rating} readOnly /></p>
          <p>Course Name: {reviews[2]?.toy_name}</p>
          <p className="my-5">Review: {reviews[2]?.review_details}</p>
        </div>
        <div>
          <p className="font-bold">Name: {reviews[3]?.user_name}</p>
          <p><Rating className="mx-auto my-5" style={{ maxWidth: 180 }} value={reviews[3]?.rating} readOnly /></p>
          <p>Course Name: {reviews[3]?.toy_name}</p>
          <p className="my-5">Review: {reviews[3]?.review_details}</p>
        </div>
        <div>
          <p className="font-bold">Name: {reviews[4]?.user_name}</p>
          <p><Rating className="mx-auto my-5" style={{ maxWidth: 180 }} value={reviews[4]?.rating} readOnly /></p>
          <p>Course Name: {reviews[4]?.toy_name}</p>
          <p className="my-5">Review: {reviews[4]?.review_details}</p>
        </div>
      </Slider>
    </div>
    );
};

export default Reviews;
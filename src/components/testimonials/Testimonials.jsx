import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-3.svg";
import Image4 from "../../assets/avatar-4.png";
//import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image4,
    title: "Artur Czujkow",
    subtitle: "Middle Frontend Developer",
    comment:
      "I enjoy working with React.js and am learning a lot. I am ready to spend non-working time on learning and self-development.😼",
  },
  {
    id: 2,
    image: Image2,
    title: "Senya Dum",
    subtitle: "Product manager at Cryptonumiz",
    comment:
      "Thank you for your contribution, for your capabilities and desire to develop. This man is a damn fast learner!🥳",
  },
  {
    id: 3,
    image: Image3,
    title: "Alex Muench",
    subtitle: "Product designer at Dribble",
    comment: " I love Star Wars and product design 👍",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Reviews</h2>

      <Swiper
        className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment glass">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

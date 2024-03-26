import React from "react";
import "./certificates.css";
// Certificate img's
import Image1 from "../../assets/certificate_1.png";
import Image2 from "../../assets/certificate_2.png";
import Image3 from "../../assets/certificate_3.png";
import Image4 from "../../assets/certificate_4.png";
import Image5 from "../../assets/certificate_5.png";
import Image6 from "../../assets/certificate_6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "JavaScript (Intermediate)",
    subtitle: "HackerRank",
    certLink: "https://www.hackerrank.com/certificates/3643b3018af6",
  },
  {
    id: 2,
    image: Image2,
    title: "Rest API (Intermediate)",
    subtitle: "HackerRank",
    certLink: "https://www.hackerrank.com/certificates/3643b3018af6",
  },
  {
    id: 3,
    image: Image3,
    title: "React (Basic)",
    subtitle: "HackerRank",
    certLink: "https://www.hackerrank.com/certificates/3643b3018af6",
  },
  {
    id: 4,
    image: Image4,
    title: "JavaScript (Basic)",
    subtitle: "HackerRank",
    certLink: "https://www.hackerrank.com/certificates/3643b3018af6",
  },
  {
    id: 5,
    image: Image5,
    title: "CSS (Basic)",
    subtitle: "HackerRank",
    certLink: "https://www.hackerrank.com/certificates/3643b3018af6",
  },
  {
    id: 6,
    image: Image6,
    title: "AI (Basic)",
    subtitle: "Google & PRJCTR",
    certLink: "https://www.hackerrank.com/certificates/3643b3018af6",
  },
];

const Certificates = () => {
  return (
    <section className="certificates container section" id="certificates">
      <h2 className="section__title">Certificates</h2>

      <Swiper
        className="certificates__container grid"
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
            <SwiperSlide className="certificates__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="certificates__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;

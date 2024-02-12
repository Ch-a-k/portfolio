import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "User Experience and User Interface - these are the words that every frontend developer should not just know, but understand how it works. I have good experience in this direction. Ilustrator, Photoshop, Figma - my besties.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "HTML5, Bootstrap, CS3, SASS, LESS, JavaScript, React.js, TypeScript, Node.js, Docker, WordPres, Gutenberg, PHP, Webpack, npm, WooCommerce, GitHub.",
  },
  {
    id: 3,
    image: Image3,
    title: "Management",
    description:
      "My managerial expertise ensures efficient team leadership and goal attainment. I'm adept at coordinating projects of any complexity, fostering transparent communication, and inspiring colleagues to succeed.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Services;

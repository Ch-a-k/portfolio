import React from "react";
import "./about.css";
import AboutImg from "../../assets/avatar-4.png";
import AboutBox from "./AboutBox";
import MyCV from "../about/CVplus.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__video">
          {/* <img src={AboutImg} alt="" className="about__img" /> */}
          <iframe
            className="glass"
            src="https://www.youtube.com/embed/m1BU5_HTLr8"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        {/* Videoplayer from YouTube */}

        <div className="about__data glass grid">
          <div className="about__info controls">
            <p className="about__description">
              I am Artur, a web developer from Ukraine. I have extensive skills
              in designing and building websites and also have a good
              understanding of React, Next.js and WordPress. By the way, this
              resume is written entirely in React. I have experience with
              blockchain applications, I have good practice in team management,
              project management, as I used to be a co-owner of an IT-company,
              Kotora was forced to close because of the war. Now I am looking
              for a good company, a good team, where I can steadily develop as a
              developer, because I like it.
            </p>
            <p className="contact__details">tel: +48 512 722 470</p>{" "}
            <p>WhatsApp: +38 073 07 08 088</p>
            <p className="email">email: it.zero.developer@gmail.com</p>
            <a className="btn" href={MyCV} download="Artur_Chuikov_CV.pdf">
              {" "}
              Download CV{" "}
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name ">Management</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage management"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name ">Polish language (A2)</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage polish"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name ">English language (B2)</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage english"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name ">Ukrainian language (native)</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ukrainian"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name ">russian language (native)</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage russian"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;

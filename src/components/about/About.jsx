import React from "react";
import "./about.css";
import AboutBox from "./AboutBox";
import MyCV from "../about/CV Artur Chuikov.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__video">
          <iframe
            className="glass"
            src="https://www.youtube.com/embed/m1BU5_HTLr8"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        {/* Videoplayer from YouTube */}

        <div className="about__data glass grid">
          <div className="about__info controls">
            <p className="about__description">
              Greetings everyone! I am a professional with diverse experience in
              IT and beyond, demonstrating exceptional adaptability and
              intercultural competence. With strong leadership qualities and
              communication skills, I have successfully managed teams and
              projects in various fields, from human rights to IT technologies.
              My ability to learn quickly and adapt to new challenges, combined
              with motivation and the ability to work in a multicultural
              environment, make me a valuable asset to any organization aiming
              for innovation and development. I am ready to take on the role of
              director, leader, companion, advisor, designer, or frontend
              developer in your company. However, I give priority to frontend or
              web development. With great respect, looking forward to meeting
              you!
            </p>
            <p className="contact__details">tel: +48 512 722 470</p>{" "}
            <p>WhatsApp: +38 073 07 08 088</p>
            <p className="email">email: it.zero.developer@gmail.com</p>
            <a className="btn" href={MyCV} download="Artur Chuikov CV.pdf">
              {" "}
              Download CV{" "}
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend dev.</h3>
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
                <h3 className="skills__name ">Polish language (A1)</h3>
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

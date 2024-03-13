import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">49</h3>
          <span className="about__subtitle">Project complete</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <div>
          <h3 className="about__title">2555</h3>
          <span className="about__subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">4</h3>
          <span className="about__subtitle">Telegram bots</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-calendar"></i>

        <div>
          <h3 className="about__title">6d/10h</h3>
          <span className="about__subtitle">Days a week works</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;

import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contacts</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Hire me:</h3>
          <p className="contact__details">tel: +48 512 722 470</p>{" "}
          <p>WhatsApp: +38 073 07 08 088</p>
          <p>email: it.zero.developer@gmail.com</p>
        </div>
      </div>

      {/* <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Input your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Input your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Input your subject"
            />
          </div>

          <div className="contact__form-div">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form> */}
    </section>
  );
};

export default Contact;

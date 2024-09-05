import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [filledForm, setFilledForm] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cf2pcf4",
        "template_ujyba8h",
        form.current,
        "srU5YOcDS1ay8lnZC"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSuccess(true);
          setFilledForm(true);
        },
        (error) => {
          console.log(error.text);
          setFilledForm(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div>
      <div className="contact__container">
        <div className="contact__about contact__half">
          <h3 className="contact__title">
            Thank you for reviewing my project!
          </h3>
          <h4 className="contact__sub-title lightblue">
            Jose Rivera - Frontend Software Engineer
          </h4>
          <p className="contact__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            pariatur fugiat doloribus ullam impedit fuga architecto accusamus
            ipsam in distinctio ab, asperiores, voluptatum, blanditiis ipsum!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            consequatur modi laborum quisquam maxime rem nesciunt voluptates
            corporis unde aspernatur.
          </p>
          <div className="contact__languages">
            <div className="contact__language">
              <img
                className="language__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049"
                alt=""
              />
              <span className="language__name">HTML</span>
            </div>
            <div className="contact__language">
              <img
                className="language__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png?20210705212817"
                alt=""
              />
              <span className="language__name">CSS</span>
            </div>
            <div className="contact__language">
              <img
                className="language__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433"
                alt=""
              />
              <span className="language__name">JAVASCRIPT</span>
            </div>
            <div className="contact__language">
              <img
                className="language__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                alt=""
              />
              <span className="language__name">REACT</span>
            </div>
          </div>
        </div>
        {!filledForm ? (
          <div className="contact__submit contact__half">
            <h3 className="contact__submit--header contact__title">
              Let's have a chat
            </h3>
            <h4 className="contact__submit--sub-header contact__sub-title">
              I'm currently open to new opportunities!
            </h4>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form__item">
                <label className="form__item--label">Name:</label>
                <input
                  type="text"
                  required
                  className="form__item--label"
                  name="user_name"
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Email:</label>
                <input
                  type="email"
                  required
                  className="form__item--label"
                  name="user_email"
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Message:</label>
                <textarea
                  name="message"
                  required
                  className="form__item--label"
                />
              </div>
              <button type="submit" value="Send" className="form__submit">
                Send it my way!
              </button>
            </form>
          </div>
        ) : (
          <div className="success__fail--message">
            {success ? (
              <div className="success-message">
                <h3 className="attempt__header">Email Sent!</h3>
                <p className="attempt__para">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="error-message">
                <h3 className="attempt__header">Oops! Something went wrong.</h3>
                <p className="attempt__para">
                  Please{" "}
                  <a className="e-link" href="mailto:w.jayrivera@gmail.com">
                    contact me
                  </a>{" "}
                  directly.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

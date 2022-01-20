import "./contact.css";
import Phone from "../../../img/phone.png";
import Email from "../../../img/email.png";
import Address from "../../../img/address.png";
import { useRef, useState, Fragment } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "../../../Context";

function Contact() {
  const formRef = useRef();
  const [email, setEmail] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vql57yr",
        "template_kdta0j6",
        formRef.current,
        "user_ITfDulX561aQUewfU2Fq0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="c">
      <div className="c-bg" />
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              9618168958
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              askarunsai1@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              hyderabad
            </div>
          </div>
        </div>
        <div className="c-right">
          {email === true ? (
            <h1 className="email-done-text">
              Thanks ! we will get back to you soon{" "}
            </h1>
          ) : (
            <Fragment>
              <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                <input
                  style={{ backgroundColor: darkMode && "#333" }}
                  type="text"
                  name="user_name"
                  placeholder="Name"
                />
                <input
                  style={{ backgroundColor: darkMode && "#333" }}
                  type="text"
                  name="user_subject"
                  placeholder="Subject"
                />
                <input
                  style={{ backgroundColor: darkMode && "#333" }}
                  type="text"
                  name="user_email"
                  placeholder="Email"
                />
                <textarea
                  style={{ backgroundColor: darkMode && "#333" }}
                  type="text"
                  rows="5"
                  placeholder="message"
                  name="message"
                />
                <button>Submit</button>
              </form>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

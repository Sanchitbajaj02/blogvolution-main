import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { contactUs } from "../Util/axios";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FooterComponent = () => {
  let [inputVal, setInputValue] = useState({
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  function handleChange(event) {
    // console.log(event.target);
    // console.log("Input val", inputVal);
    const { name, value } = event.target;
    setInputValue({ ...inputVal, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    contactUs(inputVal)
      .then((data) => {
        toast(data.data.message, { type: "success" });
        // alert(data.data.message);

        console.log(data.data.result);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message, { type: "error" });
        // alert(err);
      });

    console.log(inputVal);
    // alert(`Email: ${inputVal.email} & Message: ${inputVal.message}`);
  };

  return (
    <React.Fragment>
      <div className="scroll-to-top">
        {isVisible && (
          <div onClick={scrollToTop}>
            <img
              src={process.env.PUBLIC_URL + "/images/scroll-icon.png"}
              alt="Go to top"
              className="img-fluid"
            />
          </div>
        )}
      </div>

      <section id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 my-1">
              <div className="row-md-9">
                <h4 className="footer-title">
                  About Us
                  <hr />
                </h4>

                <div className="footer-about-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>

              <div className="row-md-3 footer-social">
                <i className="fab fa-instagram fa-lg"></i>
                <i className="fab fa-facebook fa-lg"></i>
                <i className="fab fa-twitter fa-lg"></i>
                <i className="fab fa-youtube fa-lg"></i>
              </div>

              {/* <div className="text-center">
                <Link to="/team-members" className="text-white">
                  Team Members
                </Link>
              </div> */}
            </div>

            <div className="col-12 col-md-4 my-1">
              <h4 className="footer-title">
                Address
                <hr />
              </h4>

              <div className="footer-connect-text">
                <div className="footer-icon-gap">
                  <i className="fa fa-map-marker-alt fa-lg mr-3"></i> Faridabad,
                  Haryana
                </div>
                <div className="footer-icon-gap">
                  <i className="fa fa-phone-alt fa-lg mr-3"></i> +91 -
                  +91-0123456789
                </div>
                <div className="footer-icon-gap">
                  <i className="fa fa-envelope fa-lg mr-3"></i>{" "}
                  blogvolution@gmail.com
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 my-1">
              <h4 className="footer-title">
                Contact Us
                <hr />
              </h4>

              <form className="form-center" onSubmit={handleSubmit}>
                <div className="footer-form-group">
                  <label htmlFor="exampleInputEmail1">Email*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    defaultValue={inputVal.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="exampleInputMessage">Message*</label>
                  <br />
                  <textarea
                    id="exampleInputMessage"
                    cols="10"
                    rows="5"
                    name="message"
                    defaultValue={inputVal.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <button type="submit" className="btn submit-btn">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <hr />
          <p style={{ fontFamily: `Nova Cut, cursive` }}>
            Blogvolution @{new Date().getFullYear()} - All Rights Reserved.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FooterComponent;

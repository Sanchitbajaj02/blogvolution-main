import React, { useState } from "react";
import { toast } from "react-toastify";
import { forgetPass } from "../Util/axios";
import "react-toastify/dist/ReactToastify.css";
// import {Redirect} from 'react-router-dom'

const ForgotPassowrd = () => {
  let [forgotState, setForgotState] = useState({
    email: "",
  });

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    const { name, value } = event.target;
    setForgotState({ ...forgotState, [name]: value });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    event.target.reset();
    // console.log(forgotState);

    forgetPass(forgotState)
      .then((data) => {
        // console.log(data);
        toast(data.data.message, { type: "success" });
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <section>
        <div className="container my-5">
          <div className="row box-shadow">
            <div className="col-md-6 col-12 left-side">
              {/* <div className="row pt-5">
                <div className="col-8">
                  <h1 className="company">Health & Fitness</h1>
                </div>
              </div> */}

              <div className="my-5 px-4">
                <h1 className="login">FORGOT PASSWORD </h1>
                <p>Enter your registered email</p>

                <form method="POST" onSubmit={handleLogin}>
                  <div className="form-group py-2">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="form-control form-border-remove no-outline"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group py-3">
                    <button type="submit" className="btn btn-col" id="login">
                      <span className="log-txt-for">Click here</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 col-12 right-side">
              <img
                src="https://blog-project-react.vercel.app/images/forgot-pass.svg"
                alt="login"
                className="login-img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ForgotPassowrd;

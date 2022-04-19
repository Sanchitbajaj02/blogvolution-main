import React, { useState } from "react";
import { toast } from "react-toastify";
import { resetPass } from "../Util/axios";
import "react-toastify/dist/ReactToastify.css";
// import {Redirect} from 'react-router-dom'

const ResetPassword = (props) => {
  const [resetPassword, setNewPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setNewPassword({ ...resetPassword, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    event.target.reset();

    const paramsToken = props.match.params.token;

    if (resetPassword.newPassword === resetPassword.confirmPassword) {
      resetPass(paramsToken, { password: resetPassword.newPassword })
        .then((result) => {
          console.log(result);
          toast("Password updated correctly", { type: "success" });
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast("Error updating password", { type: "error" });
    }
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
                <h1 className="login">Reset PASSWORD </h1>
                <p>Enter your password</p>

                <form method="POST" onSubmit={handleLogin}>
                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control form-border-remove no-outline"
                      id="newPassword"
                      name="newPassword"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control form-border-remove no-outline"
                      id="confirmPassword"
                      name="confirmPassword"
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
                src={process.env.PUBLIC_URL + "/images/forgot-pass.svg"}
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

export default ResetPassword;

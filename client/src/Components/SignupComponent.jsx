import React, {useState} from "react";
import { register } from "../Util/axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupComponent = () => {
  let [signupState, setSignupState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    preference: "",
    confirmPassword: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    const { name, value } = event.target;
    setSignupState({ ...signupState, [name]: value });
  };
  // console.log(signupState)

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.target.reset();
    // console.log(signupState);
    const newSignupObj = {
      firstName: signupState.firstName,
      lastName: signupState.lastName,
      email: signupState.email,
      password: signupState.password,
      preference: signupState.preference,
    };

    if (signupState.password === signupState.confirmPassword) {
      register(newSignupObj)
        .then((data) => {
          // console.log(data);

          toast(data.data.message, { type: "success" });
          
          // window.location.href = "/login";
          history.push("/login");
        })
        .catch((error) => {
          toast(error.message, { type: "error" });
          console.error(error);
        });
    } else {
      toast("Password Don't match", { type: "warning" });
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
                  <h1 className="company">Health &amp; Fitness</h1>
                </div>
              </div> */}

              <div className="my-5 px-4">
                <h1 className="login">SIGN UP</h1>
                <p>Sign up to continue to our application </p>

                <form method="POST" onSubmit={handleSubmit}>
                  <div className="form-row py-2">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control form-border-remove no-outline"
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control form-border-remove no-outline"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        required
                      />
                    </div>
                  </div>

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

                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control form-border-remove no-outline"
                      id="password"
                      name="password"
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

                  <div className="form-group py-2">
                    {/* <label htmlFor="">Preference</label> */}
                    <select
                      name="preference"
                      id="preference"
                      className="form-control form-border-remove no-outline"
                      onChange={handleChange}
                    >
                      <option defaultValue="default" defaultChecked>
                        Default
                      </option>
                      <option defaultValue="fitness">Fitness</option>
                      <option defaultValue="workout">Workout</option>
                      <option defaultValue="health">Health</option>
                    </select>
                  </div>

                  {/* <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="confirm-box"
                      required
                    />
                    <label className="custom-control-label" htmlFor="t-and-c">
                      Terms &amp; Conditions
                    </label>
                  </div> */}

                  <div className="form-group py-3">
                    <button type="submit" className="btn btn-col" id="signup">
                      <span className="log-txt-for">Signup</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 col-12 right-side">
              <img
                src={process.env.PUBLIC_URL + "images/signup.svg"}
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

export default SignupComponent;

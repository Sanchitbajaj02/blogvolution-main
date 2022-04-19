import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
import SignupComponent from "./Components/SignupComponent";
import CategoryComponent from "./Components/CategoryComponent";
import BlogpostComponent from "./Components/BlogpostComponent";
import ForgotPassowrd from "./Components/ForgotPassword";
import ResetPassowrd from "./Components/ResetPassword";
import TeamMembers from "./Components/TeamMembers";
// impoerting context
import { BlogContext } from "./Context/BlogContext";
// import header and footer
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { ToastContainer } from "react-toastify";

//local storage items
const emailLocal = sessionStorage.getItem("email");
const tokenLocal = sessionStorage.getItem("token");
const nameLocal = sessionStorage.getItem("name");

const Router = () => {
  const [credentials, setCredentials] = useState({
    email: emailLocal,
    name: nameLocal,
    token: tokenLocal,
  });

  return (
    <React.Fragment>
      <ToastContainer />
      <BlogContext.Provider value={{ credentials, setCredentials }}>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={() => <HomeComponent />} />
          <Route exact path="/blog/:slug" component={BlogpostComponent} />
          <Route exact path="/category/:slug" component={CategoryComponent} />
          <Route exact path="/signup" component={() => <SignupComponent />} />
          <Route exact path="/login" component={() => <LoginComponent />} />
          <Route
            exact
            path="/forgotPassword"
            component={() => <ForgotPassowrd />}
          />
          <Route exact path="/resetPassword/:token" component={ResetPassowrd} />

          <Route exact path="/team-members">
            <TeamMembers />
          </Route>

          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <FooterComponent />
      </BlogContext.Provider>
    </React.Fragment>
  );
};

export default Router;

import React from "react";

const RightSideMenuTop = (props) => {
  return (
    <React.Fragment>
      <div className="row-md-3 categories">
        <hr />
        <h4 className="border">About</h4>
        <img
          src={props.profileImg}
          width="auto"
          height="227px"
          className="img-fluid"
          alt={props.firstName}
        />
        <div style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
          <h4 className="mt-2">I am {props.firstName}</h4>
          <p>{props.about}</p>
        </div>
        {/* <h5
          style={{
            fontFamily: "Red Hat Text, sans-serif",
            size: "20px",
            color: "rgba(0, 0, 0, 0.7)",
          }}
        ></h5> */}
      </div>
      <div className="row-md-3 categories">
        <hr />
        <h4 className="connectAndFollow-title border">Connect And Follow</h4>
        <div className="social-blogpost">
          <div>
            <i className="fab fa-facebook-f socials"></i>
          </div>
          <div>
            <i className="fab fa-instagram socials"></i>
          </div>
          <div>
            <i className="fab fa-google-plus socials"></i>
          </div>
          <div>
            <i className="fab fa-twitter socials"></i>
          </div>
          <div>
            <i className="fa fa-rss-square"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightSideMenuTop;

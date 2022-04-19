import React from "react";
// import "../Styles/rightsidemenu.css";

const RightSideMenuBot = ({ blogImg, blogTitle, createdAt }) => {
  return (
    <div className="row card-effect-hover mb-3">
      <div className="col">
        <img
          src={blogImg}
          alt="latest-post"
          width="100%"
          className="img-fluid"
        />
      </div>
      <div className="col">
        <h6>{blogTitle}</h6>
        <p className="m-0">{new Date(createdAt).toLocaleDateString("en-GB")}</p>
      </div>
    </div>
  );
};

export default RightSideMenuBot;

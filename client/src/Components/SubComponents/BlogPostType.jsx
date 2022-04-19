import React, { useState } from "react";
import { ProgressBar } from "./Styles";

const BlogPostType = (props) => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);
  return (
    <React.Fragment>
      <ProgressBar style={{ width: `${scroll}%` }}></ProgressBar>
      <div className="btn bg-dark-red btn-sm edit-font mb-2">
        {props.category}
      </div>
      <h3>{props.blogTitle}</h3>
      <div className="blog-header-img">
        <img
          src={props.blogImg}
          className="img-fluid"
          alt={props.metaDescription}
          title={props.metaDescription}
        />
      </div>
      <div
        className="blog-text"
        dangerouslySetInnerHTML={{
          __html: props.blogContent,
        }}></div>
      <hr />
      <div className="blog-like">
        <div className="row">
          <div className="col-md-3">
            <span className="shadow-text">By:</span> {props.blogPostAuthor}
          </div>
          <div className="col-md-3 py-2">
            <span className="shadow-text ">On:</span>{" "}
            {new Date(props.createdAt).toLocaleDateString("en-GB")}
          </div>

          <div
            className="col-12 col-md-6 py-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}>
            <i className="fa fa-heart">{props.likes}</i>
            <i className="fab fa-facebook-f fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fa fa-envelope fa-lg"></i>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "-10px" }} />
      <hr style={{ marginTop: "-14px" }} />
    </React.Fragment>
  );
};
export default BlogPostType;

/* <div className="col-6">
                <span className="shadow-text">By:</span> {props.blogPostAuthor}
              </div> */

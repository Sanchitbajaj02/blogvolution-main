import React from "react";
import { createDescription, stripHTML } from "../../Util/StringUtil";

const CategoryType = ({
  createdAt,
  blogImg,
  blogContent,
  categoryAuthor,
  blogTitle,
}) => {
  return (
    <React.Fragment>
      <div className="category-with-date ml-3">
        Posted on
        <span className="category-grey">
          - {new Date(createdAt).toLocaleDateString("en-GB")}
        </span>
      </div>
      <h3>{blogTitle}</h3>
      <img
        src={blogImg}
        width="770px"
        height="513px"
        className="img-fluid"
        alt="categories"
      />
      <div className="blog-text">
        {createDescription(stripHTML(blogContent), 100)}
      </div>
      {/* <div className="readmore-button">
        <span>
          <a
            href="/blog"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "black",
            }}
          >
            Read More
          </a>
        </span>
      </div> */}
      <hr style={{ marginBottom: "-12px" }} />
      <hr style={{ marginBottom: "-14px" }} />
      <div className="blog-like">
        <div className="row">
          <div className="col-6 py-2">
            <div className="row">
              {/* <div className="col-6">
                <span className="shadow-text">By:</span> {categoryAuthor}
              </div> */}
            </div>
          </div>
          <div
            className="col-12 py-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}>
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
export default CategoryType;

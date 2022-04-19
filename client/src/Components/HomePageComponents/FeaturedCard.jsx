import React from "react";
// todo

const FeaturedCard = (props) => {
  return (
    <React.Fragment>
      <div
        className="featured-post-img"
        style={{
          backgroundImage: `url(${props.blogImg})`,
          borderRadius: "8px",
        }}>
        <div className="black-shadow-box">
          <div className="btn bg-black btn-sm edit-font mb-2">
            {props.category}
          </div>
          <p className="m-0">{props.blogTitle}</p>
          <p className="m-0 authorLatestCard">
            {props.authorName}
            {/* {new Date(props.createdAt).toLocaleDateString("en-GB")} */}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FeaturedCard;

import React from "react";
import { Link } from "react-router-dom";

const OtherCategories = ({ category }) => {
  // console.log(typeof category[1].categoryName);
  return (
    <>
      {category.map((category) => {
        return (
          <div className="row-md-4" key={category.categoryId}>
            <Link to={`/category/` + category.slug} className="Link-highlight">
              <img src={category.categoryImg} className="img-fluid" alt="cat" />
              <div className="textblock">
                <span>{category.categoryName}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default OtherCategories;

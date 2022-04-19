import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const PopularCard = ({ blogTitle, category, blogImg }) => {
  return (
    <React.Fragment>
      <div
        className="col-12 d-flex justify-content-center"
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Card className="border-0 w-100">
          <CardImg
            top
            src={blogImg}
            alt={blogTitle}
            className="format-card-image img-fluid"
          />
          <CardBody className="p-0">
            <CardTitle tag="h5" className="format-text-popular">
              {category}
            </CardTitle>
            <CardText className="format-text-para">{blogTitle}</CardText>
          </CardBody>
        </Card>
        {/* <div className="card border-0">
          <img
            className="card-img-top format-card-image img-fluid"
            src={blogImg}
            alt={blogTitle}
          />
          <div className="card-body text-center" style={{ textDecoration: "none", color: "#000" }}>
            <h4 className="card-title format-text-popular">{category}</h4>
            <p className="card-text format-text-para">{blogTitle}</p>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default PopularCard;

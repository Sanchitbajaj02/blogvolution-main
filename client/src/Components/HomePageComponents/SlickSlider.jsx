import React from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#991414",
        padding: "1px",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#991414",
        padding: "1px",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
};

const SlickSlider = (props) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerPadding: "60px",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <Slider {...settings} className="card border-0">
        {props.popularCardData.map((data) => {
          return (
            <Link
              to={"/blog/" + data.slug}
              className="Link-highlight"
              key={data.blogId}
            >
              <PopularCard
                blogTitle={data.blogTitle}
                category={data.category}
                blogImg={data.blogImg}
              />
            </Link>
          );
        })}
      </Slider>
    </React.Fragment>
  );
};

export default SlickSlider;

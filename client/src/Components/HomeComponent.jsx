import React, { useState, useEffect } from "react";
import FeaturedCard from "./HomePageComponents/FeaturedCard";
import SlickSlider from "./HomePageComponents/SlickSlider";
import DisplayCard from "./HomePageComponents/DisplayCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  showFeaturedPosts,
  showCategoryMaster,
  showPopularPosts,
} from "../Util/axios";

import { Link } from "react-router-dom";

const HomeComponent = () => {
  const [featured, setFeaturedPosts] = useState([]);
  const [popular, setPopular] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    setLoading(true);
    showFeaturedPosts()
      .then((data) => {
        setFeaturedPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    showCategoryMaster()
      .then((data) => setCategoryData(data))
      .catch((err) => console.log(err));

    setLoading2(true);
    showPopularPosts()
      .then((data) => {
        setPopular(data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        {/* first three pics  */}
        <h1 className="format-heading-2">Featured Posts</h1>
        <div>
          <hr className="line-class" />
        </div>

        <div className="row">
          {!loading ? (
            featured.map((feature) => {
              return (
                <div className="col-lg-4 my-1 px-2" key={feature.blogId}>
                  <Link to={`/blog/${feature.slug}`} className="Link-highlight">
                    <FeaturedCard
                      category={feature.category}
                      blogTitle={feature.blogTitle}
                      createdAt={feature.createdAt}
                      blogImg={feature.blogImg}
                      authorName={feature.firstName}
                    />
                  </Link>
                </div>
              );
            })
          ) : (
            <>
              <div className="col-lg-4  px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={350} />
                </SkeletonTheme>
              </div>
              <div className="col-lg-4 px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={350} />
                </SkeletonTheme>
              </div>
              <div className="col-lg-4 px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={350} />
                </SkeletonTheme>
              </div>
            </>
          )}
        </div>

        {/* <!-- After Most popular card --> */}
        <div>
          <p className="format-heading-2">Most Popular</p>
          <div>
            <hr className="line-class" />
          </div>
        </div>

        <div className="container">
          {!loading2 ? (
            <SlickSlider popularCardData={popular} />
          ) : (
            <div className="row">
              <div className="col-lg-3  px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={250} />
                </SkeletonTheme>
              </div>
              <div className="col-lg-3  px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={250} />
                </SkeletonTheme>
              </div>
              <div className="col-lg34 px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={250} />
                </SkeletonTheme>
              </div>
              <div className="col-lg34 px-2">
                <SkeletonTheme color="#AEAEAE">
                  <Skeleton height={400} width={250} />
                </SkeletonTheme>
              </div>
            </div>
          )}
        </div>

        {/*  <!-- After health div --> */}

        <div className="format-div">
          <div className="container">
            {categoryData.map((category) => {
              return (
                <React.Fragment key={category.categoryId}>
                  <div
                    style={{ height: "2rem" }}
                    id={category.categoryValue}
                  ></div>
                  <div className="row">
                    <div className="col-4 col-sm-5">
                      <div className="homepage-line-design"></div>
                    </div>
                    <div className="col-4 col-sm-2">
                      <p className="format-health">{category.categoryName}</p>
                    </div>
                    <div className="col-4 col-sm-5">
                      <div className="homepage-line-design"></div>
                    </div>
                  </div>
                  <DisplayCard
                    cardCategory={category.categoryName}
                    categoryID={category.categoryId}
                    cardPageSlug={category.slug}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;

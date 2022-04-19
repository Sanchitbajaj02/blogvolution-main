import React, { useState, useEffect } from "react";
import BlogPostType from "./SubComponents/BlogPostType";
import RightSideMenuTop from "./RightSide/RightSideMenuTop";
import RightSideMenuBot from "./RightSide/RightSideMenuBot";
import OtherCategories from "./RightSide/OtherCategories";
import AddComment from "./SubComponents/AddComment";
// import ReadingProgress from "./SubComponents/ReadingBar";

import { Link } from "react-router-dom";

import {
  showSingleBlogPost,
  showCategoryMaster,
  showAuthor,
  showSimilarPosts,
  // showComments,
} from "../Util/axios";
import HelmetCustom from "./HelmetCustom";

const BlogpostComponent = (props) => {
  const [blogdata, setBlogdata] = useState({});
  const [category, setCategory] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [similar, setSimilar] = useState([]);
  // const [showCommentsAll, setShowCommentsAll] = useState([]);

  useEffect(() => {
    showCategoryMaster()
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));

    showSingleBlogPost(props.match.params.slug)
      .then((data) => {
        console.log("user data", data);
        setBlogdata(data);
      })
      .catch((err) => console.log(err));

    showAuthor(blogdata.userId)
      .then((data) => setAuthorData(data))
      .catch((err) => console.log(err));

    showSimilarPosts(props.match.params.slug)
      .then((data) => setSimilar(data))
      .catch((err) => console.log(err));

    // showComments(blogdata.slug)
    //   .then((data) => setShowCommentsAll(data))
    //   .catch((err) => console.log(err));
  }, [props.match.params.slug, blogdata?.userId]);

  // console.log(props.match.params.slug);
  console.log(blogdata);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <HelmetCustom
            title={blogdata.blogTitle}
            description={blogdata.blogContent}
          />
          <div className="col-lg-9 col-md-8">
            <BlogPostType
              createdAt={blogdata.createdAt}
              blogImg={blogdata.blogImg}
              blogContent={blogdata.blogContent}
              blogTitle={blogdata.blogTitle}
              category={blogdata.category}
              likes={blogdata.likes}
              blogPostAuthor={authorData[0]?.firstName}
            />

            <AddComment slug={props.match.params.slug} />
          </div>

          <div className="col-lg-3 col-md-4">
            {authorData.map((authData) => {
              return (
                <RightSideMenuTop
                  key={authData.userId}
                  userId={authData.userId}
                  firstName={authData.firstName}
                  about={authData.about}
                  profileImg={authData.profileImg}
                />
              );
            })}

            <div className="categories">
              <hr />
              <h4 className="categories-title border">Categories</h4>
              <OtherCategories category={category} />
            </div>

            <div className="latestPosts">
              <hr />
              <h4 className=" latestPosts-title border">Similar Posts</h4>

              {similar.map((data) => {
                return (
                  <Link
                    to={"/blog/" + data.slug}
                    key={data.blogId}
                    rel="noopener noreferrer"
                    className="Link-highlight">
                    <RightSideMenuBot
                      blogImg={data.blogImg}
                      blogTitle={data.blogTitle}
                      createdAt={data.createdAt}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogpostComponent;

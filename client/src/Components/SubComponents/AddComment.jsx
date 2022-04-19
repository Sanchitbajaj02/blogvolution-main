import React, { useState, useEffect, useContext } from "react";
import { showComments } from "../../Util/axios";
import axios from "axios";
import { BlogContext } from "../../Context/BlogContext";
import { toast } from "react-toastify";

const AddComment = ({ slug }) => {
  const [newComment, setNewComment] = useState({ comment: "" });
  const [comments, setComments] = useState([]);
  const context = useContext(BlogContext);

  useEffect(() => {
    showComments(slug)
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, [slug]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `http://localhost:3001/apis/addComment/${slug}`,
      method: "POST",
      data: newComment,
      headers: {
        authorization: `Bearer ${context.credentials?.token}`,
      },
    })
      .then((data) => {
        toast("Comment Posted", { type: "success" });
      })
      .catch((err) => {
        console.log(err);
        toast(err.message, { type: "error" });
      });
    setTimeout(() => {
      showComments(slug)
        .then((data) => setComments(data))
        .catch((err) => console.log(err));
    }, 2000);
  };

  return (
    <div className="comment">
      <div className="add-comment">
        <h3>Comments</h3>
        <form className="form-center mr-2" onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              rows="3"
              placeholder="Add your comment"
              onChange={handleChange}></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn bg-dark-red btn-sm edit-font mb-2">
              Add Comment
            </button>
          </div>
        </form>
      </div>

      {comments.map((item) => {
        return (
          <div className="comment-box">
            <div key={item.blogId}>
              <p style={{ textAlign: "left", color: "gray" }}>
                {item.author} &nbsp;
                <span style={{ fontSize: "12px" }}>
                  on {new Date(item.createdAt).toLocaleDateString("en-GB")}
                </span>{" "}
              </p>
              <p style={{ fontSize: "20px" }}>{item.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddComment;

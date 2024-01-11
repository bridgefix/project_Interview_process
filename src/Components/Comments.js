import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Comments.css";

function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = (e) => {
    e.preventDefault();

    const userData = {
      comment: comment,
    };

    axios
      .post("http://127.0.0.1:8000/api/interview_tracking/comment/", userData)
      .then((response) => {
        setComments((prevComments) => [...prevComments, response.data]);
        setComment("");
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  const fetchComments = () => {
    axios
      .get("http://127.0.0.1:8000/api/interview_tracking/comment/")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="comment-flexbox">
        <br />
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
          style={{ width: "100%", padding: "10px", borderRadius: "10px" }}
          placeholder="Add a comment"
        />
        {comments.map((text, index) => (
          <div key={index} className="comment-container">
            {text.comment}
          </div>
        ))}
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <button
            onClick={onClickHandler}
            className="comment-button button-15"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            Submit
          </button>

          <button className="comment-button button-16">Cancel</button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Comments;

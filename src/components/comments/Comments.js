import React from "react";
import "./comments.css";
function Comments(props) {
  return (
    <div className="comment">
        <div className="content">
        <a style={{ textDecoration: "none" }} href={props.link}>
          <p>{props.message}</p>
        </a>
        </div>
        <a href={props.userlink}>
        <div className="bottom-section">
          <img className="avatar" src={props.avatar} alt="avt" />
          <span className="username">{props.username}</span>
        </div>
        </a>
      </div>
  );
}
export default Comments;

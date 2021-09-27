import React from "react";
import "./comments.css";
function Comments(props) {
  return (
    <a style={{ textDecoration: "none" }} href={props.link}>
      <div className="comment">
        <div className="content">
          <p>{props.message}</p>
        </div>
        <a href={props.userlink}>
        <div className="bottom-section">
          <img className="avatar" src={props.avatar} alt="avt" />
          <span className="username">{props.username}</span>
        </div>
        </a>
      </div>
    </a>
  );
}
export default Comments;

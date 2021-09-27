import React from 'react'
import './comments.css'
function Comments(props) {
    return (
        <a style={{textDecoration:'none'}} href={props.link}>

        <div className="comment">
            <div className="content">
             <p>{props.message}</p>
            </div>
            <div className="bottom-section">
             <span className="username">{props.username}</span>
            </div>
        </div>
        </a>
    )
}
export default Comments


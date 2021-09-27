import React from 'react'
import './comments.css'
function Comments(props) {
    return (
        <div className="comment">
            <div className="content">
             <p>{props.message}</p>
            </div>
            <div className="bottom-section">
             <span className="date">{props.date}</span>
             <span className="username">{props.username}</span>
            </div>
        </div>
    )
}
export default Comments


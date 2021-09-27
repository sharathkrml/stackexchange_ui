import React from 'react'
import './NavBar.css'
import Image from '../../assets/images/logo.svg'

function NavBar() {
    return (
        <div className="navbar">
            <img src={Image} alt="" className="logo"/>
            <div className="inputContainer" placeholder="search ...." >
              <input type="text" className="search" />
              <button className="search_btn">search</button>
            </div>
        </div>
    )
}

export default NavBar

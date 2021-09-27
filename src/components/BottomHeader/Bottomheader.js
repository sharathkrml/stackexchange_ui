import React from 'react'
import './BottomHeader.css'
function Bottomheader() {
    return (
        <div className="bottom_header">
            <ul className="nav">
               <li className="navbar_item">
                <span>Dropdown</span>
                <div className="megamenu">
                 <span className="megamenu_item">item</span>
                 <span className="megamenu_item">item</span>
                 <span className="megamenu_item">item</span>
                </div>
               </li>
               <li className="navbar_item">
                <span>Dropdown</span>
                <div className="megamenu">
                 <span className="megamenu_item">item</span>
                 <span className="megamenu_item">item</span>
                 <span className="megamenu_item">item</span>
                </div>
               </li>
               <li className="navbar_item">
                <span>Dropdown</span>
                <div className="megamenu">
                 <span className="megamenu_item">item</span>
                 <span className="megamenu_item">item</span>
                 <span className="megamenu_item">item</span>
                </div>
               </li>
               <li className="navbar_item-last">
                <span>advanced options</span>
               </li>
            </ul>
           <div className="megamenu-last" style={{width:400,height:400}}>
              <h1>hwllll</h1>
              <h1>hwllll</h1>
              <h1>hwllll</h1>
              <h1>hwllll</h1>
              <h1>hwllll</h1>
              <h1>hwllll</h1>
              <h1>hwllll</h1>
           </div>
        </div>
    )
}
export default Bottomheader

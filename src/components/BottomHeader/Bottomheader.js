import React from 'react'
import './BottomHeader.css'
function Bottomheader(props) {
    return (
        <div className="bottom_header">
            <ul className="nav">
               <li className="navbar_item">
                <span>Sort:{props.sort}</span>
                <div className="megamenu">
                 <span onClick={()=>props.setSort('activity')} className="megamenu_item">activity</span>
                 <span onClick={()=>props.setSort('votes')} className="megamenu_item">votes</span>
                 <span onClick={()=>props.setSort('creation')} className="megamenu_item">creation</span>
                 <span onClick={()=>props.setSort('relevance')} className="megamenu_item">relevance</span>
                </div>
               </li>
               <li className="navbar_item">
                <span>Order:{props.order}</span>
                <div className="megamenu">
                 <span onClick={()=>props.setOrder('desc')} className="megamenu_item">desc</span>
                 <span onClick={()=>props.setOrder('asc')} className="megamenu_item">asc</span>
                </div>
               </li>
               <li className="navbar_item">
                <span>Closed:{props.closed}</span>
                <div className="megamenu">
                 <span onClick={()=>props.setClosed('True')} className="megamenu_item">True</span>
                 <span  onClick={()=>props.setClosed('False')}className="megamenu_item">False</span>
                </div>
               </li>
               <li className="navbar_item-last">
                <span style={{cursor:'pointer'}}>advanced options</span>
               </li>
            </ul>
        </div>
    )
}
export default Bottomheader

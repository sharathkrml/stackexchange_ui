import React from 'react'
import './BottomHeader.css'
import expandicon from '../../assets/images/expand-arrow.svg'
function Bottomheader({searchoptions,setSearchOptions}) {
    return (
        <div className="bottom_header">
            <ul className="nav">
               <li className="navbar_item">
                <span>Sort:{searchoptions.sort}</span>
                <div className="megamenu">
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,sort:'activity'}))} className="megamenu_item">activity</span>
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,sort:'votes'}))} className="megamenu_item">votes</span>
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,sort:'creation'}))} className="megamenu_item">creation</span>
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,sort:'relevance'}))} className="megamenu_item">relevance</span>
                </div>
               </li>
               <li className="navbar_item">
                <span>Order:{searchoptions.order}</span>
                <div className="megamenu">
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,order:'desc'}))} className="megamenu_item">desc</span>
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,order:'asc'}))} className="megamenu_item">asc</span>
                </div>
               </li>
               <li className="navbar_item">
                <span>Closed:{searchoptions.closed}</span>
                <div className="megamenu">
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,closed:'True'}))} className="megamenu_item">True</span>
                 <span onClick={()=>setSearchOptions(prevSearchOptions=>({...prevSearchOptions,closed:'False'}))} className="megamenu_item">False</span>
                </div>
               </li>
               <li className="navbar_item-last">
                <span style={{cursor:'pointer'}}>advanced options<img style={{transform: 'rotate(180deg)'}} className='expandicon' src={expandicon} alt='expand'/></span>
               </li>
            </ul>
        </div>
    )
}
export default Bottomheader

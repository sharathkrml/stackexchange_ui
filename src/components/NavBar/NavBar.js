import React from "react";
import "./NavBar.css";
import Image from "../../assets/images/logo.svg";
function NavBar({ fetchData, searchoptions, setSearchOptions }) {
  const handleKeyDown=(event)=>{
    if (event.key === 'Enter') {
      fetchData(searchoptions);
    }
  }
  return (
    <div className="navbar">
      <img src={Image} alt="" className="logo" />
      <div className="inputContainer">
        <input
          onChange={(text) =>
            setSearchOptions((prevSearchOptions) => ({
              ...prevSearchOptions,
              q: text.target.value,
            }))
          }
          value={searchoptions.q}
          type="text"
          className="search"
          onKeyDown={handleKeyDown}
        />
        <button
        style={{cursor:'pointer'}}
          onClick={() => {
            fetchData(searchoptions);
          }}
          className="search_btn"
        >
          search
        </button>
      </div>
    </div>
  );
}

export default NavBar;

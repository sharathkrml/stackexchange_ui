import React, { useState } from "react";
import "./NavBar.css";
import Image from "../../assets/images/logo.svg";
function NavBar({ fetchData, searchoptions, setSearchOptions }) {
  const [q, setQ] = useState("");
  return (
    <div className="navbar">
      <img src={Image} alt="" className="logo" />
      <div className="inputContainer" placeholder="search ....">
        <input
          onChange={(text) => setQ(text.target.value)}
          value={q}
          type="text"
          className="search"
        />
        <button
          onClick={() => {
            setSearchOptions((prevSearchOptions) => ({
              ...prevSearchOptions,
              'q': q,
            }));
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

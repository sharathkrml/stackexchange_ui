import "./App.css";
import React, { useState } from "react";
import Bottomheader from "./components/BottomHeader/Bottomheader";
import Comments from "./components/comments/Comments";
import NavBar from "./components/NavBar/NavBar";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
import loading from "../src/assets/images/loading.gif";
const axios = require("axios");
function App() {
  const [results, setResults] = useState([]);
  const [shownresults, setShownResults] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [advFlag, setAdvFlag] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);
  const [searchoptions, setSearchOptions] = useState({
    sort: "",
    order: "",
    closed: "",
    q: "",
    fromdate: "",
    todate: "",
    accepted: "",
    answers: "",
    body: "",
    migrated: "",
    notice: "",
    nottagged: "",
    tagged: "",
    title: "",
    user: "",
    url: "",
    views: "",
    wiki: "",
    min: "",
    max: "",
  });
  const [dateoptions, setDateOptions] = useState({
    min: "",
    max: "",
    fromdate: "",
    todate: "",
  });
  const [error, setError] = useState("");

  const fetchData = (searchoptions, dateoptions) => {
    setLoadingImg(true);
    setResults([]);
    let url = "http://127.0.0.1:8000?site=stackoverflow";
    for (var key in searchoptions) {
      if (searchoptions[key]) {
        url = url + "&" + key + "=" + searchoptions[key];
      }
    }
    console.log(dateoptions);
    console.log(searchoptions);
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setLoadingImg(false);
        setResults(res.data.items);
        setShownResults(res.data.items.slice(0, 10));
        console.log(res);
        document.title = searchoptions.q
          ? searchoptions.q
          : "StackExchange API";
      })
      .catch((error) => {
        setError(error.response.data.detail);
      })
      .then(() => {
        console.log("axios called");
      });
  };
  const changePage = (no) => {
    setPageno(no);
    setShownResults(results.slice((no - 1) * 10, no * 10));
  };
  return (
    <div className="App">
      <NavBar
        fetchData={fetchData}
        searchoptions={searchoptions}
        setSearchOptions={setSearchOptions}
      />
      <Bottomheader
        searchoptions={searchoptions}
        setSearchOptions={setSearchOptions}
        setAdvFlag={setAdvFlag}
        advFlag={advFlag}
      />
      {advFlag && (
        <AdvancedSearch
          searchoptions={searchoptions}
          setSearchOptions={setSearchOptions}
          dateoptions={dateoptions}
          setDateOptions={setDateOptions}
        />
      )}
      <div className="commentContainer">
        {results.length !== 0 &&
          shownresults.map((result, index) => (
            <Comments
              key={index}
              link={result.link}
              userlink={result.owner.link}
              username={result.owner.display_name}
              avatar={result.owner.profile_image}
              message={result.title}
            />
          ))}
        {loadingImg && (
          <img className="loadingImg" src={loading} alt="loading" />
        )}
        {results.length === 0 && <h1 className="no-result">{error}</h1>}
        {results.length !== 0 && (
          <div className="pagination">
            {pageno > 1 && (
              <div onClick={() => changePage(pageno - 1)}>&laquo;</div>
            )}
            {pageno > 2 && (
              <div onClick={() => changePage(pageno - 2)}>{pageno - 2}</div>
            )}
            {pageno > 1 && (
              <div onClick={() => changePage(pageno - 1)}>{pageno - 1}</div>
            )}
            <div className="active">{pageno}</div>
            {pageno < 10 && (
              <div onClick={() => changePage(pageno + 1)}>{pageno + 1}</div>
            )}
            {pageno < 9 && (
              <div onClick={() => changePage(pageno + 2)}>{pageno + 2}</div>
            )}
            {pageno < 10 && (
              <div onClick={() => changePage(pageno + 1)}>&raquo;</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

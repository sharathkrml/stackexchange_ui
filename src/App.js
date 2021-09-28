import "./App.css";
import React, { useState, useEffect } from "react";
import Bottomheader from "./components/BottomHeader/Bottomheader";
import Comments from "./components/comments/Comments";
import NavBar from "./components/NavBar/NavBar";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
const axios = require("axios");
function App() {
  const [results, setResults] = useState([]);
  const [advFlag, setAdvFlag] = useState(false);
  const [hasmore, setHasMore] = useState("");
  const [searchoptions, setSearchOptions] = useState({
    sort: "",
    order: "",
    closed: "",
    q: "",
    page: "1",
    pagesize: "",
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
  })
  useEffect(() => {
    fetchData(searchoptions);
  }, [searchoptions]);
  const fetchData = (searchoptions,dateoptions) => {
    setResults([]);
    let url = "http://127.0.0.1:8000?site=stackoverflow";
    for (var key in searchoptions) {
      if (searchoptions[key]) {
        url = url + "&" + key + "=" + searchoptions[key];
      }
    }
    console.log(dateoptions)
    console.log(searchoptions)
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setResults(res.data.items);
        setHasMore(res.data.has_more);
        console.log(res);
        document.title = searchoptions.q?searchoptions.q:"StackExchange API";
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log("axios called");
      });
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
        {results &&
          results.map((result, index) => (
            <Comments
              key={index}
              link={result.link}
              userlink={result.owner.link}
              username={result.owner.display_name}
              avatar={result.owner.profile_image}
              message={result.title}
            />
          ))}
        {results.length === 0 && <h1 className="no-result">Nothing Found</h1>}
        {results && (
          <div className="pagination">
            {searchoptions.page > 1 && (
              <>
                <div>{parseInt(searchoptions.page) - 1}</div>
              </>
            )}
            <div className="active">{searchoptions.page}</div>

            {hasmore && (
              <>
                <div
                  onClick={() => {
                    setSearchOptions((prevSearchOptions) => ({
                      ...prevSearchOptions,
                      page: parseInt(prevSearchOptions.page) + 1,
                    }));
                  }}
                >
                  {parseInt(searchoptions.page) + 1}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

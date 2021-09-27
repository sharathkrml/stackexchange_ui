import "./App.css";
import React, { useState } from "react";
import Bottomheader from "./components/BottomHeader/Bottomheader";
import Comments from "./components/comments/Comments";
import NavBar from "./components/NavBar/NavBar";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
const axios = require("axios");
function App() {
  const [results, setResults] = useState();
  const [searchoptions, setSearchOptions] = useState({
    sort: undefined,
    order: undefined,
    closed: undefined,
    q: "",
  });
  const [advFlag, setAdvFlag] = useState(false)

  const fetchData = (searchoptions) => {
    let url = "http://127.0.0.1:8000?site=stackoverflow";
    for (var key in searchoptions) {
      if (searchoptions[key]) {
        url = url + "&" + key + "=" + searchoptions[key];
      }
    }
    axios
      .get(url)
      .then((res) => {
        setResults(res.data.items);
        console.log(res.data.items);
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
     {advFlag&& <AdvancedSearch />}
      <div className="commentContainer">
        {results&&(results.map((result, index) => (
          <Comments
            key={index}
            link={result.link}
            userlink={result.owner.link}
            username={result.owner.display_name}
            avatar={result.owner.profile_image}
            message={result.title}
          />
        )))}
        {results&&(<div class="pagination">
          <div>&laquo;</div>
          <div>1</div>
          <div class="active" href="#">
            2
          </div>
          <div href="#">3</div>
          <div href="#">4</div>
          <div href="#">5</div>
          <div href="#">6</div>
          <div href="#">&raquo;</div>
        </div>)}
      </div>
    </div>
  );
}

export default App;

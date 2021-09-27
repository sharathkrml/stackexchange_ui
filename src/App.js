import "./App.css";
import React, { useState, useEffect } from "react";
import Bottomheader from "./components/BottomHeader/Bottomheader";
import Comments from "./components/comments/Comments";
import NavBar from "./components/NavBar/NavBar";
const axios = require("axios");
function App() {
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState();
  const [order, setOrder] = useState();
  const [closed, setClosed] = useState();
  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000?page=2&order=desc&sort=activity&q=python3&site=stackoverflow"
      )
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
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Bottomheader
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
        closed={closed}
        setClosed={setClosed}
      />

      <div className="commentContainer">
        {results.map((result, index) => (
          <Comments
            key={index}
            link={result.link}
            userlink={result.owner.link}
            username={result.owner.display_name}
            avatar={result.owner.profile_image}
            message={result.title}
          />
        ))}
        <div class="pagination">
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
        </div>
      </div>
    </div>
  );
}

export default App;

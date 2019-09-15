import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Loading from "./components/Characters/Loading";
import Buttons from "./components/Pagination/Button";
import CharactersArray from "./components/Characters/CharArray";

const App = () => {
  //Creating state
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [nextPage, setNext] = useState("https://swapi.co/api/people/");
  const [pagenumber, setPageNo] = useState(1);

  //Fetching the data using pagination
  const changePage = () => {
    setPageNo(pagenumber + 1);
    setNext("https://swapi.co/api/people/?Page=" + pagenumber);
    console.log("Page is", pagenumber);
    console.log("next page is ", nextPage);
  };

  useEffect(() => {
    axios
      .get(nextPage)
      .then(response => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setLoading(true);
        return error;
      });
  }, [nextPage]);
  //rendering the components
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CharactersArray characters={characters} />
          <Buttons onClick={changePage} />
        </>
      )}
    </div>
  );
};
export default App;

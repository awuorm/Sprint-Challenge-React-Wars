import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import CharactersContent from './components/Characters/CharactersContent';
import Loading from "./components/Characters/Loading";

    
  const App = () => {
      //Creating state for the pulled data
    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(true);
    //Passing the data to state
    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then((response) => {
          setCharacters(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(true);
          return error;
        })   
  },[])
  //rendering the components
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {isLoading?
        (<Loading/>):
        (characters.map((character,index) => {
          return (
            <CharactersContent 
            key={index} 
            characters={character}/>
          )
          }))
      }
    </div>
  );
}
export default App;

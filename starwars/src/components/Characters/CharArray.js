import React from "react";
import styled from "styled-components";
import CharactersContent from "./CharactersContent";


//styling the elements
const DivCharStyles = styled.div``;

function CharactersArray(props) {
  console.log("characters array", props);
  const { characters } = props;
  //rendering the components
  return (characters.map((character, index) => (
    <CharactersContent character={character} key={index} />
  ))
  )
}

export default CharactersArray;

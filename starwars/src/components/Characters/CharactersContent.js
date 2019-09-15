import React from "react";
import styled from "styled-components";

import CharName from "./CharName/CharName";
import CharactersHeight from "./CharHeight/CharacterHeight";
import CharactersMass from "./CharMass/CharMass";
import CharactersGender from "./CharacterGender/CharGender";
import CharactersHome from "./CharacterHome/CharHome";

//styling the elements
const DivCharStyles = styled.div`
  background-color: skyblue;
  width: 50%;
  border: 0.8em solid grey;
  margin-left: 25%;
  margin-bottom: 2em;
  margin-top: 2em;
`;

function CharactersContent(props) {
  //rendering the components
  return (
    <DivCharStyles>
      <CharName charname={props.character.name} />
      <CharactersHeight charheight={props.character.height} />
      <CharactersMass charmass={props.character.mass} />
      <CharactersGender chargender={props.character.gender} />
      <CharactersHome charhome={props.character.homeworld} />
    </DivCharStyles>
  );
}

export default CharactersContent;

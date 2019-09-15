import React from "react";
import styled from "styled-components";

//styling the elements
const CharHomeStyles = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: purple;
`;

function CharactersHome(props) {
  //rendering components
  return (
    <>
      <CharHomeStyles>Homeworld:{props.charhome}</CharHomeStyles>
    </>
  );
}

export default CharactersHome;

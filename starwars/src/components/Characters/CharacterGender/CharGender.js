import React from "react";
import styled from "styled-components";

//styling the elements
const CharGenderStyles = styled.p`
font-family: 'Courier New', Courier, monospace;
`;

function CharactersGender (props) {
   //rendering the component
    return (
        <>
            <CharGenderStyles>Gender:{props.chargender}</CharGenderStyles>
        </>
    )
}

export default CharactersGender;
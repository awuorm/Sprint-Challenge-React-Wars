import React from "react";
import styled from "styled-components";

function CharactersGender (props) {
    //styling the elements
    const CharGenderStyles = styled.p`
    font-family: 'Courier New', Courier, monospace;
    `;
   //rendering the component
    return (
        <>
            <CharGenderStyles>Gender:{props.chargender}</CharGenderStyles>
        </>
    )
}

export default CharactersGender;
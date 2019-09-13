import React from "react";
import styled from "styled-components";

//styling the elements
function CharactersMass (props) {
    const CharMassStyles = styled.p`
    font-family: 'Courier New', Courier, monospace;
    `;
    return (
        <>
         <CharMassStyles>Weight:{props.charmass} kg</CharMassStyles>
        </>
    )
}

export default CharactersMass;
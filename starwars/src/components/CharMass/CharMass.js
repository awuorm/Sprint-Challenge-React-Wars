import React from "react";
import styled from "styled-components";

//import CharName from "./CharName";

function CharactersMass (props) {
    console.log(props);

    const CharMassStyles = styled.p``;
    //const {characters} = props;

    return (
        <>
            {
                <CharMassStyles>Weight:{props.charmass} kg</CharMassStyles>
            }
        </>
    )
}

export default CharactersMass;
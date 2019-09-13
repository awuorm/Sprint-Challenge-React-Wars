import React from "react";
import styled from "styled-components";

const CharacterNameStyles = styled.p`
font-family: 'Courier New', Courier, monospace;
`;

function CharName (props) {
    console.log(props)

    return (
        <>
        <CharacterNameStyles>Name:{props.charname}</CharacterNameStyles>
    </>
    )

}

export default CharName;
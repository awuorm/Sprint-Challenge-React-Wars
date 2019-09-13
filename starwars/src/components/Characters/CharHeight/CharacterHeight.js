import React from "react";
import styled from "styled-components";

//styling the elements
const CharHeightStyles = styled.p`
font-family: 'Courier New', Courier, monospace;
`;

function CharactersHeight (props) {
    return (
        <>
            <CharHeightStyles>Height:{props.charheight} cm</CharHeightStyles>
        </>
    )
}

export default CharactersHeight;
import React from "react";
import styled from "styled-components";

function CharactersHeight (props) {
    //styling the elements
    const CharHeightStyles = styled.p`
    font-family: 'Courier New', Courier, monospace;
    `;
    return (
        <>
            <CharHeightStyles>Height:{props.charheight} cm</CharHeightStyles>
        </>
    )
}

export default CharactersHeight;
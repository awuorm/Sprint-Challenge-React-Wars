import React from "react";
import styled from "styled-components";

//import CharName from "./CharName";

function CharactersHeight (props) {
    console.log(props);

    const CharHeightStyles = styled.p``;
    //const {characters} = props;

    return (
        <>
            {
                <CharHeightStyles>Height:{props.charheight} cm</CharHeightStyles>
            }
        </>
    )
}

export default CharactersHeight;
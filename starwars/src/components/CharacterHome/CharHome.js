import React from "react";
import styled from "styled-components";

//import CharName from "./CharName";

function CharactersHome (props) {
    console.log(props);

    const CharHomeStyles = styled.p``;
    //const {characters} = props;

    return (
        <>
            {
                <CharHomeStyles>Homeworld:{props.charhome}</CharHomeStyles>
            }
        </>
    )
}

export default CharactersHome;
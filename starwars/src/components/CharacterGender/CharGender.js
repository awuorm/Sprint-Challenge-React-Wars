import React from "react";
import styled from "styled-components";

//import CharName from "./CharName";

function CharactersGender (props) {
    console.log(props);

    const CharGenderStyles = styled.p`
    font-family: 'Courier New', Courier, monospace;
    `;
    //const {characters} = props;

    return (
        <>
            {
                <CharGenderStyles>Gender:{props.chargender}</CharGenderStyles>
            }
        </>
    )
}

export default CharactersGender;
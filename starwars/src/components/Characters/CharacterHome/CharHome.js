import React from "react";
import styled from "styled-components";

function CharactersHome (props) {
    //styling the components
    const CharHomeStyles = styled.p`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: purple;
     `;
     //rendering components
    return (
        <>
           <CharHomeStyles>Homeworld:{props.charhome}</CharHomeStyles>
        </>
    )
}

export default CharactersHome;
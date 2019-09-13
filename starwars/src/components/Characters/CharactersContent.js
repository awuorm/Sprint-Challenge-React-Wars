import React from "react";
import styled from "styled-components";

import CharName from "./CharName/CharName";
import CharactersHeight from "./CharHeight/CharacterHeight";
import CharactersMass from "./CharMass/CharMass";
import CharactersGender from "./CharacterGender/CharGender";
import CharactersHome from "./CharacterHome/CharHome";

function CharactersContent (props) {
    //styling the elements
    const DivCharStyles = styled.div`
    background-color: skyblue;
    width: 50%;
    border: 0.8em solid grey;
    margin-left:25%;
    margin-bottom: 2em;
    margin-top: 2em;
    `;
    //rendering the components
    return (
                <DivCharStyles>
                    <CharName charname={props.characters.name}/>
                    <CharactersHeight charheight={props.characters.height}/>
                    <CharactersMass charmass={props.characters.mass}/>
                    <CharactersGender chargender={props.characters.gender}/>
                    <CharactersHome charhome={props.characters.homeworld}/> 
                </DivCharStyles>
    )
}

export default CharactersContent;
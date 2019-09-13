import React from "react";
import styled from "styled-components";
import CharName from "./CharName";
import CharactersHeight from "../CharHeight/CharacterHeight";
import CharactersMass from "../CharMass/CharMass";
import CharactersGender from "../CharacterGender/CharGender";

//import CharName from "./CharName";

function CharactersContent (props) {
    console.log(props.characters);

    const DivCharStyles = styled.div``;
    //const {characters} = props;

    return (
                < div>
                    <CharName charname={props.characters.name}/>
                    <CharactersHeight charheight={props.characters.height}/>
                    <CharactersMass charmass={props.characters.mass}/>
                    <CharactersGender chargender={props.characters.gender}/>
                    <CharactersHomeWorld charhome={props.characters.homeworld}/>
                </div>
    )
}

export default CharactersContent;
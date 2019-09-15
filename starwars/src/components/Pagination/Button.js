import React from  "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
    margin: 0.8em;
    padding: 0.5em;
    background-color: blue;
    color: white;
    border: none;
    width: 15%;
`;

const Buttons = (props) => {
   

    return (
        <ButtonStyles onClick={props.onClick}>Next</ButtonStyles>
    )
}

export default Buttons;
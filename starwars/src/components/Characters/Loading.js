import React from "react";
import styled from "styled-components";

const LoadingText = styled.p`
    font-size: 3em;
    color: white;
`;

function Loading() {
  return (
      <>
      <LoadingText>Loading...</LoadingText>
    </>
  );
}

export default Loading;

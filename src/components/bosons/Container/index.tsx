import React from "react";
import styled from "styled-components"

const Size = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;  
`;  


export const Container = ({children}: any) => {
  return <Size>{children}</Size>
}
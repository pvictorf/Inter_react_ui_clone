import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const TitleStyled = styled.h1`
  color: #171717;
  font-size: 2.4rem;
  font-weight: 600;
`;

export const Title = ({text}: Props) => {
  return <TitleStyled>{text}</TitleStyled> 
}
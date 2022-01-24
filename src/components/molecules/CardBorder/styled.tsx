import styled from "styled-components";

export const CardBorder = styled.div`
  display: block;
  width: 100%;
  max-width: 510px;
  height: 450px;
  border-radius: 1rem;
  border: 5px solid black;
`;

export const CardBorderHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-bottom: 5px solid black;
  font-size: 1.375rem;
  color: rgb(255,122,0);
`;

export const CardBorderContent = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding: 3rem 2rem;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
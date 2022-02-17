import styled from "styled-components";

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: grab;
  height: 280px;
`;

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  width: 40px;
  height: 40px;
  background-color: red;
`

export const Icon = styled.img`
  display: block;
  color: orange;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: #161616;
`;


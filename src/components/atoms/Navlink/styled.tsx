import styled from "styled-components";

export const Navlink = styled.a`
  cursor: pointer;
  color: rgb(22, 22, 22);
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0.4rem 0.6rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgb(255, 122, 0);
    background: #d6d6d6;
  }
`;

export const IconArrowDown = styled.span`
  font-size: 1rem;
  color: rgb(255, 122, 0);
`;
import styled from "styled-components";

export const Navlink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(22, 22, 22);
  font-size: 0.950rem;
  font-weight: 600;
  border-radius: 5px;
  padding: 0.4rem 0.6rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgb(255, 122, 0);
    background: #d6d6d6;
  }

  & > .icon {
    padding: 0 0.275rem;
    font-size: 1.150rem;
    color: rgb(255, 122, 0);
  }
`;


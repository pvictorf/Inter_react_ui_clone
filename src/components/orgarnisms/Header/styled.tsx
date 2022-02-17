import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  transition: all 0.2s ease-in;
  z-index: 5;

  &.active {
    color: #fff;
    background: linear-gradient(183deg,#ff8700,#ff500f);
    -webkit-box-shadow: 0 3px 16px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 3px 16px 0 rgb(0 0 0 / 10%);
  }

  &.active [role='navlink'] {
    color: #fff;
  }

  &.active [role="open-account"] {
    background: #8dc63f;
  }
`

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  grid-gap: 1.4rem;
  padding: 0.5rem 1.6rem;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
`;

export const Actions = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-auto-flow: column;
`;

export const Flags = styled.div`
  display: flex;
  justify-content: space-evenly;
  & img {
    width: 1.6rem;
    padding: 0 5px;
  }
`;

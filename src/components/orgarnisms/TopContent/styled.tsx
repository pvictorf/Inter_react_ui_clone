import styled from "styled-components";
import mansupriseImg from '../../../assets/images/persons/mansuprise.png'

export const TopContent = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const Image = styled.img.attrs({src: mansupriseImg})`
  display: block;
  margin: 0 auto;
`;

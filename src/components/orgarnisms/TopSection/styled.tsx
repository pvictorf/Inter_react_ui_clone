import styled from "styled-components";
import mansupriseImg from '../../../assets/images/common/mansuprise.png'

export const TopSection = styled.section`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 7.5rem;
`;

export const ImageContainer = styled.div`
  display: block;
  max-width: 780px;
  margin: 0 auto;
`;

export const Image = styled.img.attrs({src: mansupriseImg})`
  vertical-align: bottom;
  width: 100%;
  object-fit: cover;
`;

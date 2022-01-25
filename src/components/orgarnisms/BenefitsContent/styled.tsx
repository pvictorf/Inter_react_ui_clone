import styled from "styled-components";
import beta from '../../../assets/images/persons/beta.png'

const contentSize = '450px';

export const BenefitsContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255,122,0);
  max-height: ${contentSize};
`;


export const Image = styled.img.attrs({src: beta})`
  display: block;
  object-fit: cover;
  margin: 0;
  max-height: ${contentSize};
`;

export const Text = styled.p`
  flex: 1;
  max-width: 880px;
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  padding: 0 2rem;
`
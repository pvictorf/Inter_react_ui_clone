import styled from "styled-components";

import chipImage from '../../../assets/images/creditcard/chip.png'
import masterCardImage from '../../../assets/images/creditcard/mastercard.png'

export const CreditCard = styled.div`
  display: flex;
  cursor: grab;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(255,122,0);
  padding: 1rem;
  border-radius: 10px;
  width: 15rem;
  height: 25rem;
  box-shadow: 5px 8px 8px #8a8a8a89;
  z-index: 0;
`;

export const CreditCardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreditCardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > .logo {
    width: 40%;
  }
`;

export const CreditCardName = styled.p`
  display: block;
  width: 100%;
  font-size: 1rem;
  color: #ffffffeb;
  margin-bottom: 100px;
`;

export const MasterCard = styled.img.attrs({src: masterCardImage, alt: 'MasterCard'})`
  width: 30%;
`;

export const Chip = styled.img.attrs({src: chipImage, alt: 'Chip'})`
  width: 40%;
  transform: rotate(90deg);
`;
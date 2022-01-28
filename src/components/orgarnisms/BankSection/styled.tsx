import styled from "styled-components";

import intermobile from '../../../assets/images/common/inter_mobile.png'
import interinvest from '../../../assets/images/common/inter_invest.png'
import interlogo from '../../../assets/images/common/inter_shop.png'
import interenterprise from '../../../assets/images/common/inter_enterprise.png'
import intersecurity from '../../../assets/images/common/inter_security.png'
import interfinance from '../../../assets/images/common/inter_finance.png'

export const BankSection = styled.section`
  display: grid;
  grid-gap: 6rem;
  grid-template-rows: max-content;
  padding: 6rem 3rem;
`;

export const InterSuperAppContent = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  width: 100%;
  max-width: 1300px;
  justify-self: center;
  justify-items: center;
  grid-template-columns: minmax(200px, 360px) 1fr;

`;

export const InterBankContent = styled.div`
  display: flex;
  justify-content: space-around;  
`;

export const InterInvestContent = styled.div`
  display: flex;
  justify-content: space-around;  
`;

export const InterShopContent = styled.div`
  display: flex;
  justify-content: space-around;  
`;

export const InterEnterprisesContent = styled.div`
  display: flex;
  justify-content: space-around;  
`;

export const InterSecurityContent = styled.div`
  display: flex;
  justify-content: space-around;  
`;

export const InterFinanceContent = styled.div`
  display: flex;
  justify-content: space-around;  
`;

export const ImageInterMobile = styled.img.attrs({
  src: intermobile
})``;

export const ImageInterInvest = styled.img.attrs({
  src: interinvest
})``;

export const ImageInterShop = styled.img.attrs({
  src: interlogo
})`
  border-radius: 8rem 0 8rem 0;
`;

export const ImageInterEnterprises = styled.img.attrs({
  src: interenterprise
})``;

export const ImageInterSecurity = styled.img.attrs({
  src: intersecurity
})``;


export const ImageInterFinance = styled.img.attrs({
  src: interfinance
})``;

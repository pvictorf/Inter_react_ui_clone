import styled from 'styled-components'
import logo from '../../../assets/images/logo.svg'

const LogoImage = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`;

export const Logo = () => {
  return <LogoImage role="logo" src={logo} onClick={() => window.location.href='/'} />
}
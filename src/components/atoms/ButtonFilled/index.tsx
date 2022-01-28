import styled from 'styled-components'
import { Button, ButtonProps } from '../Button'


const ButtonFilledStyled = styled(Button)`
  border: none;
  background: rgb(255, 122, 0);
  color: #FFF;
`;

export const ButtonFilled = ({title, role, onClick, children, stay = 'left'}: ButtonProps) => {
  return (
    <ButtonFilledStyled role={role} onClick={onClick}>
      {children === 'left' && children}
        {title}
      {children === 'right' && children}
    </ButtonFilledStyled>
  )
}
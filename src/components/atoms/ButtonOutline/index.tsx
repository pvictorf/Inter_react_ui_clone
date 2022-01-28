import styled from 'styled-components'
import { Button, ButtonProps } from '../Button'

const ButtonOutlineStyled = styled(Button)`
  border: 1px solid rgb(255, 122, 0);
  background: #fff;
  color: rgb(255, 122, 0);
`;

export const ButtonOutline = ({title, role, onClick, children, stay = 'left'}: ButtonProps) => {
  return (
    <ButtonOutlineStyled role={role} onClick={onClick}>
      {children === 'left' && children}
        {title}
      {children === 'right' && children}
    </ButtonOutlineStyled>
  )
}
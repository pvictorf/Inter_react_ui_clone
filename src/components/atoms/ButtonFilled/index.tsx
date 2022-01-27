import styled from 'styled-components'

interface Props {
  title?: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonFilledStyled = styled.button`
  display: block;
  cursor: pointer;
  padding: 0.875rem 1.1rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: rgb(255, 122, 0);
  color: #FFF;
  font-size: 1.1.rem;
  font-weight: 600;
`;

export const ButtonFilled = ({title, role, onClick}: Props) => {
  /* TODO: Add color by props and icons by children */
  return (
    <ButtonFilledStyled role={role} onClick={onClick}>
      {title}
    </ButtonFilledStyled>
  )
}
import styled from 'styled-components'

interface Props {
  title: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonFilledStyled = styled.button`
  display: block;
  padding: 0.8rem 1.1rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: rgb(255, 122, 0);
  color: #FFF;
  font-size: 1.1.rem;
  font-weight: 600;
`;

export const ButtonFilled = ({title, role, onClick}: Props) => {
  return (
    <ButtonFilledStyled role={role} onClick={onClick}>
      {title}
    </ButtonFilledStyled>
  )
}
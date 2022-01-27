import styled from 'styled-components'

interface Props {
  title: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonOutlineStyled = styled.button`
  display: block;
  cursor: pointer;
  padding: 0.8rem 1.1rem;
  width: 100%;
  border: 1px solid rgb(255, 122, 0);
  border-radius: 8px;
  background: #fff;
  color: rgb(255, 122, 0);
  font-size: 1.1.rem;
  font-weight: 600;
`;

export const ButtonOutline = ({title, role, onClick}: Props) => {
  return (
    <ButtonOutlineStyled role={role} onClick={onClick}>
      {title}
    </ButtonOutlineStyled>
  )
}
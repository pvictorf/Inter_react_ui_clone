import styled from 'styled-components'

interface Props {
  title: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Filled = styled.button`
  display: block;
  padding: 0.8rem 1.6rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: rgb(255, 122, 0);
  color: #FFF;
`;

export const ButtonFilled = ({title, role, onClick}: Props) => {
  return (
    <Filled role={role} onClick={onClick}>
      {title}
    </Filled>
  )
}
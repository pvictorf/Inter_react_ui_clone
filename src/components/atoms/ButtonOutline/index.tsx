import styled from 'styled-components'

interface Props {
  title: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Outline = styled.button`
  display: block;
  padding: 0.8rem 1.6rem;
  width: 100%;
  border-radius: 8px;
  border-color: rgb(255, 122, 0);
  background: #fff;
  color: rgb(255, 122, 0);
`;

export const ButtonOutline = ({title, role, onClick}: Props) => {
  return (
    <Outline role={role} onClick={onClick}>
      {title}
    </Outline>
  )
}
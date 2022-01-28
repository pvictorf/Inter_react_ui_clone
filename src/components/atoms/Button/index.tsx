import styled from 'styled-components'

export interface ButtonProps {
  title: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactChild,
  stay?: 'left' | 'right' 
}

export const Button = styled.button`
  display: block;
  cursor: pointer;
  padding: 0.8rem 1.1rem;
  width: 100%;
  font-size: 1.1.rem;
  font-weight: 600;
  border-radius: 8px;
`;
import React from 'react'
import styled from 'styled-components'

interface Props {
  image: string,
  locale: string,
  active?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const FlagStyled = styled.button`
  display: block;
  cursor: pointer;
  background: none;
  border: none;
`;

export const Flag = ({image, locale, active, onClick}: Props) => {
  return (
    <FlagStyled onClick={onClick} style={{opacity: locale === active ? 1 : 0.6}} >
      <img 
        width={25}
        alt={image}
        src={require(`../../../assets/images/flags/${image}.svg`)}     
      />
    </FlagStyled>
  )
}
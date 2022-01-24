import React from 'react'

interface Props {
  image: string,
  onClick?: React.MouseEventHandler<HTMLImageElement>
}

export const Flag = ({image, onClick}: Props) => {
  return (
    <img 
      role="language"
      width={25}
      alt={image}
      onClick={onClick}
      src={require(`../../../assets/images/flags/${image}.svg`)}   
    />
  )
}
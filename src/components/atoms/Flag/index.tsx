import React from 'react'

interface Props {
  image: string,
  locale: string,
  active?: string,
  onClick?: React.MouseEventHandler<HTMLImageElement>
}

export const Flag = ({image, locale, active, onClick}: Props) => {
  return (
    <img 
      width={25}
      alt={image}
      onClick={onClick}
      src={require(`../../../assets/images/flags/${image}.svg`)}   
      style={{opacity: locale === active ? 1 : 0.6}}
    />
  )
}
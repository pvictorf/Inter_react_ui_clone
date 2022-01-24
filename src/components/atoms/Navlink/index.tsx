import React from "react"
import * as S from "./styled"

interface Props {
  title: string,
  icon?: boolean,
}

export const Navlink = ({title, icon = false}: Props) => {
  return (
    <S.Navlink role="navlink">
      {title}
      {icon && <S.IconArrowDown />}
    </S.Navlink>
  )
}
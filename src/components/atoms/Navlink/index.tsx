import React from "react"
import * as S from "./styled"
import { FiChevronDown } from "react-icons/fi";

interface Props {
  title: string,
  icon?: boolean,
}

export const Navlink = ({title, icon = false}: Props) => {
  return (
    <S.Navlink role="navlink">
      {title}
      {icon && <FiChevronDown className="icon" />}
    </S.Navlink>
  )
}
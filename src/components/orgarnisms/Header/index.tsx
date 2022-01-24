import React from "react";
import * as S from './styled'
import { ButtonFilled } from "../../atoms/ButtonFilled";
import { ButtonOutline } from "../../atoms/ButtonOutline";
import { Logo } from '../../atoms/Logo'
import { Navbar } from '../../molecules/Navbar'
import { Flag } from "../../atoms/Flag";


export const Header = () => {
  return (
      <S.Header>
        <Logo />
        <Navbar />
        <S.Actions>
          <ButtonFilled role="open-account" title="Abra a sua conta" />
          <ButtonOutline role="signin" title="Acessar" />
        </S.Actions>
        <S.Flags>
          <Flag image="brazil" />
          <Flag image="usa" />
        </S.Flags>
      </S.Header>
    )
}
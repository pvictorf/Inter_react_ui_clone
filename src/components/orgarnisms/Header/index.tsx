import React, { useEffect, useState } from "react";
import * as S from './styled'
import { ButtonFilled } from "../../atoms/ButtonFilled";
import { ButtonOutline } from "../../atoms/ButtonOutline";
import { Logo } from '../../atoms/Logo'
import { Navbar } from '../../molecules/Navbar'
import { Flag } from "../../atoms/Flag";
import { Container } from "../../bosons/Container";



export const Header = () => {

  const [headerBg, setHeaderBg] = useState('#FFF');

  useEffect(() => {
    const onUserScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      const activeArea = height * 0.25;

      if(scroll > activeArea) {
        setHeaderBg('orange');
        return;
      }
      setHeaderBg('white');
    }

    window.removeEventListener('scroll', onUserScroll);
    window.addEventListener('scroll', onUserScroll, { passive: true });
    return () => window.removeEventListener('scroll', onUserScroll);
  }, [headerBg]);

  return (
      <S.Header>
        <S.HeaderContainer >
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
      </S.HeaderContainer>
      </S.Header>
    )
}
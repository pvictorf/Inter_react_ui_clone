import { useEffect, useState } from "react";
import { useLocale } from "../../../hooks/useLocale";
import { useScroll } from "../../../hooks/useScroll";

import * as S from './styled'
import { ButtonFilled } from "../../atoms/ButtonFilled";
import { ButtonOutline } from "../../atoms/ButtonOutline";
import { Logo } from '../../atoms/Logo'
import { Navbar } from '../../molecules/Navbar'
import { Flag } from "../../atoms/Flag";


export const Header = () => {

  const { t, activeLocale, setLocale } = useLocale('ptbr')
  const [headerClass, setHeaderClass] = useState('')

  useScroll({
    area: 'top',
    onScrollIn: () => setHeaderClass('active'),
    onScrollOut: () => setHeaderClass(''),
  })

  return (
      <S.Header className={headerClass} data-active={headerClass}>
        <S.HeaderContainer >
        <Logo />
        <Navbar />
        <S.Actions>
          <ButtonFilled role="open-account" title={t('open_account')} />
          <ButtonOutline role="signin" title={t('access')} />
        </S.Actions>
        <S.Flags>
          <Flag image="brazil" locale="ptbr" onClick={() => setLocale('ptbr')} active={activeLocale} />
          <Flag image="usa" locale="en" onClick={() => setLocale('en')} active={activeLocale} />
        </S.Flags>
      </S.HeaderContainer>
      </S.Header>
    )
}
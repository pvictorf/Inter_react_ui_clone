import React from 'react';
import * as S from './styled'
import { Navlink } from '../../atoms/Navlink';
import { useLocale } from '../../../hooks/useLocale';

export const Navbar = () => {
  const {t} = useLocale()

  return (
    <S.Navbar role="navigation">
        <Navlink title={t("inter")} icon={true} />
        <Navlink title={t("for_you")} icon={true} />
        <Navlink title={t("companies")} icon={true} />
        <Navlink title={t("blog")} />
    </S.Navbar>
  )
}

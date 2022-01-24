import React from 'react';
import * as S from './styled'
import { Navlink } from '../../atoms/Navlink';

export const Navbar = () => {
  return (
    <S.Navbar role="navigation">
        <Navlink title="Inter" icon={true} />
        <Navlink title="Para você" icon={true} />
        <Navlink title="Empresas" icon={true} />
        <Navlink title="Blog" icon={true} />
    </S.Navbar>
  )
}

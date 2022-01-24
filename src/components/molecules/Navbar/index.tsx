import React from 'react';
import * as S from './styled'
import { Navlink } from '../../atoms/Navlink';

export const Navbar = () => {
  return (
    <S.Navbar role="navigation">
        <Navlink title="O Inter" icon={true} />
        <Navlink title="Pra você" icon={true} />
        <Navlink title="Empresas" icon={true} />
        <Navlink title="Blog" icon={true} />
    </S.Navbar>
  )
}

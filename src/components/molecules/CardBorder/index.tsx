import React from "react";
import * as S from './styled'
import { GoPrimitiveDot, GoX } from 'react-icons/go'
import { Title } from "../../atoms/Title";
import { ButtonFilled } from "../../atoms/ButtonFilled";



export const CardBorder = () => {
  return (
    <S.CardBorder>
      <S.CardBorderHeader>
        <S.Dots>
          <GoPrimitiveDot />
          <GoPrimitiveDot />
          <GoPrimitiveDot />
        </S.Dots>
        <GoX />
      </S.CardBorderHeader>
      <S.CardBorderContent>
        <Title text="Mais cashback para todo mundo!" />
        <p>
            No Inter Shop, <strong>até quem não é Inter</strong> compra nas
            melhores lojas e tem cashback <strong>na conta que
            preferir!</strong>
        </p>
        <ButtonFilled title="Comprar com cashback" />
      </S.CardBorderContent>
    </S.CardBorder>
  );
}
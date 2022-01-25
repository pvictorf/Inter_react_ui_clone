import React from "react";
import * as S from './styled'
import { GoPrimitiveDot, GoX } from 'react-icons/go'
import { Title } from "../../atoms/Title";
import { ButtonFilled } from "../../atoms/ButtonFilled";
import { useLocale } from "../../../hooks/useLocale";
import { Locale } from "../../atoms/Locale";


export const CardBorder = () => {
  const {t} = useLocale()

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
        <Title text={t('more_cashback')} />
        <p>
          <Locale translation="in_inter_shop" />
        </p>
        <ButtonFilled title={t('buy_with_cashback')} />
      </S.CardBorderContent>
    </S.CardBorder>
  );
}
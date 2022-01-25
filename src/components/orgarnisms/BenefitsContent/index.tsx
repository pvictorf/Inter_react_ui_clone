import React from "react";
import { useLocale } from "../../../hooks/useLocale";
import * as S from './styled';

export const BenefitsContent = () => {
  const {t} = useLocale()

  /* TODO: Adicionar animação fade */
  return (
    <S.BenefitsContent>
      <S.Image />
      <S.Text>{t('free_digital_account')}</S.Text>
    </S.BenefitsContent>
  );
} 
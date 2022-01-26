import React from "react";
import { useLocale } from "../../../hooks/useLocale";
import * as S from './styled';

export const BenefitsSection = () => {
  const {t} = useLocale()

  /* TODO: Adicionar animação fade */
  return (
    <S.BenefitsSection>
      <S.Image />
      <S.Text>{t('free_digital_account')}</S.Text>
    </S.BenefitsSection>
  );
} 
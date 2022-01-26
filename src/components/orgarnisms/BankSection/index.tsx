import React from "react";
import { useLocale } from "../../../hooks/useLocale";
import { BoxArticle } from "../../molecules/BoxArticle";
import * as S from './styled';

export const BankSection = () => {
  const {t} = useLocale()

  return (
    <S.BankSection>
      <BoxArticle title="Boooooow" subtitle="EEEEEE" label="Inter" />
    </S.BankSection>
  );
} 
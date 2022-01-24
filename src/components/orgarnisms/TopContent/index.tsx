import React from "react";
import * as S from './styled';
import { CardBorder } from "../../molecules/CardBorder";

export const TopContent = () => {
  return (
    <S.TopContent>
      <CardBorder />
      <S.Image />
      {/* TODO: Colocar animações de poligonos atras, utilizar z-index */}
      {/* <S.PoligionsAnimation /> */}
    </S.TopContent>
  );
} 
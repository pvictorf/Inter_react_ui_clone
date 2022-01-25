import React from "react";
import * as S from './styled';
import { CardBorder } from "../../molecules/CardBorder";
import { Container } from "../../bosons/Container";

export const TopContent = () => {
  return (
    /* TODO: Colocar animações de poligonos atras, utilizar z-index */
    /* <S.PoligionsAnimation /> */
    <Container>
      <S.TopContent>
        <CardBorder />
        <S.ImageContainer>
          <S.Image />
        </S.ImageContainer>
      </S.TopContent>
    </Container>
  );
} 
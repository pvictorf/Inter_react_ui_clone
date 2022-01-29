import * as S from "./styled"

interface BoxArticleProps {
  label?: string;
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  buttonFilled?: JSX.Element;
  buttonOutline?: JSX.Element;
}

export const BoxArticle = ({label, title, subtitle, buttonFilled, buttonOutline}: BoxArticleProps) => {
  return(
    <S.BoxArticle>
      {label && <S.Label>{label}</S.Label>}

      {title && <S.Title>{title}</S.Title>}

      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}

      { buttonFilled && buttonFilled}

      {buttonOutline && buttonOutline}
    </S.BoxArticle>
  );
}
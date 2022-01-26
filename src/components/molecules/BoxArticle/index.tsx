import * as S from "./styled"

interface BoxArticleProps {
  label?: string;
  title: string;
  subtitle?: string;
  buttonFilled?: JSX.Element;
  buttonOutline?: JSX.Element;
}

export const BoxArticle = (props: BoxArticleProps) => {
  return(
    <S.BoxArticle>
      {props.label && <S.Label />}
      {props.title && <S.Title />}
      {props.subtitle && <S.Subtitle />}
      {props.buttonFilled && props.buttonFilled }
      {props.buttonOutline && props.buttonOutline }
    </S.BoxArticle>
  );
}
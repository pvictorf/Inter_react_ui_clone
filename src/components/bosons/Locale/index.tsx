import { Trans } from "react-i18next";

interface Props {
  translation: string,
  defaults?: string,
  values?: {},
  components?: {} 
}

export const Locale = ({translation, values, defaults, components }: Props) => {
  return (
    <Trans
      i18nKey={translation}
      values={values}
      defaults={defaults}
      components={{...components, italic: <i />, bold: <strong />, a: <a href="/">link</a>}}
    />
  )
}
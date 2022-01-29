import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  color?: string;
  activeColor?: string;
  children?: JSX.Element
}

export const Link = ({to = "/", color = "#ff7a00", activeColor = "#ff7a00", children}: LinkProps) => {
  console.warn(children)
  return (
    <RouterLink to={to} style={{color: activeColor ? activeColor : color}}>
      {children && children}
    </RouterLink>
  )
}

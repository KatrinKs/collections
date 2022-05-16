import {createGlobalStyle} from "styled-components"

export const darkTheme = {
  body: "#07282A",
  textColor: "#C7F4F6",
  headingColor: "lightblue"
}

export const lightTheme = {
  body: "#B3E1E5",
  textColor: "#155759",
  headingColor: "#254A4D"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${props => props.theme.headingColor};
 }
`

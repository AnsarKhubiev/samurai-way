import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 13px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
  }

  body {
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.colorTextPrimary};
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
  }
`
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    // acessar dados do ThemeProvider, eles precisam estar dentro do ThemeProvider
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: sans-serif;
  }
`;

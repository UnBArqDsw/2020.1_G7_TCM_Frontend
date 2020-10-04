import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #f0f0f5;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: Roboto, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

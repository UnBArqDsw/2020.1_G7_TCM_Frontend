import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: 'border-box';
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;

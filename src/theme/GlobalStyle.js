import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    position: relative;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat';
    overflow-x: hidden;
  }
  a{
    text-decoration: none;
  }
  ul{
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;

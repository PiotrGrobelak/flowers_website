
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    position: relative;
    margin: 0;
    font-family: 'Montserrat';

  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  h1{
    margin: 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;

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
    overflow-x: hidden;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
    border: none;
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
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
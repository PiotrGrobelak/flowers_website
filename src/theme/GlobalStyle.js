import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

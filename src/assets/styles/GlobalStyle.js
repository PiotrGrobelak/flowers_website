
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
    overflow-x: hidden;
    margin: 0;
    font-family: 'Montserrat';
    ${'' /* height: 200vh; */}

  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
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
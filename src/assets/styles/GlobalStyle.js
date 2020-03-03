
import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../../assets/images/layout_image_1.png'



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
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: top left ;
    background-size: 35%;
    z-index: 999;
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
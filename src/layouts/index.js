import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme/Theme';
import styled from 'styled-components';
import GlobalStyle from 'src/theme/GlobalStyle';
import Navigation from 'src/components/organisms/Navigation/Navigation';
import Footer from 'src/components/organisms/Footer/Footer';
import ButtonScroll from 'src/components/molecules/ButtonScroll/ButtonScroll';
import backgroundImage from 'src/assets/images/layout_image_1.png';

const MainWrapper = styled.main`
 min-height: 100%;
`;

const BodyImage = styled.div`
 position: absolute;
 top: 0;
 left: -20%;
 background-image: url(${backgroundImage});
 background-repeat: no-repeat;
 background-size: 40%;
 z-index: -1;
 height: 300px;
 width: 100%;
 transform: rotate(9deg);
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  height: 500px;
  top: 2%;
  left: -5%;
  background-position: top left;
  background-size: 18%;
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  background-size: 20%;
 }
`;

const MainLayout = ({ children }) => {
 return (
  <>
   <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BodyImage />
    <Navigation />
    <MainWrapper>{children}</MainWrapper>
    <ButtonScroll />

    <Footer />
   </ThemeProvider>
  </>
 );
};

MainLayout.propTypes = {
 children: PropTypes.node.isRequired,
};

export default MainLayout;

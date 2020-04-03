import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme/Theme';
import GlobalStyle from 'src/theme/GlobalStyle';
import Navigation from 'src/components/organisms/Navigation/Navigation';
import Footer from 'src/components/organisms/Footer/Footer';
import { MainWrapper, BodyImage } from './index.styled';

const MainLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BodyImage />
      <Navigation />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

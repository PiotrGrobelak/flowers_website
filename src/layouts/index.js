import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/Theme';
import { MainWrapper, BodyImage } from './index.styled';

const MainLayout = ({ children }) => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BodyImage />
            <Navigation />
            <MainWrapper>
                {children}
            </MainWrapper>
            <Footer />
        </ThemeProvider>
    </>
)

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
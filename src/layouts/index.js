import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/Theme'



const MainWrapper = styled.main`
margin: 1rem;
margin-top: 4rem;
height: 100vh;
/* background-color: lightgrey; */
`;



const MainLayout = ({ children }) => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navigation />
            <MainWrapper>
                {children}
            </MainWrapper>
            <Footer />
        </ThemeProvider>
    </>
)

export default MainLayout;
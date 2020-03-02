import React from "react";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const MainWrapper = styled.main`
margin: 3rem;
`;



const MainLayout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navigation />
        <MainWrapper>
            {children}
        </MainWrapper>
        <Footer />
    </>
)

export default MainLayout;
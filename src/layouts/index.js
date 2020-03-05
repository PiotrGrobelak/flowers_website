import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/Theme'
import backgroundImage from '../assets/images/layout_image_1.png'



const MainWrapper = styled.main`
/* position: relative; */
margin: 1rem;
margin-top: 4rem;
height: 100%;
`;

const BodyImage = styled.div`
position: absolute;
top: 0;
left: -20%;
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: 35%;
z-index: -1;
height: 500px;
width: 100%;
transform: rotate(9deg);
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    top: 2%;
    left: -2%;
    background-position: top left ;
    background-size: 20%;
}
`;




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
    // theme: PropTypes.object.isRequired
};


export default MainLayout;
import React from "react";
import GlobalStyle from "../assets/styles/GlobalStyle";



const MainLayout = ({ children }) => (
    <>
        <GlobalStyle />
        {/* <Navigation /> */}
        {children}
    </>
)

export default MainLayout;
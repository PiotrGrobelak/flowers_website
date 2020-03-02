import React from "react"
import styled from 'styled-components';

const FooterWrapper = styled.footer`
position: absolute;
left: 0;
bottom: 0;
`;



const Footer = () => (
    <FooterWrapper>
        <p>Welcome to Footer</p>
    </FooterWrapper>
)

export default Footer;
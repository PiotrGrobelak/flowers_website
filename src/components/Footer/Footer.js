import React from "react"
import { FooterContainer, FooterList, FooterItem, FooterSocialLink, FooterWrapper } from "./Footer.styled";
import { AiFillFacebook, AiOutlineInstagram, } from "react-icons/ai";

const Footer = () => (
    <FooterContainer>
        <FooterList>
            <FooterItem>
                <FooterSocialLink href="#">
                    <AiFillFacebook />
                </FooterSocialLink>
            </FooterItem>
            <FooterItem>
                <FooterSocialLink href="#">
                    <AiOutlineInstagram />
                </FooterSocialLink>
            </FooterItem>
        </FooterList>
        <FooterWrapper>
            <span >
                2020 © Flowers. Gatsby + DatoCms
            </span>
            <a href="https://github.com/PiotrGrobelak?tab=repositories" target="_blank" rel="noopener noreferrer">
                Project by Piotr Grobelak
            </a>
        </FooterWrapper>
    </FooterContainer>
)

export default Footer;
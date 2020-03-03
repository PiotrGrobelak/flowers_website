import React, { useState, useRef } from 'react'
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useHandleOutside } from '../../helpers/useHandleOutside';
import { useWindowSize } from '../../helpers/useWindowSize';
import LogoImage from "../../assets/images/logo.png";
import Burger from "../Burger/Burger";
import { NavigationContainer, ContactLink, NavigationWrapper, NavigationList, NavigationItem, NavigationLink, Logo, ContactIcon, ContactNumber } from "./Navigation.styled"
import { theme } from '../../assets/styles/Theme';


const Navigation = () => {
    const [open, setOpen] = useState(false);
    const wiondwSize = useWindowSize();
    const navList = useRef();
    const navContainer = useRef();
    const toggleNavigation = () => {
        setOpen(!open)
        if (!open && (wiondwSize.width < +theme.responsive.desktop.slice(0, 4))) {
            disableBodyScroll(navList);
        } else {
            enableBodyScroll(navList);
        }
    }
    useHandleOutside(open, navContainer, () => toggleNavigation())

    return (
        <NavigationContainer ref={navContainer} >
            {console.log(wiondwSize)}
            <ContactLink
                href="tel:093-393-920">
                <ContactIcon />
                <ContactNumber>
                    093-393-920
                </ContactNumber>
            </ContactLink>
            <Burger open={open} toggleNavigation={toggleNavigation} />
            <NavigationWrapper open={open} ref={navList}>
                <Link
                    to="/"
                    onClick={() => toggleNavigation()}
                >
                    <Logo src={LogoImage} />
                </Link>
                <NavigationList >
                    <NavigationItem>
                        <NavigationLink
                            to="/about"
                            onClick={() => toggleNavigation()}
                        >About
                    </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink
                            to="/gallery"
                            onClick={() => toggleNavigation()}
                        >Gallery
                        </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink
                            to="/offer"
                            onClick={() => toggleNavigation()}
                        >Offer
                    </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink
                            to="/contact"
                            onClick={() => toggleNavigation()}
                        >Contact
                    </NavigationLink>
                    </NavigationItem>
                </NavigationList>
            </NavigationWrapper>


        </NavigationContainer>
    )
}


export default Navigation;
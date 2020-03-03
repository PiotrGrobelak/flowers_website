import React, { useState } from 'react'
// import { bool } from 'prop-types';
import { Link } from 'gatsby';
import LogoImage from "../../assets/images/logo.png";
import Burger from "../Burger/Burger";
import { NavigationContainer, ContactLink, NavigationWrapper, NavigationList, NavigationItem, NavigationLink, Logo, ContactIcon, ContactNumber } from "./Navigation.styled"




const Navigation = () => {
    const [open, setOpen] = useState(true);


    return (
        <NavigationContainer>
            <ContactLink
                href="tel:093-393-920">
                <ContactIcon />
                <ContactNumber>
                    093-393-920
                </ContactNumber>
            </ContactLink>
            <Burger open={open} setOpen={setOpen} />
            <NavigationWrapper open={open}>
                <Link
                    to="/"
                    onClick={() => setOpen(!open)}
                >
                    <Logo src={LogoImage} />
                </Link>
                <NavigationList >
                    <NavigationItem>
                        <NavigationLink
                            to="/about"
                            onClick={() => setOpen(!open)}
                        >About
                    </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink
                            to="/gallery"
                            onClick={() => setOpen(!open)}
                        >Gallery
                     </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink
                            to="/offer"
                            onClick={() => setOpen(!open)}
                        >Offer
                    </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink
                            to="/contact"
                            onClick={() => setOpen(!open)}
                        >Contact
                    </NavigationLink>
                    </NavigationItem>
                </NavigationList>
            </NavigationWrapper>


        </NavigationContainer>
    )
}

// Navigation.propTypes = {
//     open: bool.isRequired,
// }

export default Navigation;
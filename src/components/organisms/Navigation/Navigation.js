import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useHandleOutside } from 'src/helpers/useHandleOutside';
import { useWindowSize } from 'src/helpers/useWindowSize';
import LogoImage from 'src/assets/images/logo.png';
import Burger from 'src/components/molecules/Burger/Burger';
import { theme } from 'src/theme/Theme';
import {
 NavigationContainer,
 ContactLink,
 NavigationWrapper,
 NavigationList,
 NavigationItem,
 NavigationLink,
 Logo,
 LogoMobile,
 ContactIcon,
 ContactNumber,
} from './Navigation.styled';

const Navigation = () => {
 const [open, setOpen] = useState(false);
 const windowSize = useWindowSize();
 const navList = useRef();
 const navContainer = useRef();

 const toggleNavigation = () => {
  setOpen(!open);
  if (!open && windowSize.width < +theme.responsive.md.slice(0, 4)) {
   disableBodyScroll(navList);
  } else {
   enableBodyScroll(navList);
  }
 };

 useHandleOutside(open, navContainer, () => toggleNavigation());

 return (
  <NavigationContainer ref={navContainer}>
   <Link to="/">
    <LogoMobile src={LogoImage} />
   </Link>
   <ContactLink as="a" href="tel:093-393-920">
    <ContactIcon />
    <ContactNumber>093-393-920</ContactNumber>
   </ContactLink>
   <Burger open={open} toggleNavigation={toggleNavigation} />
   <NavigationWrapper open={open} ref={navList}>
    <Link to="/" onClick={() => toggleNavigation()}>
     <Logo src={LogoImage} />
    </Link>
    <NavigationList>
     <NavigationItem>
      <NavigationLink to="/" onClick={() => toggleNavigation()}>
       Home
      </NavigationLink>
     </NavigationItem>
     <NavigationItem>
      <NavigationLink to="/about" onClick={() => toggleNavigation()}>
       About
      </NavigationLink>
     </NavigationItem>
     <NavigationItem>
      <NavigationLink to={'/gallery'} onClick={() => toggleNavigation()}>
       Gallery
      </NavigationLink>
     </NavigationItem>
     <NavigationItem>
      <NavigationLink to="/offer" onClick={() => toggleNavigation()}>
       Offer
      </NavigationLink>
     </NavigationItem>
     <NavigationItem>
      <NavigationLink to="/contact" onClick={() => toggleNavigation()}>
       Contact
      </NavigationLink>
     </NavigationItem>
    </NavigationList>
   </NavigationWrapper>
  </NavigationContainer>
 );
};

export default Navigation;

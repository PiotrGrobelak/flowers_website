import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import LogoImage from "../../assets/images/logo.png"

const NavigationContainer = styled.nav`
position: relative;
display: flex;
flex-direction: column;
height: 100px;
a{
    text-decoration: none;
    color: inherit;
}
`;

const Contact = styled.div`
align-self: flex-end;
margin: 0.5rem;
margin-right: 10%;
padding: 0.4rem 1rem;
background-color:  #9875B4;
border-radius: 25px;
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
font-weight: 600;
font-size: 0.8rem;
color: #fff;
`;


const NavigationWrapper = styled.div`
display: grid;
position: fixed;
top: 5%;
width: 100%;
/* grid-template-columns: repeat(2, 1fr); */
grid-template-rows:repeat(2, 50px);
align-items: center;
background-color: #fff;
border-top: 1px solid #9875B4;
border-bottom: 1px solid #9875B4;
box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.25);


`;

const Logo = styled.img`
margin-left: 10%;
height: 80px;
`;

const NavigationList = styled.ul`
display: flex;
margin-right: 1rem;
list-style: none;
`;

const NavigationItem = styled.li`
font-weight: 600;
font-size: 15px;
margin-left: 32px;
/* padding: 1rem 0.2rem; */

`;

const Navigation = () => {
    return (
        <NavigationContainer>
            <Contact>093-393-920</Contact>
            <NavigationWrapper>
                <Link to="/"><Logo src={LogoImage} /></Link>
                <NavigationList>
                    <NavigationItem><Link to="/about">About</Link></NavigationItem>
                    <NavigationItem><Link to="/gallery">Gallery</Link></NavigationItem>
                    <NavigationItem><Link to="/contact">Contact</Link></NavigationItem>
                </NavigationList>
            </NavigationWrapper>
        </NavigationContainer>
    )
}

export default Navigation;
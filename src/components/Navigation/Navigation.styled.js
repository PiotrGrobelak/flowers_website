import styled from 'styled-components'
import { Link } from 'gatsby'
import { MdPhoneInTalk } from 'react-icons/md'

export const NavigationContainer = styled.nav`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
`;

export const ContactLink = styled.a`
align-self: flex-end;
display: flex;
margin: 0.5rem;
padding: 0.4rem 1rem;
background-color:  #9875B4;
border-radius: 25px;
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
font-weight: 600;
color: #fff;
z-index: 999;
`;

export const ContactNumber = styled.span`
font-size: 0.9rem;
`;

export const ContactIcon = styled(MdPhoneInTalk)`
margin-right: 1rem;
font-size: 1.2rem;
`;

export const NavigationWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top: 9%;
left: 0;
width: 100%;
/* height: 80%; */
background-color: #fff;
border-top: 1px solid #9875B4;
border-bottom: 1px solid #9875B4;
box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.25);
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
transition: transform 0.3s ease-in-out;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    height: auto;
    transform: translateX(0)
    }
`;

export const Logo = styled.img`
margin-top: 3rem;
height: 80px;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    margin-top: 0;
    }
`;

export const NavigationList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
align-items:center;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    flex-direction: row;
    }
`;

export const NavigationItem = styled.li`
font-weight: 600;
font-size: 1rem;
padding: 1rem;
:nth-last-child(1){
    margin-bottom: 1rem;
    @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    margin-bottom: 0;
    }
}
`;

export const NavigationLink = styled(Link)`
padding: 0.2rem;
border-top: 2px solid transparent;
border-bottom: 2px solid transparent;
transition:  0.3s ease-in-out;
:hover{
    border-top: 2px solid ${({ theme }) => theme.colors.primaryViolet};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryViolet};
}
`;
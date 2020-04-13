import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';
import MapConatiner from 'src/components/molecules/MapConatiner/MapConatiner';
import ContactInformation from 'src/components/molecules/ContactInformation/ContactInformation';
import ButtonIcon from 'src/components/atoms/ButtonIcon/ButtonIcon';
import { useState } from 'react';
import { BoxProperty } from 'src/theme/Mixins';

const StyledWrapper = styled.div`
 padding: 2rem;
 background-color: ${({ theme }) => theme.colors.primaryViolet};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  padding: 2rem 20rem;
 }
`;

const StyledButtonIcon = styled(ButtonIcon)`
 display: none;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  display: block;
  color: red;
 }
`;

const StyledInnerWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 800px;
 /* height: ${({ open }) => (open ? '400px' : '0px')}; */
 /* visibility: ${({ open }) => (open ? 'visible' : 'hidden')}; */
 background-color: ${({ theme }) => theme.colors.primaryWhite};
 transition: all 0.4s linear;
 overflow: hidden;
 ${BoxProperty};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
     display: grid;
 grid-template-columns: 0.8fr 1fr;
  height: ${({ open }) => (open ? '400px' : '0px')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  transition: all 0.4s linear;
  overflow: hidden;
 }
`;

const InformationContent = () => {
 const [open, setOpen] = useState(false);

 const toggleOpen = () => {
  setOpen(!open);
  console.log(open);
 };

 return (
  <StyledWrapper>
   <StyledButtonIcon onClick={() => toggleOpen()}>
    <MdKeyboardArrowUp size={`3.6rem`} />
   </StyledButtonIcon>
   <StyledInnerWrapper open={open}>
    <ContactInformation />
    <MapConatiner />
   </StyledInnerWrapper>
  </StyledWrapper>
 );
};

export default InformationContent;

import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { ScrollTo } from 'react-scroll-to';
import { BoxShadow } from 'src/theme/Mixins';

import ButtonIcon from 'src/components/atoms/ButtonIcon/ButtonIcon';

const showButton = keyframes`
from {opacity: 0; transform: translate(50%); }
to {opacity: 1; transform: translate(0%); }
`;

const hideButton = keyframes`
from {opacity: 1; transform: translate(0%); }
to {opacity: 0; transform: translate(50%); }
`;

const StyledButtonIcon = styled(ButtonIcon)`
 position: fixed;
 bottom: 70px;
 right: 0;
 height: 45px;
 width: 45px;
 border-radius: 15px 0px 0px 15px;
 color: ${({ theme }) => theme.colors.primaryViolet};
 border-left: 2px solid ${({ theme }) => theme.colors.primaryViolet};
 border-top: 2px solid ${({ theme }) => theme.colors.primaryViolet};
 border-bottom: 2px solid ${({ theme }) => theme.colors.primaryViolet};
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
 ${BoxShadow};
 opacity: 0;
 transform: translate(50%);
 animation: ${({ show }) =>
  show
   ? css`
      ${showButton} .5s ease-in-out forwards
     `
   : css`
      ${hideButton} .3s ease forwards
     `};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  bottom: 120px;
  right: 10px;
  border-radius: 20px;
  height: 60px;
  width: 60px;
  border: 2px solid ${({ theme }) => theme.colors.primaryViolet};
  transition: border-radius 0.5s ease-in-out;
  :hover {
   border-radius: 50%;
  }
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  right: 20px;
 }
`;

const ButtonScroll = () => {
 const [show, doShow] = useState(false);
 useEffect(() => {
  const onScroll = () => {
   let scrollPos = window.scrollY + window.innerHeight;
   if (scrollPos > 1000) {
    doShow(true);
   } else {
    doShow(false);
   }
  };
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, []);
 return (
  <>
   <ScrollTo>
    {({ scroll }) => (
     <StyledButtonIcon
      show={show}
      onClick={() => scroll({ x: 0, y: 0, smooth: true })}
     >
      <MdKeyboardArrowUp size={`3.6rem`} />
     </StyledButtonIcon>
    )}
   </ScrollTo>
  </>
 );
};

export default ButtonScroll;

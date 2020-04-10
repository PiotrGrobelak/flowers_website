import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Image from 'gatsby-image';
import { BoxShadow, BorderRight, BorderLeft } from 'src/theme/Mixins';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import BackgroundImage from 'src/assets/images/layout_image_6.png';

const slideImage = keyframes`
 from {transform: translateX(-200%)}
 to {transform: translateX(0%)}
`;

const paragraphAnimation = keyframes`
0% {transform: scale(0); opacity: 0 }
50% {transform: scale(0.7); opacity: 0}
70% {transform: scale(1.1); opacity: 0.7}
100% {transform: scale(1); opacity: 1}
`;

const StyledParagraph = styled(Paragraph)`
 position: absolute;
 top: 45px;
 right: 0;
 margin: 0;
 padding: 2rem 1rem 2rem 1rem;
 width: 60%;
 overflow: hidden;
 background-color: ${({ theme }) => theme.colors.primaryWhite};
 initial-letter: 3;
 ${BoxShadow};
 ${BorderLeft};
 opacity: 0;
 animation: ${({ animate }) =>
  animate &&
  css`
   ${paragraphAnimation} 1.8s ease-in-out both
  `};
 ::before {
  content: '';
  position: absolute;
  bottom: -17px;
  right: -65%;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 70px;
  opacity: 0.6;
  transform: scaleX(-1);
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
   right: -85%;
   background-size: 100px;
  }
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  padding: 6rem 3rem 6rem 3rem;
  top: 20%;
  left: 35%;
  ${BorderRight};
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  left: 45%;
 }
`;

const StyledImage = styled(Image)`
 position: absolute;
 top: 0%;
 left: -40%;
 height: 100%;
 width: 100%;
 object-fit: cover;
 ${BoxShadow};
 ${BorderRight};
 z-index: -1;
 transform: translateX(-200%);
 animation: ${({ animate }) =>
  animate &&
  css`
   ${slideImage} 1.2s ease-in-out both
  `};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  left: -50%;
 }
`;

const StyledWrapper = styled.div`
 position: relative;
 height: 500px;
 margin: 25rem auto;
 &:nth-of-type(1) {
  margin-top: 6rem;
 }
 &:nth-last-of-type(1) {
  margin-bottom: 10rem;
 }
 &:nth-of-type(even) ${StyledParagraph}:nth-child(2) {
  left: 0;
  padding: 2rem 1rem 2rem 1rem;
  ${BorderRight};
  ::before {
   right: 0;
   transform: scaleX(1);
  }
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
   padding: 6rem 3rem 6rem 3rem;
   left: 5%;
   ${BorderLeft};
  }
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
   left: -5%;
  }
 }
 &:nth-of-type(even) ${StyledImage}:nth-child(1) {
  left: 30%;
  ${BorderLeft};
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
   left: 50%;
  }
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  margin: 10rem auto;
  max-width: 800px;
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  max-width: 1000px;
 }
`;

const AboutSection = React.memo(({ fluid, alt, paragraph }) => {
 const [animate, setAnimate] = useState(false);
 const refItem = useRef();

 const isAnimate = (elementPosition, scrollPosition) => {
  if (elementPosition < scrollPosition) {
   setAnimate(true);
  }
 };
 useEffect(() => {
  let scrollPos = window.scrollY + window.innerHeight;
  const elementPos = refItem.current.getBoundingClientRect().top;
  isAnimate(elementPos, scrollPos);
  const onScroll = () => {
   scrollPos = window.scrollY + window.innerHeight;

   isAnimate(elementPos, scrollPos);
  };
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, [refItem, animate]);

 return (
  <StyledWrapper ref={refItem}>
   <StyledImage fluid={fluid} alt={alt} animate={animate} />
   <StyledParagraph animate={animate}>{paragraph}</StyledParagraph>
  </StyledWrapper>
 );
});

export default AboutSection;

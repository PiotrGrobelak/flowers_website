import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import { BoxShadow, BorderRight, BorderLeft } from 'src/theme/Mixins';
import BackgroundImage from 'src/assets/images/layout_image_6.png';

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
 }
 &:nth-of-type(even) ${StyledImage}:nth-child(1) {
  left: 30%;
  ${BorderLeft};
 }
`;

const AboutSection = ({ fluid, alt, paragraph }) => {
 return (
  <StyledWrapper>
   <StyledImage fluid={fluid} alt={alt} />
   <StyledParagraph>{paragraph}</StyledParagraph>
  </StyledWrapper>
 );
};

export default AboutSection;

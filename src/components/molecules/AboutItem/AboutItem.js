import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import { BoxShadow } from 'src/theme/Mixins';

const StyledParagraph = styled(Paragraph)`
 position: absolute;
 top: 100px;
 right: 0;
 margin: 0;
 padding: 2rem;
 width: 60%;
 ${BoxShadow};
 background-color: ${({ theme }) => theme.colors.primaryWhite};
 border-radius: 25px 0px 0px 25px;
 border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
`;

const StyledImage = styled(Image)`
 position: absolute;
 top: 0%;
 left: -30%;
 height: 100%;
 width: 100%;
 object-fit: cover;
 ${BoxShadow};
 border-radius: 25px;
 border-radius: 0 25px 25px 0;
 border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 z-index: -1;
`;

const StyledWrapper = styled.div`
 position: relative;
 height: 500px;
 margin: 4rem auto;
 &:nth-of-type(1) {
  margin-top: 6rem;
 }
 &:nth-of-type(even) ${StyledParagraph}:nth-child(2) {
  left: 0;
  border-radius: 0px 25px 25px 0px;
  border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 }
 &:nth-of-type(even) ${StyledImage}:nth-child(1) {
  left: 30%;
  border-radius: 25px 0px 0px 25px;
  border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
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

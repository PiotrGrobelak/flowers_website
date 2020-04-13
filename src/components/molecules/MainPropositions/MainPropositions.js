import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { FlexColumn, BoxShadow } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledContainer = styled.div`
 position: relative;
 ${FlexColumn};
`;

const StyledList = styled.ul`
${FlexColumn}
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-template-rows:  1fr;
  grid-gap: 5rem;
  margin-top: 6rem;
}
`;

const StyledItem = styled.li`
margin: 4rem 1rem 2rem;
padding: 0.4rem 0;
border-radius: 25px;
${BoxShadow}
background-color: ${({ theme }) => theme.colors.secondaryWhite};
:nth-child(2){
    margin-top: 2rem;
}
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
margin: 1rem;
transition: transform .4s ease;
:hover{
  transform: scale(1.05);
}
:nth-child(odd){
    margin-bottom: 5rem;
}
:nth-child(even){
    margin-top: 5rem;
    }
}
`;

const StyledParagraph = styled(Paragraph)`
 padding: 1rem;
`;

const StyledHeading = styled(Heading)`
 padding: 1rem;
`;

const StyledImage = styled(Image)`
 margin: 0.4rem auto;
 border-top: 1px solid ${({ theme }) => theme.colors.primaryPink};
 border-bottom: 1px solid ${({ theme }) => theme.colors.primaryPink};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  height: 280px;
 }
`;

const Propositions = ({ mainpropose }) => (
 <StyledContainer>
  <StyledList>
   {mainpropose.map(({ heading, description, proposeimage }, index) => {
    return (
     <StyledItem key={index}>
      <StyledHeading secondary>{heading}</StyledHeading>
      <StyledImage fluid={proposeimage.fluid} alt={proposeimage.alt} />
      <StyledParagraph>{description}</StyledParagraph>
     </StyledItem>
    );
   })}
  </StyledList>
 </StyledContainer>
);

export default Propositions;

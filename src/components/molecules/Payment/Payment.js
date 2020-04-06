import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { MdLocalShipping, MdAttachMoney, MdLocalFlorist, MdTextsms } from 'react-icons/md';
import { FlexRow, FlexColumn } from 'src/theme/Mixins';
import IconWrapper from 'src/components/molecules/IconWrapper/IconWrapper';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledPayment = styled.section`
 position: relative;
 margin: 6rem auto 0;
 width: 100%;
 ${FlexColumn};
 justify-content: center;
 align-items: center;
 overflow: hidden;
`;

const StyledList = styled.ul`
 ${FlexColumn};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  display: grid;
  grid-template-columns: repeat(2, 380px);
  grid-gap: 2rem;
 }
`;

const StyledItem = styled.li`
 ${FlexRow}
 align-items: center;
 justify-content: center;
 margin: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
 padding: 1rem 0.4rem 0.2rem;
 min-height: 100px;
 width: 100%;
 border-radius: 0 0 25px 0;
 border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
 box-shadow: 10px 10px 20px -15px ${({ theme }) => theme.colors.secondaryViolet};
`;

const StyledBackgroundImage = styled(Image)`
 position: absolute !important;
 top: 50%;
 left: 0;
 width: 100%;
 object-fit: cover;
 z-index: -1;
 opacity: 0.7;
 transform: rotate(-55deg) scale(1.3);
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  top: 5%;
  left: 10%;
  width: 70%;
  transform: rotate(200deg) scale(1);
 }
`;

const Payment = () => {
 const { file } = useStaticQuery(graphql`
  {
   file(name: { eq: "layout_image_5" }) {
    childImageSharp {
     fluid(quality: 100) {
      ...GatsbyImageSharpFluid_tracedSVG
     }
    }
   }
  }
 `);
 return (
  <StyledPayment>
   <Heading secondary as="h3">
    Payment
   </Heading>
   <StyledList>
    <StyledItem>
     <IconWrapper>
      <MdLocalShipping size={`2.2rem`} />
     </IconWrapper>
     <StyledParagraph>
      The minimum delivery time is 1 hour or at your appointed time. We deliver personally!
     </StyledParagraph>
    </StyledItem>
    <StyledItem>
     <IconWrapper>
      <MdLocalFlorist size={`2.2rem`} />
     </IconWrapper>
     <StyledParagraph>
      Guarantee quality of the bouquet! Our bouquets are always fresh, all flowers are beautiful and
      without damage.
     </StyledParagraph>
    </StyledItem>
    <StyledItem>
     <IconWrapper>
      <MdAttachMoney size={`2.2rem`} />
     </IconWrapper>
     <StyledParagraph>
      Payment by cash or card! You have the opportunity to pay in any way convenient for you.
     </StyledParagraph>
    </StyledItem>
    <StyledItem>
     <IconWrapper>
      <MdTextsms size={`2.2rem`} />
     </IconWrapper>
     <StyledParagraph>
      After completing the order, we send an SMS notification about the delivery of the bouquet to
      the recipient.
     </StyledParagraph>
    </StyledItem>
   </StyledList>
   <StyledBackgroundImage fluid={file.childImageSharp.fluid} />
  </StyledPayment>
 );
};

export default Payment;

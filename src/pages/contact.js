import React from 'react';
import styled from 'styled-components';
import { FlexColumn, BoxShadow, BorderLeft } from 'src/theme/Mixins';
import firstLayoutImage from 'src/assets/images/layout_image_2.png';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import MapConatiner from 'src/components/molecules/MapConatiner/MapConatiner';
import ContactInformation from 'src/components/molecules/ContactInformation/ContactInformation';
import Payment from 'src/components/molecules/Payment/Payment';
import FormContent from 'src/components/organisms/FormContent/FormContent';
import Opinions from 'src/components/molecules/Opinions/Opinions';

const Main = styled.main`
position: relative;
margin: 2rem auto;
margin-bottom: 8rem;
max-width: 1200px;
${FlexColumn}
color: ${({ theme }) => theme.colors.thirdaryViolet};
    ::before{
        content: "";
        position: absolute;
        top: 10%;
        right: -40%;
        height: 90%;
        width: 100%;
        background-image: url(${firstLayoutImage});
        background-repeat: no-repeat;
        background-size: 350px;
        z-index: -1;
        @media (min-width: ${({ theme }) => theme.responsive.md}) {
            top: 0;
            right: -80%;
            background-size: 30%;
        }
        @media (min-width: ${({ theme }) => theme.responsive.xl}) {
            right: -105%;
        }
    }
`;

const StyledHeader = styled.header`
 margin: 2rem 0;
 padding: 0 2rem;
 @media (min-width: ${({ theme }) => theme.responsive.xs}) {
  width: 60%;
  align-self: center;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  margin-bottom: 4rem;
  padding-left: 4rem;
  align-self: flex-start;
 }
`;

const StyledWrapper = styled.div`
 margin: 1rem;
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  width: 80%;
  align-self: center;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 4rem;
  width: 100%;
 }
`;

const StyledInnerWrapper = styled.div`
 display: grid;
 grid-template-rows: 1fr 350px;
 margin-top: 6rem;
 padding-bottom: 3rem;
 ${BoxShadow}
 ${BorderLeft};
 background: ${({ theme }) => theme.colors.secondaryWhite};
 @media (min-width: ${({ theme }) => theme.responsive.xs}) {
  grid-template-columns: 320px 1fr;
  grid-template-rows: 1fr;
  padding-bottom: 0;
 }
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  grid-template-columns: 320px 1fr;
  grid-template-rows: 1fr;
  padding-bottom: 0;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  margin-top: 0;
  margin-left: 2rem;
 }
`;

const ContactPage = () => {
 return (
  <Main>
   <StyledHeader>
    <Heading>Contact</Heading>
    <Heading secondary>Hello Guest!</Heading>
    <Paragraph medium>
     If you looking Junior Front-end Developer to your work you can contact me
     with contact form.
    </Paragraph>
   </StyledHeader>
   <StyledWrapper>
    <FormContent />
    <StyledInnerWrapper>
     <ContactInformation />
     <MapConatiner />
    </StyledInnerWrapper>
   </StyledWrapper>
   <Payment />
   <Opinions />
  </Main>
 );
};

export default ContactPage;

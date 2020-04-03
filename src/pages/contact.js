import React from 'react';
import styled from 'styled-components';
import {
  FlexColumn,
  BoxShadow,
  ThirdaryFont,
  SecondaryFont,
} from 'src/theme/Mixins';
import firstLayoutImage from 'src/assets/images/layout_image_2.png';
import MapConatiner from 'src/components/molecules/Location/Map';
import ContactInformation from 'src/components/molecules/ContactInformation/ContactInformation';
import ContactForm from 'src/components/molecules/ContactForm/ContactForm';
import Payment from 'src/components/molecules/Payment/Payment';

const Main = styled.main`
position: relative;
margin: 0 auto;
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
        @media (min-width: ${({ theme }) => theme.responsive.lg}) {
            top: 0;
            right: -80%;
            background-size: 30%;
        }
        @media (min-width: ${({ theme }) => theme.responsive.lg}) {
            right: -105%;
        }
    }
`;

const StyledHeader = styled.header`
  margin: 2rem 0;
  padding-left: 1rem;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    margin-bottom: 4rem;
    padding-left: 4rem;
    align-self: flex-start;
    width: 60%;
  }
  h1 {
    font-size: 2.6rem;
    ${SecondaryFont};
    color: ${({ theme }) => theme.colors.secondaryViolet};
    text-align: center;
  }
  p {
    padding: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  p:nth-of-type(1) {
    margin-top: 4rem;
    font-size: 2.2rem;
    ${ThirdaryFont};
    ::before,
    ::after {
      content: '';
      display: none;
    }
  }
`;

const StyledContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    display: grid;
    grid-template-columns: 350px 1fr;
    grid-gap: 4rem;
  }
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 350px;
    margin-top: 6rem;
    padding-bottom: 3rem;
    border-top-left-radius: 25px;
    border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
    border-bottom-left-radius: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
    ${BoxShadow}
    background: ${({ theme }) => theme.colors.secondaryWhite};
    @media (min-width: ${({ theme }) => theme.responsive.lg}) {
        grid-template-columns: 300px 1fr;
        grid-template-rows: 1fr;
        margin-top: 0;
        margin-left: 2rem;
    padding-bottom: 0;
    }
`;

const ContactPage = () => {
  return (
    <Main>
      <StyledHeader>
        <h1>Contact</h1>
        <p>Hello Guest!</p>
        <p>
          If you looking Junior Front-end Developer to your work you can contact
          me with contact form.
        </p>
      </StyledHeader>
      <StyledContainer>
        <ContactForm />
        <StyledWrapper>
          <ContactInformation />
          <MapConatiner />
        </StyledWrapper>
      </StyledContainer>
      <Payment />
    </Main>
  );
};

export default ContactPage;

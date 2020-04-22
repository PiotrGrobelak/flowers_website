import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { MdLocationOn, MdPhone, MdAccessTime, MdPayment } from 'react-icons/md';
import { FlexRow } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledContainer = styled.section`
 padding: 1rem;
`;

const StyledHeading = styled(Heading)`
 font-size: ${({ theme }) => theme.fontSizes.md};
 text-align: center;
`;

const StyledItem = styled.li`
 ${FlexRow};
 align-items: center;
 margin-top: 1rem;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  margin-top: 2rem;
 }
`;

const StyledInnerWrapper = styled.div`
 margin-left: 1rem;
`;

const StyledItemHeading = styled(Paragraph)`
 margin-bottom: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
 margin: 0;
 font-size: 14px;
`;

const ContactInformation = () => {
 const { datoCmsContactinformation } = useStaticQuery(graphql`
  {
   datoCmsContactinformation {
    title
    adress
    city
    phonenumber
    email
    workingdays
    weekends
    owner
    accountname
    accountnumber
   }
  }
 `);
 const {
  title,
  adress,
  city,
  phonenumber,
  email,
  workingdays,
  weekends,
  owner,
  accountname,
  accountnumber,
 } = datoCmsContactinformation;

 return (
  <StyledContainer>
   <StyledHeading as="h2">{title}</StyledHeading>
   <ul>
    <StyledItem>
     <MdLocationOn size={`2.6rem`} />
     <StyledInnerWrapper>
      <StyledItemHeading as="h3" bold>
       Adress
      </StyledItemHeading>
      <StyledParagraph>{adress}</StyledParagraph>
      <StyledParagraph>{city}</StyledParagraph>
     </StyledInnerWrapper>
    </StyledItem>
    <StyledItem>
     <MdPhone size={`2.6rem`} />
     <StyledInnerWrapper>
      <StyledItemHeading as="h3" bold>
       Contact
      </StyledItemHeading>
      <StyledParagraph>{phonenumber}</StyledParagraph>
      <StyledParagraph>{email}</StyledParagraph>
     </StyledInnerWrapper>
    </StyledItem>
    <StyledItem>
     <MdAccessTime size={`2.6rem`} />
     <StyledInnerWrapper>
      <StyledItemHeading as="h3" bold>
       Opening hours
      </StyledItemHeading>
      <StyledParagraph>Monday-Friday {workingdays}</StyledParagraph>
      <StyledParagraph>Saturday-Sunday {weekends}</StyledParagraph>
     </StyledInnerWrapper>
    </StyledItem>
    <StyledItem>
     <MdPayment size={`2.6rem`} />
     <StyledInnerWrapper>
      <StyledItemHeading as="h3" bold>
       Account
      </StyledItemHeading>
      <StyledParagraph>{owner}</StyledParagraph>
      <StyledParagraph>{accountname}</StyledParagraph>
      <StyledParagraph>{accountnumber}</StyledParagraph>
     </StyledInnerWrapper>
    </StyledItem>
   </ul>
  </StyledContainer>
 );
};

export default ContactInformation;

import React from 'react';
import styled from 'styled-components';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import Label from 'src/components/atoms/Label/Label';
import Input from 'src/components/atoms/Input/Input';
import Button from 'src/components/atoms/Button/Button';
import { FlexRow, FlexColumn, BoxShadow } from 'src/theme/Mixins';

const StyledSection = styled.section`
 ${FlexColumn};
 justify-content: space-between;
 ${BoxShadow};
 border-radius: 25px 0 0 0;
 border-top: 3px solid ${({ theme }) => theme.colors.primaryViolet};
 border-left: 3px solid ${({ theme }) => theme.colors.primaryViolet};
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr;
  grid-gap: 4rem;
  padding: 2rem;
  height: 150px;
  width: 90%;
 }
`;

const StyledFrom = styled.form`
 ${FlexColumn};
 justify-content: space-around;
 align-items: center;
 height: 160px;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  ${FlexRow};
  justify-content: space-around;
  align-items: center;
  height: auto;
 }
`;

const StyledFieldForm = styled.div`
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  width: 40%;
 }
`;

const StyledParagraph = styled(Paragraph)`
 align-self: center;
`;

const Newsletter = () => {
 const handleSubmit = e => {
  e.preventDefault();
  e.target.reset();
 };
 return (
  <StyledSection>
   <Heading secondary center as="h4">
    Newsletter
   </Heading>
   <StyledParagraph bold>Sign up to receive our latest offers.</StyledParagraph>
   <StyledFrom onSubmit={e => handleSubmit(e)}>
    <StyledFieldForm>
     <Label>Email</Label>
     <Input id="email" type="e-mail" name="email" required />
    </StyledFieldForm>
    <Button type="submit">Submit</Button>
   </StyledFrom>
  </StyledSection>
 );
};

export default Newsletter;

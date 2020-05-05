import React from 'react';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FlexColumn, BoxProperty } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Label from 'src/components/atoms/Label/Label';
import Input from 'src/components/atoms/Input/Input';
import SuccessMsg from 'src/components/atoms/SuccessMessage/SuccessMessage';
import ErrorMsg from 'src/components/atoms/ErrorMessage/ErrorMessage';
import Button from 'src/components/atoms/Button/Button';
import firstFormImage from 'src/assets/images/layout_image_6.png';
import secondFormImage from 'src/assets/images/layout_image_3.png';

const StyledForm = styled.form`
 position: relative;
 padding: 1rem 0 2rem;
 height: 100%;
 width: 100%;
 ${FlexColumn}
 justify-content: center;
 align-items: center;
 ${BoxProperty}
 border-width: 2px;
 border-bottom: none;
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
 overflow: hidden;
 ::before {
  content: '';
  position: absolute;
  top: -2%;
  left: -5%;
  height: 100px;
  width: 100px;
  background-image: url(${firstFormImage});
  background-repeat: no-repeat;
  background-size: 75%;
  transform: rotate(80deg);
 }
 ::after {
  content: '';
  position: absolute;
  top: 75%;
  right: -40%;
  height: 200px;
  width: 100%;
  background-image: url(${secondFormImage});
  background-repeat: no-repeat;
  background-size: 70%;
  z-index: -1;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
   top: 65%;
   right: -45%;
  }
 }
 @media (min-width: ${({ theme }) => theme.responsive.xs}) {
  margin: 0 auto;
  width: 55%;
 }
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  margin: 0;
  width: 60%;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  height: 500px;
  width: 100%;
 }
`;

const StyledFieldWrapper = styled.div`
 ${FlexColumn};
`;

const ContactForm = ({
 values,
 handleChange,
 handleBlur,
 handleSubmit,
 isSubmitting,
}) => {
 return (
  <StyledForm onSubmit={handleSubmit}>
   <Heading as="h2" secondary>
    Say Hello!
   </Heading>
   <StyledFieldWrapper>
    <Label htmlFor="name" for="name">
     Name
    </Label>
    <Input
     id="name"
     type="text"
     name="name"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.name}
    />
    <ErrorMsg>
     <ErrorMessage name="name" render={msg => msg} />
    </ErrorMsg>
   </StyledFieldWrapper>
   <StyledFieldWrapper>
    <Label htmlFor="e-mail" for="email">
     E-mail
    </Label>
    <Input
     id="email"
     type="e-mail"
     name="email"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.email}
    />
    <ErrorMsg>
     <ErrorMessage name="email" render={msg => msg} />
    </ErrorMsg>
   </StyledFieldWrapper>
   <StyledFieldWrapper>
    <Label for="message">Message</Label>
    <Input
     as="textarea"
     type="text"
     name="message"
     id="message"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.message}
    />
    <ErrorMsg>
     <ErrorMessage name="message" render={msg => msg} />
    </ErrorMsg>
   </StyledFieldWrapper>
   <SuccessMsg>{isSubmitting ? 'Message sent' : ''}</SuccessMsg>
   <Button type="submit" disabled={isSubmitting}>
    Send message
   </Button>
  </StyledForm>
 );
};

ContactForm.propTypes = {
 handleChange: PropTypes.func.isRequired,
 handleBlur: PropTypes.func.isRequired,
 handleSubmit: PropTypes.func.isRequired,
 isSubmitting: PropTypes.bool.isRequired,
 values: PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
 }),
};

ContactForm.defaultProps = {
 values: '',
};

export default ContactForm;

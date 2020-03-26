import React from "react"
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import { FlexColumn, BoxProperty, SecondaryBoxShadow } from "../../assets/styles/Mixins";
import { Button } from "../Button/Button";
import firstFormImage from "../../assets/images/layout_image_6.png";
import secondFormImage from "../../assets/images/layout_image_3.png";


const StyledForm = styled.form`
position: relative;
padding: 1rem 0;
height: 100%;
width: 100%;
${FlexColumn}
${BoxProperty}
border-width: 2px;
border-bottom: none;
background-color: ${({ theme }) => theme.colors.secondaryWhite};
overflow:hidden;
    ::before{
        content: "";
        position: absolute;
        top: -2%;
        left: -5%;
        height: 100px;
        width: 100px;
        background-image: url(${firstFormImage});
        background-repeat: no-repeat;
        background-size: 75%;
        transform: rotate(80deg)
    }
    ::after{
        content: "";
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
    @media (min-width: ${({ theme }) => theme.responsive.lg}) {
        height: 500px;
    }

h3 {
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
}
`;

const StyledParagraph = styled.p`
margin: 0;
padding: 0 1rem 0;
${FlexColumn};
color: ${({ theme }) => theme.colors.thirdaryViolet};
`;

const StyledInput = styled.input`
    display: block;
    padding: 0.2rem 0.4rem;
    border: 1px solid ${({ theme }) => theme.colors.primaryViolet};
    border-radius: 10px;
    background: none;
    font-size: 1rem;
    height: ${({ as }) => as ? '150px' : 'auto'};
    transition: all .3s ease-in-out;
    :focus{
        background: ${({ theme }) => theme.colors.secondaryWhite};
        ${SecondaryBoxShadow};
    }
`;

const StyledLabel = styled.label`
    margin: 0.5rem 0 0.5rem 0.5rem;
    display: block;
    font-size: 0.8rem;
    font-weight: bold;

`;

const StyledButton = styled.button`
    ${Button}
    margin: 0 auto 1rem;
`;

const StyledSuccess = styled.div`
    padding-left: 2rem;
    height: 20px;
    color: ${({ theme }) => theme.colors.primaryGreen};
`;

const StyledError = styled.span`
    padding: 0.2rem;
    height: 1rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryRed};
`;


const ContactForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.message) {
                    errors.message = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm, setStatus, }) => {
                axios.post(
                    'https://us-central1-flowers-website-contact.cloudfunctions.net/sendEmail',
                    values)
                    .then((res) => {
                        console.log(res)
                        setSubmitting(false);
                        resetForm(values);
                    })
                    .catch((err) => {
                        console.log(err);
                        setSubmitting(false);
                    });
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                status
            }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <h3>Say Hello!</h3>
                        <StyledParagraph>
                            <StyledLabel htmlFor="name">Name</StyledLabel>
                            <StyledInput
                                id="name"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <StyledError>
                                <ErrorMessage name="name" render={msg => msg} />
                            </StyledError>

                        </StyledParagraph>
                        <StyledParagraph>
                            <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
                            <StyledInput
                                id="email"
                                type="e-mail"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <StyledError>
                                <ErrorMessage name="email" render={msg => msg} />
                            </StyledError>
                        </StyledParagraph>
                        <StyledParagraph>
                            <StyledLabel>Message</StyledLabel>
                            <StyledInput
                                as="textarea"
                                type="text"
                                name="message"
                                id="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                            <StyledError>
                                <ErrorMessage name="message" render={msg => msg} />
                            </StyledError>
                        </StyledParagraph>
                        <StyledSuccess>{isSubmitting ? 'Message sent' : ''}</StyledSuccess>
                        <StyledButton
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Send message
                </StyledButton>
                    </StyledForm>
                )}
        </Formik>
    )
}

export default ContactForm;
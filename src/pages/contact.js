import React from "react"
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import { FlexColumn, BoxProperty, SecondaryBoxShadow, Button } from "../assets/styles/Mixins";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";
import firstLayoutImage from "../assets/images/layout_image_2.png";
import secondLayoutImage from "../assets/images/layout_image_3.png";

const Main = styled.main`
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1400px;
${FlexColumn}
align-items: center;
color: ${({ theme }) => theme.colors.thirdaryViolet};
position: relative;
/* overflow: hidden; */
    ::before{
        content: "";
        position: absolute;
        top: 20%;
        right: -40%;
        height: 100%;
        width: 100%;
        background-image: url(${firstLayoutImage});
        background-repeat: no-repeat;
        background-size: 70%;
        opacity: 0.4;
        z-index: -1;
    }
`;

const StyledHeader = styled.header`
margin: 2rem auto;
`;

const StyledForm = styled.form`
padding: 1rem 0;
width: 100%;
${FlexColumn}
${BoxProperty}
border-width: 2px;
position: relative;
overflow: hidden;
    ::before{
        content: "";
        position: absolute;
        top: 70%;
        right: -20%;
        height: 100%;
        width: 100%;
        background-image: url(${secondLayoutImage});
        background-repeat: no-repeat;
        background-size: 70%;
        opacity: 0.4;
        z-index: -1;
    }
`;

const StyledParagraph = styled.p`
margin: 0;
padding: 0 1rem 0;
${FlexColumn};
color: ${({ theme }) => theme.colors.thirdaryViolet};
:nth-child(3){
    margin-bottom: 2rem;
}
`;

const StyledInput = styled.input`
    display: block;
    padding: 0.2rem 0.4rem;
    border: 2px solid ${({ theme }) => theme.colors.primaryViolet};
    border-radius: 20px;
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
    margin: 1rem 0 0.8rem 0.5rem;
    display: block;
    font-size: 0.8rem;
    font-weight: bold;

`;

const StyledButton = styled.button`
${Button}
margin: 0 auto 1rem;
`;

const StyledError = styled.span`
    padding: 0.2rem;
    height: 1rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryRed};
`;

const ContactPage = () => {
    return (
        <Main>
            <StyledHeader>
                <Title>Hello Guest</Title>
                <Paragraph>If you looking Junior Front-end Developer to your work you can contact me with contact form.</Paragraph>
            </StyledHeader>
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
                    axios.post('https://us-central1-gatsby-introduction.cloudfunctions.net/sendEmail', values)
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
                                {}
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
                            <div>{isSubmitting ? 'message sent' : ''}</div>
                            <StyledButton
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Send message
                        </StyledButton>
                        </StyledForm>
                    )}
            </Formik>
        </Main>
    )
}

export default ContactPage;
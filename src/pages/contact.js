import React from "react"
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import Button from "../components/Button/Button";
import { FlexColumn, BoxProperty } from "../assets/styles/Mixins";

const Main = styled.main`
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1400px;
${FlexColumn}
align-items: center;
`;

const StyledForm = styled.form`
padding: 1rem 0;
width: 100%;
${FlexColumn}
/* align-items: center; */
${BoxProperty}
border-width: 2px;
`;

const StyledParagraph = styled.p`
margin: 0;
padding: 0 0.6rem 0;
${FlexColumn};
width: 100%;
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
    width: 100%;
`;

const StyledLabel = styled.label`
    margin: 2rem 0 0.8rem 0.5rem;
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
`;

const StyledButton = styled(Button)`
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
        < Main >
            <header>
                <h1>Hello Guest</h1>
                <p>If you looking Junior Front-end Developer to your work you can contact me with contact form.</p>
            </header>
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
        </Main >
    )
}

export default ContactPage;
import React from "react"
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import { FlexColumn, BoxProperty, SecondaryBoxShadow, BoxShadow } from "../assets/styles/Mixins";
import { Button } from "../components/Button/Button";
import firstLayoutImage from "../assets/images/layout_image_2.png";
import secondLayoutImage from "../assets/images/layout_image_3.png";
import MapConatiner from "../components/Location/Map";
import ContactInformation from "../components/ContactInformation/ContactInformation"

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
h1{
    font-size: 2.2rem;
}
p{
    padding: 0.2rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
}
`;

const StyledContainer = styled.div`
    @media (min-width: ${({ theme }) => theme.responsive.lg}) {
        align-self: center;
        display: grid;
        grid-template-columns: 350px 650px;
        grid-gap: 4rem;
    }
`;

const StyledForm = styled.form`
position: relative;
padding: 1rem 0;
height: 100%;
width: 100%;
${FlexColumn}
${BoxProperty}
border-width: 2px;
background-color: ${({ theme }) => theme.colors.secondaryWhite};
overflow:hidden;
    ::after{
        content: "";
        position: absolute;
        top: 75%;
        right: -40%;
        height: 200px;
        width: 100%;
        background-image: url(${secondLayoutImage});
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

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: 200px 350px;
    margin-top: 6rem;
    padding-bottom: 3rem;
    border-top-left-radius: 25px;
    border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
    border-bottom-left-radius: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
    ${BoxShadow}
    background: ${({ theme }) => theme.colors.secondaryWhite};
    @media (min-width: ${({ theme }) => theme.responsive.lg}) {
        grid-template-rows: 200px 450px;
        margin-top: 0;
        margin-left: 2rem;
    }
`;

const ContactPage = () => {
    return (
        <Main>
            <StyledHeader>
                <h1>Hello Guest</h1>
                <p>If you looking Junior Front-end Developer to your work you can contact me with contact form.</p>
            </StyledHeader>
            <StyledContainer>
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
                <StyledWrapper>
                    <ContactInformation />
                    <MapConatiner />
                </StyledWrapper>
            </StyledContainer>
        </Main>
    )
}

export default ContactPage;
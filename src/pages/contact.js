import React from "react"
import styled from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';
import Button from "../components/Button/Button";
import { FlexColumn } from "../assets/styles/Mixins";

const Main = styled.main`
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1400px;
${FlexColumn}
align-items: center;
`;


const StyledInput = styled.input`
    display: block;
    border: 2px solid black;
    background: none;
    font-size: 20px;
    height: ${({ as }) => as ? '200px' : 'auto'};
    width: ${({ as }) => as ? '300px' : '300px'};
    margin-bottom: ${({ as }) => as && '40px'};
`;

const StyledLabel = styled.label`
    margin: 30px 0 10px;
    display: block;
    font-size: 14px;
    font-weight: bold;
`;

const ContactButton = styled(Button)`
margin: 0 auto;
`;


const ContactPage = () => (
    <Main>
        <header>
            <h1>Hello Guest</h1>
            <p>If you looking Junior Front-end Developer to your work you can contact me with contact form.</p>
        </header>
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                axios.post('https://us-central1-gatsby-introduction.cloudfunctions.net/sendEmail', values)
                    .then((res) => {
                        console.log(res);
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
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                    <form onSubmit={handleSubmit}>
                        <StyledLabel htmlFor="name">Name</StyledLabel>
                        <StyledInput
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
                        <StyledInput
                            id="email"
                            type="e-mail"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
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
                        <ContactButton type="submit" disabled={isSubmitting}>send message</ContactButton>
                    </form>
                )}
        </Formik>
    </Main>
)

export default ContactPage;
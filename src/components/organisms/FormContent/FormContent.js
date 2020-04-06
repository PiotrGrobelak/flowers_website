import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import ContactForm from 'src/components/molecules/ContactForm/ContactForm';

const FormContent = () => {
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
   onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
    axios
     .post('https://us-central1-flowers-website-contact.cloudfunctions.net/sendEmail', values)
     .then(() => {
      setSubmitting(false);
      resetForm(values);
     })
     .catch(() => {
      setSubmitting(false);
     });
   }}
  >
   {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => (
    <ContactForm
     values={values}
     handleChange={handleChange}
     handleBlur={handleBlur}
     handleSubmit={handleSubmit}
     isSubmitting={isSubmitting}
    />
   )}
  </Formik>
 );
};

export default FormContent;

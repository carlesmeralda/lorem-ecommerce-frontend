import React from 'react'
import {
  AuthBackground,
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthFormLink,
  AuthIcon,
  AuthInput,
  AuthLabel,
  AuthLink,
  AuthText,
  AuthTitle,
  FieldContainer,
  FieldError,
} from './AuthForm.styled'
import { Formik } from 'formik'
import * as yup from 'yup'

const SignupSchema = yup.object().shape({
  name: yup.string().required('Sorry, this is required'),
  email: yup
    .string()
    .email('Invalid Email')
    .required('Sorry, this is required'),
  password: yup
    .string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Sorry, this is required'),
  confirmPassword: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  }),
})

function Signup() {
  const submitHandler = values => {
    alert(
      JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
  }

  return (
    <AuthBackground>
      <AuthLink to="/">
        <AuthIcon />
      </AuthLink>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={submitHandler}
        validateOnBlur
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <AuthForm onSubmit={handleSubmit}>
            <AuthContainer>
              <AuthTitle>Welcome to our App!</AuthTitle>
              <FieldContainer>
                <AuthLabel>Name</AuthLabel>
                <AuthInput
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.name && errors.name ? errors.name : ''}
                </FieldError>
              </FieldContainer>
              <FieldContainer>
                <AuthLabel>Email</AuthLabel>
                <AuthInput
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.email && errors.email ? errors.email : ''}
                </FieldError>
              </FieldContainer>
              <FieldContainer>
                <AuthLabel>Password</AuthLabel>
                <AuthInput
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.password && errors.password ? errors.password : ''}
                </FieldError>
              </FieldContainer>
              <FieldContainer>
                <AuthLabel>Confirm Password</AuthLabel>
                <AuthInput
                  type="password"
                  placeholder="Enter Password Again"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''}
                </FieldError>
              </FieldContainer>
              <AuthButton type="submit">Signup</AuthButton>
              <AuthText>
                Already have an account?
                <AuthFormLink to="/login">Login here</AuthFormLink>
              </AuthText>
            </AuthContainer>
          </AuthForm>
        )}
      </Formik>
    </AuthBackground>
  )
}

export default Signup

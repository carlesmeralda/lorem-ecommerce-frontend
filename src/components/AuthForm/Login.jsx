import React, { useState } from 'react'
import { useHistory } from 'react-router'
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
} from './AuthForm.styled'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { push } = useHistory()

  const emailHandler = e => setEmail(e.target.value)
  const passwordHandler = e => setPassword(e.target.value)

  const submitHandler = e => {
    e.preventDefault()

    alert(JSON.stringify({ email, password }))
    push('/')
  }

  return (
    <AuthBackground>
      <AuthLink to="/">
        <AuthIcon />
      </AuthLink>
      <AuthForm onSubmit={submitHandler}>
        <AuthContainer>
          <AuthTitle>Welcome to our App!</AuthTitle>
          <AuthLabel>Email</AuthLabel>
          <AuthInput
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={emailHandler}
          />
          <AuthLabel>Password</AuthLabel>
          <AuthInput
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={passwordHandler}
          />
          <AuthButton type="submit" primary>
            Login
          </AuthButton>
          <AuthText>
            Don't have an account?
            <AuthFormLink to="/signup">Signup here</AuthFormLink>
          </AuthText>
        </AuthContainer>
      </AuthForm>
    </AuthBackground>
  )
}

export default Login

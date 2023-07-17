import React from 'react'
import { LoginContainerStyled, LoginEmailStyled } from './RegisterStyles'
import { Link } from 'react-router-dom'
import LogoBranding from '../../assets/Logo.png'
import { Form, Formik } from 'formik'
import LoginInput from '../../components/UI/LoginInput/LoginInput'
import Submit from '../../components/UI/Submit/Submit'

const Register = () => {
  return (
    <LoginContainerStyled>
       <Link to= '/' >
        <img src={LogoBranding} alt="Logo-marca" />
      </Link>
      <h1>Crea tu cuenta</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Tu nombre'/>
          <LoginInput type= 'text' placeholder='Email' />
          <LoginInput type='password' placeholder='Password' />

          <LoginEmailStyled to='/'>
            <Submit type='submit'>Create una cuenta si es tu primera vez aqui</Submit>

          </LoginEmailStyled>

        </Form>
      </Formik>
    </LoginContainerStyled>
  )
}

export default Register
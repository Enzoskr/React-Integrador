import React from 'react'
import { InfoLogin, LoginContainer,Loginbtns } from './LoginStyles'
import Button from '../UI/Button/Button'

const Login = () => {
  return (
    <>
    <LoginContainer>
       <h2> Quieres ser parte de nuestra comunidad?</h2>
       
    <Loginbtns>
       <Button>Inicia Sesion</Button>
       <Button>Crea una Cuenta</Button>
    </Loginbtns>
    <InfoLogin>
    "¡Suscríbete y aprovecha ofertas exclusivas,
    descuentos del 10% y acceso temprano a prendas 
    de moda! Forma parte de nuestra comunidad y no te 
    pierdas lo último en ropa hype. ¡Suscríbete ahora!"
    </InfoLogin>

    </LoginContainer>
    </>
  )
}

export default Login
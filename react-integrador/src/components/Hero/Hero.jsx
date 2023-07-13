import React from 'react'
import { HeroContainer, HeroTagline } from './HeroStyles'
import PhotoBg from '../../assets/Patagloria.jpg'

export const Hero = () => {
  return (
    <HeroContainer img src={PhotoBg} alt="Patagloria" >
      
      <HeroTagline>
        Inspiración natural, estilo excepcional
        </HeroTagline>
        {/* Vistete con lo mejor */}
  </HeroContainer>
  )
}
// nos quedamos en 1:01:39
export default Hero
import React from 'react'
import { HeroContainer, HeroTagline, BackgroundHeroStyles } from './HeroStyles'
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

export default Hero
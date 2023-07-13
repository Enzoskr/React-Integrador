import styled from 'styled-components';
import Photologin from '../../assets/patagloria4k.jpg'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Photologin}); ;
  background-position: center;
  width: 100%;
  height: 100%;
  background-size: center;
  background-attachment: local;
  background-size: cover;
  @media (max-width: 768px){
    flex-direction:column;

  }
  h2{
    
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  color: var(--blanco);

  }
  `
  export const Loginbtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 150px auto; 
  padding: 40px;


    
    font-size: 30px;
    max-width: 1200px;
    text-align: center;
    @media (max-width: 768px){
      flex-direction: column;
      gap: 20px;
      button{
        
        margin: 0 auto;
        
      }
    }
  `
  export const InfoLogin = styled.span`
  background-color: rgba(255, 255, 255, 0.08); 
  border-radius: 10px;
  color: var(--Gris);
  font-size: 14px;
  margin-top: 20px;
  width: 50%;
  margin: 50px auto;


  
  `


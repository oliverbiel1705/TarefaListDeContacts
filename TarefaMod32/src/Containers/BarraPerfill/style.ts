import styled from 'styled-components';

export const UsuarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #6B5B95;
  color:#f4e1d2;
  height: 100vh;
  width: 40vw;
`

export const ImagemUsuario = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`

export const InfoUsuario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 60px;
  height: 15%;
  width: 80%;
`

export const NomeUsuario = styled.h3`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const ContactoUsuario = styled.p`
  font-size: 20px;
  color:#f4e1d2;
`

export const EmailUsuario = styled.p`
  font-size: 20px;
  color:#f4e1d2;
`




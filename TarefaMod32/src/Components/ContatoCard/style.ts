import styled from 'styled-components'
import variaveis from '../../styles/variaveis'


export const NomeContato = styled.p`
margin-bottom: 5px;
font-size: 20px;
color: #457B9D;
`

export const EmailContato = styled.p`
margin-bottom: 5px;
font-size: 20px;
color: #457B9D;
`

export const CardHeader = styled.div`
padding-top: 30px;
`

export const TelContato = styled.p`
margin-bottom: 5px;
font-size: 20px;
`

export const Botao = styled.button`
font-weight: bold;
font-size: 12px;
color: #fff;
height: 35px;
width: 70px;
border: none;
cursor: pointer;
background-color: #2f3640;
border-radius: 8px;
margin-left: 8px;
margin-bottom: 15px;
`

export const BotaoSalvar = styled(Botao)`
background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
background-color: ${variaveis.vermelho};
`

export const BotaoEditar = styled(Botao)`
background-color: ${variaveis.laranja};
`

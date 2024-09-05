import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Work Sans", sans-serif;
}
`
export const Container = styled.div`
display: flex;
`
export const Titulo = styled.h3`
text-align: center;
margin-top: 40px;
margin-bottom: 40px;
`
export const DescricaoContato = styled.textarea`
color: #8b8b8b;
font-size: 15px;
line-height: 24px;
display: block;
width: 95%;
margin-bottom: 16px;
margin-top: 20px;
resize: none;
background-color: transparent;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: 1px solid #CED4DA;
border-radius: 4px;
`

export const Card = styled.div`
display: column;
background-color: #ffffff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 16px;
padding-left: 30px;
width: 65vw;
margin-bottom: 20px;
`

export const BarraAcoes = styled.div`
display: flex;
padding-top: 16px;
`
export const InputContato = styled.input`
display: flex;
font-size: 16px;
border: none;
padding: 10px;
Width: 50%;
`

export const LabelContato = styled.label`
font-size: 20px;
font-weight: bold;

`

export default EstiloGlobal

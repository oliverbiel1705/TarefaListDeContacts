import * as S from "./style";
import { SetStateAction, useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import { DescricaoContato, Card, BarraAcoes, InputContato, LabelContato } from "../../styles/style";

type Props = {
  nome: string
  email: string
  tel: string
  descricao: string
  id: number
}

const ContatoCard = ({ nome, email, tel, descricao: descricaoOriginal, id}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [nomeState, setNomeState] = useState(nome)
  const [emailState, setEmailState] = useState(email)
  const [telState, setTelState] = useState(tel)

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
    setNomeState(nome)
    setEmailState(email)
    setTelState(tel)
  }

  return (
    <Card>
      <S.CardHeader>
        <LabelContato htmlFor="nome">Nome:</LabelContato>
        <InputContato disabled={!estaEditando} id="nome" value={nomeState} onChange={(evento: { target: { value: SetStateAction<string>; }; }) => setNomeState(evento.target.value)}/>
        <LabelContato htmlFor="email">Email:</LabelContato>
        <InputContato disabled={!estaEditando} id="email" value={emailState} onChange={(evento: { target: { value: SetStateAction<string>; }; }) => setEmailState(evento.target.value)}/>
        <LabelContato htmlFor="tel">Contato:</LabelContato>
        <InputContato disabled={!estaEditando} id="tel" value={telState} onChange={(evento: { target: { value: SetStateAction<string>; }; }) => setTelState(evento.target.value)}/>
      </S.CardHeader>
      <DescricaoContato disabled={!estaEditando} value={descricao} onChange={(evento) => setDescricao(evento.target.value)}/>
      <BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={() => {
              dispatch(editar({
                nome: nomeState,
                email: emailState,
                tel: telState,
                descricao,
                id
              })
            )
            setEstaEditando(false)
          }}
          >
            Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}
            >
              Cancelar</S.BotaoCancelarRemover>
          </>
          ) : (
            <>
              <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
            </>
          )}
      </BarraAcoes>
    </Card>
  )
}

export default ContatoCard

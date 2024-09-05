import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarContato } from "../../store/reducers/contatos";
import contato from "../../models/contato";
import { Titulo, DescricaoContato, Card, BarraAcoes, InputContato, LabelContato } from "../../styles/style";
import { BotaoSalvar, BotaoCancelarRemover } from "../../Components/ContatoCard/style";
import { AppDispatch } from "../../store";

const Formulario = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastrarContatoHandler = async (evento: FormEvent) => {
    evento.preventDefault();
    const contatoParaAdicionar = new contato(nome, email, tel, descricao, 9);

    try {
      const resultAction = await dispatch(cadastrarContato(contatoParaAdicionar));
      if (cadastrarContato.fulfilled.match(resultAction)) {
        alert('Contato adicionado com sucesso!');
        navigate("/");
      } else {
        console.error("Erro ao cadastrar contato:", resultAction.payload);
      }
    } catch (error) {
      console.error("Erro ao cadastrar contato:", error);
    }
  };

  return (
    <Card>
      <Titulo>Meus Contatos</Titulo>
      <LabelContato htmlFor="nome">Nome:</LabelContato>
      <InputContato value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" placeholder="Nome" />
      <LabelContato htmlFor="email">Email:</LabelContato>
      <InputContato value={email} onChange={(evento) => setEmail(evento.target.value)} type="email" placeholder="Email" />
      <LabelContato htmlFor="tel">Telefone:</LabelContato>
      <InputContato value={tel} onChange={(evento) => setTel(evento.target.value)} type="tel" placeholder="Telefone" />
      <DescricaoContato value={descricao} onChange={(evento) => setDescricao(evento.target.value)} placeholder="Descricao do Contato" />
      <BarraAcoes>
        <BotaoSalvar type="submit" onClick={(event) => cadastrarContatoHandler(event)} >Cadastrar</BotaoSalvar>
        <BotaoCancelarRemover type="button" onClick={() => navigate("/")}>Regressar</BotaoCancelarRemover>
      </BarraAcoes>
    </Card>
  );
};

export default Formulario;

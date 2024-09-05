
import ContatoCard from "../../Components/ContatoCard/main";
import { RootReducer } from "../../store";
import { Container } from "./style";
import { useSelector } from "react-redux";
import { Titulo } from "../../styles/style";



const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  return (
    <Container>
    <Titulo>Meus Contatos</Titulo>
      <ul>
        {itens.map((c) => (
        <li key={c.nome}>
          <ContatoCard descricao={c.descricao} nome={c.nome} email={c.email} tel={c.tel} id={c.id}/>
        </li>
        ))}
      </ul>
    </Container>
  )


}



export default ListaDeContatos;




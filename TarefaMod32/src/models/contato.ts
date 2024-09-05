class contato {
  nome: string
  email: string
  tel: string
  descricao: string
  id: number


  constructor(nome: string, email: string, tel: string, descricao: string, id: number) {
    this.nome = nome;
    this.email = email;
    this.tel = tel;
    this.descricao = descricao;
    this.id = id;
    }
}

export default contato

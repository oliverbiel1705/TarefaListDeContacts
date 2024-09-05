import * as S from "./style";

const BarraPerfil = () => {
  return (
    <S.UsuarioContainer>
      <S.ImagemUsuario src="../../../image/1000108778.jpg" alt="User" />
      <S.InfoUsuario>
        <S.NomeUsuario>Gabriel santos de oliveira</S.NomeUsuario>
        <S.ContactoUsuario>+55 11982264443</S.ContactoUsuario>
        <S.EmailUsuario> gabriel@gmail.com</S.EmailUsuario>
      </S.InfoUsuario>
    </S.UsuarioContainer>
  );
};

export default BarraPerfil;

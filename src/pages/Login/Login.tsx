import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { IUser } from "interfaces/IUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSetAuthUser from "state/hooks/useSetAuthUser";
import styled from "styled-components";
import Logo from "assets/Logo-Azul.svg";

interface PropsStyledForm {
  $width?: string;
}

export const StyledForm = styled.form<PropsStyledForm>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => ($width ? $width : "100%")};

  img{
    margin-bottom: 50px;
  }
`;

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("");
  const findUser = sessionStorage.getItem(`${email}`);
  const logged = useSetAuthUser();
  const navigate = useNavigate();

  const onSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let user: IUser;

    if (findUser) {
      user = JSON.parse(findUser);
      if (user.email === email && user.password === password) {
        setMessage(`Bem vindo ${user.name} :)`);
        logged(true);
        navigate('/pets')
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
    } else {
      setMessage(`usuario não encontrado ou senha incorreta`);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <StyledForm onSubmit={onSubmitLogin}>
      <StyledBodyLight />
      <img src={Logo} alt="Logo adopet" />

      <StyledParagraph color="#3772FF">
        Já tem conta? Faça seu login
      </StyledParagraph>

      <Input
        $width="552px"
        placeholder="Digite seu email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event)}
        type="email"
        name="email"
      />

      <Input
        $width="362px"
        placeholder="Digite sua Senha"
        label="Senha"
        value={password}
        onChange={(event) => setPassword(event)}
        type="password"
        name="password"
        minLength={6}
      />

      <Button type="submit">Entrar</Button>
      {message && (
        <StyledParagraph role="alert" color="green">
          {message}
        </StyledParagraph>
      )}
    </StyledForm>
  );
};

export default Login;

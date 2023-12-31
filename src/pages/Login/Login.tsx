import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { IUser } from "interfaces/IUser";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSetAuthUser from "state/hooks/useSetAuthUser";
import styled from "styled-components";
import Logo from "assets/Logo-Azul.svg";
import { btnColor, primaryColor } from "UI/Variables";

interface PropsStyledForm {
  $width?: string;
}

export const StyledForm = styled.form<PropsStyledForm>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => ($width ? $width : "100%")};

  img {
    margin-bottom: 50px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
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
        logged(true);
        navigate("/pets");
      }
    } else {
      setMessage(`Usuário não encontrado ou senha incorreta`);
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
        <StyledParagraph role="alert" color={btnColor}>
          {message}
        </StyledParagraph>
      )}
      <div>
        <StyledParagraph color={btnColor}>Não possui um cadastro?</StyledParagraph>
        <Link to={"/singup"}>
          <StyledParagraph color={primaryColor}>Cadastre-se</StyledParagraph>
        </Link>
      </div>
    </StyledForm>
  );
};

export default Login;

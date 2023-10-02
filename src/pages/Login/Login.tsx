import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useState } from "react";
import styled from "styled-components";

interface PropsStyledForm {
  $width?: string;
}

export const StyledForm = styled.form<PropsStyledForm>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => ($width ? $width : "100%")};
`;

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <StyledForm>
      <StyledBodyLight />
      <StyledParagraph color="#3772FF">
        Já tem conta? Faça seu login
      </StyledParagraph>

      <Input
        $width="552px"
        placeholder="Digite seu email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event)}
      />

      <Input
        $width="362px"
        placeholder="Digite sua Senha"
        label="Senha"
        value={password}
        onChange={(event) => setPassword(event)}
        type="password"
      />

      <Button type="submit">Entrar</Button>
    </StyledForm>
  );
};

export default Login;

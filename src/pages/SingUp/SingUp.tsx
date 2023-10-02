import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { StyledForm } from "pages/Login/Login";
import { useState } from "react";

const SingUp = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === confirmPassword) {
      console.log("Acesso Confirmado")
    } else {
      
    console.log("tente novamente")
    }
  }

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <StyledBodyLight />
      <StyledParagraph color="#3772FF">
        Ainda não tem cadastro? Então, antes de buscar seu melhor amigo,
        precisamos de alguns dados:
      </StyledParagraph>

      <Input
        $width="552px"
        placeholder="Digite seu nome"
        label="Nome"
        value={nome}
        onChange={(event) => setNome(event)}
      />

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

      <Input
        $width="362px"
        placeholder="Digite sua Senha"
        label="Confirmar Senha"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event)}
        type="password"
      />

      <Button type="submit">Cadastrar</Button>
    </StyledForm>
  );
};

export default SingUp;

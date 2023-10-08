import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { StyledForm } from "pages/Login/Login";
import { useState } from "react";
import useSetUser from "state/hooks/useSetUser";
import { v4 as uuidv4 } from "uuid";

const SingUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submitUser = useSetUser();

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasUser = sessionStorage.getItem(email);
    if (hasUser) {
      setError("Email já cadastrado");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    setError("");

    const newUser = {
      name: name,
      email: email,
      password: password,
      id: uuidv4(),
    };

    submitUser(newUser);
    sessionStorage.setItem(`${email}`, JSON.stringify(newUser));

    setMessage("Usuario cadastrado com sucesso");
    setTimeout(() => {
      setMessage("");
    }, 5000);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

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
        value={name}
        onChange={(event) => setName(event)}
        minLength={1}
      />

      <Input
        $width="552px"
        placeholder="Digite seu email"
        label="Email"
        type="email"
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
        minLength={6}
      />

      <Input
        $width="362px"
        placeholder="Digite sua Senha"
        label="Confirmar Senha"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event)}
        type="password"
        minLength={6}
      />

      {error && (
        <StyledParagraph role="alert" color="red">
          {error}
        </StyledParagraph>
      )}
      <Button type="submit">Cadastrar</Button>
      {message && (
        <StyledParagraph role="alert" color="green">
          {message}
        </StyledParagraph>
      )}
    </StyledForm>
  );
};

export default SingUp;

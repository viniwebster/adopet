import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Logo from "assets/Logo-Azul.svg";
import { StyledForm } from "pages/Login/Login";
import { useState } from "react";
import useSetUser from "state/hooks/useSetUser";
import { btnColor, primaryColor } from "UI/Variables";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "http/http";

const SingUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("")
    },
  });

  const submitUser = useSetUser();

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
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
      password: password
    };

    mutation.mutate(newUser)
    
    setMessage("Usuario cadastrado com sucesso");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <StyledBodyLight />
      <img src={Logo} alt="Logo adopet" />
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
        placeholder="Confirme sua Senha"
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
        <StyledParagraph role="alert" color={primaryColor}>
          {message}
        </StyledParagraph>
      )}
      <div>
        <StyledParagraph color={btnColor}>
          Já possui um cadastro?
        </StyledParagraph>
        <Link to={"/login"}>
          <StyledParagraph color={primaryColor}>Login</StyledParagraph>
        </Link>
      </div>
    </StyledForm>
  );
};

export default SingUp;

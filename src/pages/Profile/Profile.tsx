import { StyledBodyLight, StyledBox, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { StyledForm } from "pages/Login/Login";
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [about, setAbout] = useState("");

  return (
    <>
      <StyledParagraph color="#3772FF">
      Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
      </StyledParagraph>
      <StyledBox>
        <h2>Perfil</h2>
        <StyledBodyLight />
        <StyledForm>
          <Input
            type="text"
            placeholder="Insira seu nome completo"
            label="Nome"
            value={name}
            onChange={(event) => setName(event)}
            $positionPlaceholder="start"
            $background="white"
          />
          <Input
            type="text"
            placeholder="Insira seu telefone/ ou WhatsApp"
            label="Telefone"
            value={phone}
            onChange={(event) => setPhone(event)}
            $positionPlaceholder="start"
            $background="white"
          />
          <Input
            type="text"
            placeholder="Qual a sua cidade?"
            label="Cidade"
            value={city}
            onChange={(event) => setCity(event)}
            $positionPlaceholder="start"
            $background="white"
          />
          <Input
            type="message"
            placeholder="Escreva sobre você"
            label="Sobre"
            value={about}
            onChange={(event) => setAbout(event)}
            $height="172px"
            $positionPlaceholder="start"
            $background="white"
          />
          <Button type="submit"> Salvar </Button>
        </StyledForm>
      </StyledBox>
    </>
  );
};

export default Profile;

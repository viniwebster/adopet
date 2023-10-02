import { StyledBodyLight, StyledBox, StyledParagraph } from "UI/GlobalStyles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { StyledForm } from "pages/Login/Login";
import { useState } from "react";

const Message = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [petName, setPetName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <StyledParagraph color="#3772FF">
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
      </StyledParagraph>
      <StyledBox>
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
            placeholder="Por qual animal você se interessou?"
            label="Nome do animal"
            value={petName}
            onChange={(event) => setPetName(event)}
            $positionPlaceholder="start"
            $background="white"
          />
          <Input
            type="message"
            placeholder="Escreva sua mensagem"
            label="Mensagem"
            value={message}
            onChange={(event) => setMessage(event)}
            $height="172px"
            $positionPlaceholder="start"
            $background="white"
          />
          <Button type="submit">Enviar</Button>
        </StyledForm>
      </StyledBox>
    </>
  );
};

export default Message;

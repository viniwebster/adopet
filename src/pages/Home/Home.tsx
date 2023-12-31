import styled from "styled-components";
import Button from "components/Button/Button";
import { StyledParagraph } from "UI/GlobalStyles";
import { Link } from "react-router-dom";
import useAuthUser from "state/hooks/useAuthUser";
import Pets from "pages/Pets/Pets";
import Logo from "assets/Logo.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  max-width: 344px;
  height: 100%;
  margin: auto;

  a {
    width: 100%;
  }

  img {
    width: 300px;
    margin-bottom: 16px;
  }

`;

const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
`;

const Home = () => {
  const isLogged = useAuthUser();

  if (isLogged) {
    return <Pets />
  }

  return (
    <StyledSection>
      <img src={Logo} alt="Logo adopet" />
      <StyledTitle> Boas-Vindas </StyledTitle>
      <StyledParagraph>
        Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
        Vem com a gente!
      </StyledParagraph>
      <Link to={"/login"}>
        <Button large>Já tenho conta</Button>
      </Link>
      <Link to={"/singup"}>
        <Button large>Quero me cadastrar</Button>
      </Link>
    </StyledSection>
  );
};

export default Home;

import Logo from "assets/Logo.svg";
import IconHome from "assets/icons/Casa.svg";
import IconMessage from "assets/icons/Mensagens.svg";
import IconLogin from "assets/icons/Usuário.svg";
import styled from "styled-components";
import { memo } from "react";
import { Link } from "react-router-dom";
import useAuthUser from "state/hooks/useAuthUser";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 1440px;
  margin: auto;
  padding: 64px 2rem 0 2rem;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const Header = () => {
  const isLogged = useAuthUser();

  return (
    <StyledHeader>
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="imagem logo" />
        </Link>
        <Link to={"/"}>
          <img src={IconHome} />
        </Link>
        <Link to={"/message"}>
          <img src={IconMessage} />
        </Link>
      </div>
      {isLogged && (
        <Link to={"/profile"}>
          <img src={IconLogin} />
        </Link>
      )}
    </StyledHeader>
  );
};

export default memo(Header);

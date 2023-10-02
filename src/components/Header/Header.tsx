import Logo from "assets/icons/Logo.svg";
import IconHome from "assets/icons/Casa.svg";
import IconMessage from "assets/icons/Mensagens.svg";
import styled from "styled-components";
import { memo } from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  max-width: 1440px;
  margin: auto;
  padding: 64px 2rem 0 2rem;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>
        <img src={Logo} alt="imagem logo" />
      </Link>
      <Link to={"/"}>
        <img src={IconHome} />
      </Link>
      <Link to={"/message"}>
      <img src={IconMessage} />
      </Link>
    </StyledHeader>
  );
};

export default memo(Header);

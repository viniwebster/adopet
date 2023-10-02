import { primaryColor } from "UI/Variables";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 80px;
  width: 100vw;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return(
    <StyledFooter>
      Desenvolvido por 
      Vinicius Webster
    </StyledFooter>
  )
}

export default Footer
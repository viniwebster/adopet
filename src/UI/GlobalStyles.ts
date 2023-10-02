import styled, { createGlobalStyle } from "styled-components";
import { colorText, largeFont, primaryFont, secundaryColor } from "./Variables";
import background from "assets/img-background/Forma-1.png";
import backgroundRight from "assets/img-background/Forma-2.png";
import pets from "assets/Ilustração.svg";
import patas from "assets/img-background/patas.svg";

export const GlobalStyles = createGlobalStyle`
    * { 
        box-sizing: border-box;
        font-family: ${primaryFont};
        color: ${colorText};
    }

    body {
        min-height: 100vh;
        background: no-repeat left top/40% url(${background}),
        no-repeat right/8% url(${backgroundRight}),
        no-repeat bottom center/20% url(${pets});
        background-color: ${secundaryColor};

        @media screen and (max-width: 450px) {
            background: no-repeat left top/100% url(${background}),
            no-repeat right/30% url(${backgroundRight});
            background-color: ${secundaryColor};
        }
    }
`;

export const StyledBodyLight = createGlobalStyle`
  body{
    background-color: white;
    background: no-repeat right top/15% url(${patas}),
    no-repeat left top/40% url(${background}),
    no-repeat right/8% url(${backgroundRight});

    
  @media screen and (max-width: 450px) {
    background: no-repeat right top/30% url(${patas}),
    no-repeat left top/100% url(${background}),
    no-repeat right/30% url(${backgroundRight});
  }
  }
`;


export const Container = styled.main`
  width: 1440px;
  min-height: calc(100vh - 95px);
  max-width: 100vw;
  padding: 6rem 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  font-size: ${largeFont};
  line-height: 26px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "white")};
`;

export const StyledBox = styled.div`
  max-width: 552px;
  width: 100%;
  min-height: 623px; 
  background-color: #f6f6f6;
  border-radius: 6px;
  padding: 40px 30px;
  margin-top: 32px;
`
import {
  colorTextDark,
  secundaryColor,
  smallFont,
} from "UI/Variables";
import styled from "styled-components";
import iconMsg from "assets/icons/iconMsg.svg";

const StyledCard = styled.div`
  width: 363px;
  height: 196px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 33px 16px 24px;
  gap: 1rem;

  @media screen and (max-width: 880px) {
    width: 344px;
    height: 196px;
    padding: 16px 16px 24px 16px;
  }

  @media screen and (max-width: 450px) {
    width: 360px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h2 {
    color: ${secundaryColor};
    font-weight: 600;
    margin-bottom: 10px;
  }

  ul li {
    color: ${colorTextDark};
    font-size: ${smallFont};
    margin-bottom: 6px;
  }

  p {
    color: ${colorTextDark};
    font-size: 12px;
  }
`;

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  gap: 8.5px;
  margin-top: 8px;
  a {
    color: ${colorTextDark};
    font-size: 10px;
    text-decoration: none;
  }
`

const Card = ({ age, characteristics, img, location, name, size }: IPets) => {
  return (
    <StyledCard>
      <img src={img} alt={name} />
      <StyledDiv>
        <ul>
          <h2>{name}</h2>
          <li>{age}</li>
          <li>{size}</li>
          <li>{characteristics}</li>
        </ul>
        <div>
          <p>{location}</p>
          <StyledContact>
            <img src={iconMsg} alt="icone mensagem" />
            <a href="#">Falar com responsável</a>
          </StyledContact>
        </div>
      </StyledDiv>
    </StyledCard>
  );
};

export default Card;

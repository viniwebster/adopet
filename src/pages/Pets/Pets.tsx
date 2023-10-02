import { StyledBodyLight, StyledParagraph } from "UI/GlobalStyles";
import styled from "styled-components";
import data from "./data.json";
import Card from "components/Card/Card";

const StyledCardsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;

  margin-top: 32px;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Pets = () => {
  return (
    <section>
      <StyledBodyLight />
      <StyledParagraph color="#3772FF">
        Olá! Veja os amigos disponíveis para adoção!
      </StyledParagraph>
      <StyledCardsContainer>
        {data.map((pet) => (
          <li key={pet.id}>
            <Card
              age={pet.age}
              characteristics={pet.characteristics}
              img={pet.img}
              location={pet.location}
              name={pet.name}
              size={pet.size}
              id={pet.id}
            />
          </li>
        ))}
      </StyledCardsContainer>
    </section>
  );
};

export default Pets;

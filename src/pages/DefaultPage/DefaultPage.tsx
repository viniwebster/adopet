import { Container } from "UI/GlobalStyles";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default DefaultPage;

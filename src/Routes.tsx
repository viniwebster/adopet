import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./UI/GlobalStyles";
import DefaultPage from "pages/DefaultPage/DefaultPage";
import Footer from "components/Footer/Footer";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import SingUp from "pages/SingUp/SingUp";
import Header from "components/Header/Header";
import Pets from "pages/Pets/Pets";
import Message from "pages/Message/Message";
import Profile from "pages/Profile/Profile";
import { RecoilRoot } from "recoil";
import LoginAuth from "LoginAuth/LoginAuth";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/pets" element={<Pets />} />
            <Route
              path="/message"
              element={
                <LoginAuth>
                  <Message />
                </LoginAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <LoginAuth>
                  <Profile />
                </LoginAuth>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

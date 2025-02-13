import React from "react";
import { Routes, Route } from "react-router-dom"; // Removido BrowserRouter daqui
import Home from "./pages/home";
import RegisterDoador from "./pages/register-doador";
import RegisterOrganizacao from "./pages/register-organizacao";
import Login from "./pages/login";
import Campanhas from "./pages/campanhas";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerDoador" element={<RegisterDoador />} />
        <Route path="/registerOrganizacao" element={<RegisterOrganizacao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campanhas" element={<Campanhas />} />
      </Routes>
    </>
  );
};

export default App;

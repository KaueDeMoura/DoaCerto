import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/header.css";
import Logo from "../img/logo-doa-certo.png"

const Header = () => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <nav className="nav-links">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/campanhas")}>Campanhas</a>
        <a onClick={() => navigate("/sobre")}>Sobre</a>
      </nav>
      <div className="auth-buttons">
        <div className="dropdown">
          <button className="login-btn">
            Registrar-se
          </button>
          <div className="dropdown-options">
            <button onClick={() => navigate("/registerDoador")}>Doador</button>
            <button onClick={() => navigate("/registerOrganizacao")}>Organização</button>
          </div>
        </div>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

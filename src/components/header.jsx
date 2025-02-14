import React from "react";

import { useNavigate } from "react-router-dom";
import styles from "../style/header.module.css";
import Logo from "../img/logo-doa-certo.png"


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <nav className={styles.navLinks}>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/campanhas")}>Campanhas</a>
        <a onClick={() => navigate("/sobre")}>Sobre</a>
      </nav>
      <div className={styles.authButtons}>
     <div className={styles.dropdown}>
          <button className={styles.loginBtn}>
            Registrar-se
          </button>
          <div className={styles.dropdownOptions}>
            <button className={styles.btnAuth} onClick={() => navigate("/registerDoador")}>Doador</button>
            <button className={styles.btnAuth} onClick={() => navigate("/registerOrganizacao")}>Organização</button>
          </div>
        </div>
        <button className={styles.loginBtn} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

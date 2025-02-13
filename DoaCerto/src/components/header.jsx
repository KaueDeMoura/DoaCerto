import React from "react";

const header = () => {
  return (
    <>
      <header class="header">
        <img src="img/logo-doa-certo.png" alt="Logo" class="logo" />
        <nav class="nav-links">
          <a href="/home.html">Home</a>
          <a href="">Sobre</a>
          <a href="/campanhas.html">Campanhas</a>
        </nav>
        <div class="auth-buttons">
          <div class="auth-buttons">
            <div class="dropdown">
              <button class="login-btn">
                Registrar-se <img src="img/menu-down.svg" height="18px" />
              </button>
              <div class="dropdown-options">
                <a href="/register-doador.html">Doador</a>
                <a href="/register-organizacao.html">Organização</a>
              </div>
            </div>
            <button class="login-btn">
              <a class="btn-login" href="/login.html">
                Login
              </a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;

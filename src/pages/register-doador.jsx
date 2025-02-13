import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/register-doador.css";

const RegisterDoador = () => {
  return (
    <>
      <div className="body"body>
        <div className="page-central">
          <div className="background-header">
            <h1>
              <b>Registre-se como</b> Doador
            </h1>
          </div>
          <div className="form">
            <div className="form-container">
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nome Completo</label>
                    <input type="text" placeholder="Nome Completo" />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <div className="form-group">
                    <label>Número de Telefone</label>
                    <input type="tel" placeholder="Número" />
                  </div>
                </div>
                <div className="submit-container">
                  <button type="submit" className="submit-btn">
                    Finalizar
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDoador;

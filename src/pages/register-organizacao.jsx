import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/register-organizacao.css";

const registerOrganizacao = () => {
  return (
    <>
      <div>
        <div className="page-central">
          <div className="background-header">
            <h1>
              <b>Resgistre-se como</b> Organização
            </h1>
          </div>
          <div className="form">
            <div className="form-container">
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nome da Organização</label>
                    <input type="text" placeholder="Nome da Organização" />
                  </div>
                  <div className="form-group">
                    <label>CEP</label>
                    <input type="text" placeholder="00000-000" />
                  </div>
                  <div className="form-group">
                    <label>CNPJ</label>
                    <input type="text" placeholder="00.000.000/0000-00" />
                  </div>
                  <div className="form-group">
                    <label>Estado</label>
                    <input type="text" placeholder="Estado" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label>Cidade</label>
                    <input type="text" placeholder="Cidade" />
                  </div>
                  <div className="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <div className="form-group">
                    <label>Complemento</label>
                    <input type="text" placeholder="Complemento" />
                  </div>
                  <div className="form-group">
                    <label>Número de Telefone</label>
                    <input type="tel" placeholder="Número" />
                  </div>
                  <div className="form-group">
                    <label>Horário de Funcionamento</label>
                    <div className="time-group">
                      <input type="time" className="time-input" />
                      <span>às</span>
                      <input type="time" className="time-input" />
                      <p>-</p>
                      <input type="time" className="time-input" />
                      <span>às</span>
                      <input type="time" className="time-input" />
                    </div>
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
                      stroke-width="2"
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

export default registerOrganizacao;

import React from "react";
import "../style/register-organizacao.css";

const registerOrganizacao = () => {
  return (
    <>
      <body>

        <div class="page-central">
          <div class="background-header">
            <h1>
              <b>Resgistre-se como</b> Organização
            </h1>
          </div>
          <div class="form">
            <div class="form-container">
              <form>
                <div class="form-grid">
                  <div class="form-group">
                    <label>Nome da Organização</label>
                    <input type="text" placeholder="Nome da Organização" />
                  </div>
                  <div class="form-group">
                    <label>CEP</label>
                    <input type="text" placeholder="00000-000" />
                  </div>
                  <div class="form-group">
                    <label>CNPJ</label>
                    <input type="text" placeholder="00.000.000/0000-00" />
                  </div>
                  <div class="form-group">
                    <label>Estado</label>
                    <input type="text" placeholder="Estado" />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <label>Cidade</label>
                    <input type="text" placeholder="Cidade" />
                  </div>
                  <div class="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <div class="form-group">
                    <label>Complemento</label>
                    <input type="text" placeholder="Complemento" />
                  </div>
                  <div class="form-group">
                    <label>Número de Telefone</label>
                    <input type="tel" placeholder="Número" />
                  </div>
                  <div class="form-group">
                    <label>Horário de Funcionamento</label>
                    <div class="time-group">
                      <input type="time" class="time-input" />
                      <span>às</span>
                      <input type="time" class="time-input" />
                      <p>-</p>
                      <input type="time" class="time-input" />
                      <span>às</span>
                      <input type="time" class="time-input" />
                    </div>
                  </div>
                </div>
                <div class="submit-container">
                  <button type="submit" class="submit-btn">
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
      </body>
    </>
  );
};

export default registerOrganizacao;

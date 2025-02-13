import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/register-doador.css";

const login = () => {
  return (
    <>
      <div>
        <div className="page-central">
          <div className="background-header">
            <h1>
              <b>Login</b>
            </h1>
          </div>
          <div className="form">
            <div className="form-container">
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha"></input>
                  </div>
                </div>
                <div className="submit-container">
                  <button type="submit" className="submit-btn">
                    Login
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

export default login;

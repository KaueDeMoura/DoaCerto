import React from "react";
import styles from "../style/register-organizacao.module.css";

const registerOrganizacao = () => {
  return (
    <>
      <title>DoaCerto - Registro</title>
      <div>
        <div className={styles.pageCentral}>
          <div className={styles.backgroundHeader}>
            <h1>
              <b>Resgistre-se como</b> Organização
            </h1>
          </div>
          <div className={styles.form}>
            <div className={styles.formContainer}>
              <form>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Nome da Organização</label>
                    <input type="text" placeholder="Nome da Organização" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>CEP</label>
                    <input type="text" placeholder="00000-000" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>CNPJ</label>
                    <input type="text" placeholder="00.000.000/0000-00" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Estado</label>
                    <input type="text" placeholder="Estado" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Cidade</label>
                    <input type="text" placeholder="Cidade" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Complemento</label>
                    <input type="text" placeholder="Complemento" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Número de Telefone</label>
                    <input type="tel" placeholder="Número" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Horário de Funcionamento</label>
                    <div className="timeGroup">
                      <input type="time" className={styles.timeInput} />
                      <span>às</span>
                      <input type="time" className={styles.timeInput} />
                      <p>-</p>
                      <input type="time" className={styles.timeInput} />
                      <span>às</span>
                      <input type="time" className={styles.timeInput} />
                    </div>
                  </div>
                </div>
                <div className={styles.submitContainer}>
                  <button type="submit" className={styles.submitBtn}>
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

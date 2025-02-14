import React from "react";
import styles from "../style/register-doador.module.css";

const RegisterDoador = () => {
  return (
    <>
    <title>DoaCerto - Registro</title>
      <div>
        <div className={styles.pageCentral}>
          <div className={styles.backgroundHeader}>
            <h1>
              <b>Registre-se como</b> Doador
            </h1>
          </div>
          <div className={styles.form}>
            <div className={styles.formContainer}>
              <form>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Nome Completo</label>
                    <input type="text" placeholder="Nome Completo" />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Número de Telefone</label>
                    <input type="tel" placeholder="Número" />
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

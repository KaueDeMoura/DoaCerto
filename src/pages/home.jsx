import React from "react";
import styles from "../style/home.module.css";

const Home = () => {
  return (
    <>
    <title>DoaCerto - Home</title>
      <div>
        <img
          src="../img/Ellipse.svg"
          alt=""
          width="39%"
          style={{ position: "absolute", zIndex: 1 }}
        />
        <div className={styles.text}>
          <h1 style={{ marginRight: "50px" }}>Salve Vidas</h1>
          <h1>Doe Alimento</h1>
          <p>
            O Doe Certo é um site voltado para a doação de alimentos não
            perecíveis,
          </p>
          <p>
            com o objetivo de conectar pessoas e empresas dispostas a doar com
            aqueles que mais precisam.
          </p>
          <p>
            A plataforma permite que estabelecimentos e indivíduos possam
            cadastrar suas doações,
          </p>
          <p>
            enquanto entidades beneficentes fazem a gestão e distribuição dos
            alimentos para comunidades carentes.
          </p>
          <button className={styles.buttonText}>Doe Agora!</button>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import styles from "../style/campanhas.module.css";

const campanhas = () => {
  return (
    <>
    <title>DoaCerto - Campanhas</title>
      <div>
        <div className={styles.pageCentral}>
          <div className={styles.backgroundHeader}>
            <h1>Campanhas</h1>
          </div>
          <div className={styles.campaigns}>
            <div className={styles.campaignsCntainer}>
              <div className={styles.campaignsGrid}>
                <div className={styles.campaignsGroup}>
                  <label>Excavação de Dinossauros</label>
                  <img
                    src="/img/img-campanha1.jpg"
                    alt="Imagem da campanha 1"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className={styles.campaignsGrid}>
                <div className={styles.campaignsGroup}>
                  <label>Excavação de Dinossauros</label>
                  <img
                    src="/img/img-campanha1.jpg"
                    alt="Imagem da campanha 3"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className={styles.campaignsGrid}>
                <div className={styles.campaignsGroup}>
                  <label>Excavação de Dinossauros</label>
                  <img
                    src="/img/img-campanha1.jpg"
                    alt="Imagem da campanha 6"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className={styles.campaignsGrid}>
                <div className={styles.campaignsGroup}>
                  <label>Robux para Crianças Carentes</label>
                  <img
                    src="https://www.biancogres.com.br/media/9746/conversions/porcelanato-biancogres-persian-grigio-1-thumb_480p.jpg"
                    alt="Imagem da campanha 2"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className={styles.campaignsGrid}>
                <div className={styles.campaignsGroup}>
                  <label>Robux para Crianças Carentes</label>
                  <img
                    src="https://www.biancogres.com.br/media/9746/conversions/porcelanato-biancogres-persian-grigio-1-thumb_480p.jpg"
                    alt="Imagem da campanha 2"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className={styles.campaignsGrid}>
                <div className={styles.campaignsGroup}>
                  <label>Robux para Crianças Carentes</label>
                  <img
                    src="https://www.biancogres.com.br/media/9746/conversions/porcelanato-biancogres-persian-grigio-1-thumb_480p.jpg"
                    alt="Imagem da campanha 2"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default campanhas;

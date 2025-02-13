import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/campanhas.css";

const campanhas = () => {
  return (
    <>
      <div className="body">
        <div className="page-central">
          <div className="background-header">
            <h1>Campanhas</h1>
          </div>
          <div className="campaigns">
            <div className="campaigns-container">
              <div className="campaigns-grid">
                <div className="campaigns-group">
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
              <div className="campaigns-grid">
                <div className="campaigns-group">
                  <label>Robux para Crianças Carentes</label>
                  <img
                    src="/img/img-campanha2.jpg"
                    alt="Imagem da campanha 2"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className="campaigns-grid">
                <div className="campaigns-group">
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
              <div className="campaigns-grid">
                <div className="campaigns-group">
                  <label>Robux para Crianças Carentes</label>
                  <img
                    src="/img/img-campanha2.jpg"
                    alt="Imagem da campanha 2"
                  ></img>
                  <p>Contato: (47) 99987-4580</p>
                  <p>Horario de funcionamento</p>
                  <p>08:30 às 12:00</p>
                  <p>13:30 às 17:00</p>
                </div>
              </div>
              <div className="campaigns-grid">
                <div className="campaigns-group">
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
              <div className="campaigns-grid">
                <div className="campaigns-group">
                  <label>Robux para Crianças Carentes</label>
                  <img
                    src="/img/img-campanha2.jpg"
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

import React from 'react';
import Styles from './assets/css/App.module.css';

export default function App() {
  return (
    <>
      <div className={Styles.container}>
        <label className={Styles.title}>Minha conta de luz</label>

        <form action="">
          <div className={Styles.dados}>
            <div className={Styles.inputs}>
              <label htmlFor="consumomedio">Consumo médio em kWh/mês</label>
              <div>
                <input
                  id="consumomedio"
                  name="consumomedio"
                  type="number"
                  placeholder="0 kW"
                  required
                  min="0"
                />
              </div>

              <label htmlFor="tusd">Valor de consumo TUSD</label>
              <div>
                <input
                  id="tusd"
                  name="tusd"
                  type="text"
                  placeholder="R$ 0,00000000"
                  required
                />
              </div>

              <label htmlFor="ipublica">Valor iluminação publica</label>
              <div>
                <input
                  id="ipublica"
                  name="ipublica"
                  type="text"
                  placeholder="R$ 0,00"
                  required
                />
              </div>

              <label htmlFor="pis">PIS em %</label>
              <div>
                <input
                  id="pis"
                  name="pis"
                  type="text"
                  placeholder="0%"
                  required
                />
              </div>
            </div>

            <div className={Styles.inputs}>
              <label htmlFor="vbandeira">Valor da bandeira por 1 kW</label>
              <div>
                <input
                  id="vbandeira"
                  name="vbandeira"
                  type="text"
                  placeholder="R$ 0,00"
                  required
                />
              </div>

              <label htmlFor="te">Valor de consumo TE</label>
              <div>
                <input
                  id="te"
                  name="te"
                  type="text"
                  placeholder="R$ 0,00000000"
                  required
                />
              </div>

              <label htmlFor="icms">ICMS em %</label>
              <div>
                <input
                  id="icms"
                  name="icms"
                  type="text"
                  placeholder="0%"
                  required
                />
              </div>

              <label htmlFor="cofins">COFINS em %</label>
              <div>
                <input
                  id="cofins"
                  name="cofins"
                  type="text"
                  placeholder="0%"
                  required
                />
              </div>
            </div>
          </div>
          <button className={Styles.button}>Calcular</button>
        </form>
        <div className={Styles.footer}>
          Desenvolvido por:
          <a href="https://www.linkedin.com/in/natanarau/" target="_blanck">
            Natã Araújo
          </a>
        </div>
      </div>
    </>
  );
}

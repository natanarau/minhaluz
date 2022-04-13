import React from 'react';
import Styles from './assets/css/App.module.css';
import Valores from './Componets/Valores';
import {
  maskValorc,
  maskReal,
  maskBandeira,
  maskPorcento,
} from '../src/Hooks/Mask';

export default function App() {
  const [consumo, setConsumo] = React.useState('');
  const [tusd, setTusd] = React.useState('');
  const [ipublica, setIpublica] = React.useState('');
  const [pis, setPis] = React.useState('');
  const [vbandeira, setVbandeira] = React.useState('');
  const [te, setTe] = React.useState('');
  const [icms, setIcms] = React.useState('');
  const [cofins, setCofins] = React.useState('');
  const [total, setTotal] = React.useState('');

  const valorTusd = tusd.replace(',', '.') * consumo;
  const valorTe = te.replace(',', '.') * consumo;
  const valorConsumo = valorTusd + valorTe;
  const valorBandeira = vbandeira.replace(',', '.') * consumo;
  const valorceb = valorConsumo + valorBandeira;
  const valorIcms = (valorceb / 100) * icms;
  const valorSemIcms = valorceb - valorIcms;
  const valorPis = (valorSemIcms / 100) * pis;
  const valorCofins = (valorSemIcms / 100) * cofins;
  const imposto = valorPis + valorCofins;
  const valorcebei = valorceb + parseFloat(ipublica.replace(',', '.'));
  const totalDaFatura = valorcebei + imposto;

  const handleclick = (e) => {
    e.preventDefault();
    setTotal(totalDaFatura);
  };

  const handlezero = () => {
    setConsumo('');
    setTusd('');
    setIpublica('');
    setPis('');
    setVbandeira('');
    setTe('');
    setIcms('');
    setCofins('');
    setTotal('');
  };

  return (
    <>
      <div className={Styles.container}>
        <label className={Styles.title}>Minha Energia</label>
        <p>
          Insira os dados da sua conta de energia abaixo e compare o quanto o
          sistema de energia solar favorece.
        </p>

        <form onSubmit={handleclick}>
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
                  value={consumo}
                  onChange={(e) => setConsumo(e.target.value)}
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
                  value={tusd}
                  onChange={(e) => setTusd(maskValorc(e.target.value))}
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
                  value={ipublica}
                  onChange={(e) => setIpublica(maskReal(e.target.value))}
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
                  value={pis}
                  onChange={(e) => setPis(maskPorcento(e.target.value))}
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
                  placeholder="R$ 0,0000"
                  required
                  value={vbandeira}
                  onChange={(e) => setVbandeira(maskBandeira(e.target.value))}
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
                  value={te}
                  onChange={(e) => setTe(maskValorc(e.target.value))}
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
                  value={icms}
                  onChange={(e) => setIcms(maskPorcento(e.target.value))}
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
                  value={cofins}
                  onChange={(e) => setCofins(maskPorcento(e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className={Styles.buttonGrup}>
            <button className={Styles.button}>Calcular</button>
            {total && (
              <input
                type="reset"
                onClick={handlezero}
                className={Styles.button}
                value="Zerar"
              />
            )}
          </div>
        </form>
        {total && (
          <Valores
            valorTusd={valorTusd}
            valorTe={valorTe}
            valorBandeira={valorBandeira}
            valorIcms={valorIcms}
            valorPis={valorPis}
            valorCofins={valorCofins}
            total={total}
          />
        )}
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

import React from 'react';
import Styles from './assets/css/App.module.css';

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

  const handleclick = (e) => {
    e.preventDefault();
    const valorTusd = tusd * consumo;
    const valorTe = te * consumo;
    const valorConsumo = valorTusd + valorTe;
    const valorBandeira = vbandeira * consumo;
    const valorceb = valorConsumo + valorBandeira;
    const valorIcms = (valorceb / 100) * icms;
    const valorSemIcms = valorceb - valorIcms;
    const valorPis = (valorSemIcms / 100) * pis;
    const valorCofins = (valorSemIcms / 100) * cofins;
    const imposto = valorPis + valorCofins;
    const valorcebei = valorceb + parseFloat(ipublica);
    const totalDaFatura = valorcebei + imposto;
    console.log('valor tusd: ' + valorTusd);
    console.log('valor te: ' + valorTe);
    console.log('valor Bandeira: ' + valorBandeira);
    console.log('valor Consumo mais bandeira: ' + valorceb);
    console.log('valor icms: ' + valorIcms);
    console.log('valor cofins: ' + valorSemIcms);
    console.log('valor pis: ' + valorPis);
    console.log('valor cofins: ' + valorCofins);
    console.log('Total da Fatura: ' + totalDaFatura);

    setTotal(totalDaFatura);
  };

  return (
    <>
      <div className={Styles.container}>
        <label className={Styles.title}>Minha conta de luz</label>

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
                  onChange={(e) => setTusd(e.target.value)}
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
                  onChange={(e) => setIpublica(e.target.value)}
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
                  onChange={(e) => setPis(e.target.value)}
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
                  value={vbandeira}
                  onChange={(e) => setVbandeira(e.target.value)}
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
                  onChange={(e) => setTe(e.target.value)}
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
                  onChange={(e) => setIcms(e.target.value)}
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
                  onChange={(e) => setCofins(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className={Styles.button}>Calcular</button>
        </form>
        <div className={Styles.total}>
          {total ? `Você irá pagar: R$ ${total}` : 'Preencha os dados acima.'}
        </div>
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

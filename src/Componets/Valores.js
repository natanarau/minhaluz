import React from 'react';
import Styles from '../assets/css/App.module.css';

export default function Valores(props) {
  return (
    <div className={Styles.gridValor}>
      <div className={Styles.flexValor}>
        <div className={Styles.quad}>
          <div>
            Consumo TUSD:{' '}
            <strong>
              {props.valorTusd.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </div>
          <div>
            Consumo TE:{' '}
            <strong>
              {props.valorTe.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </div>
          <div>
            Bandeira:{' '}
            <strong>
              {props.valorBandeira.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </div>
        </div>
        <div className={Styles.quad}>
          <div>
            ICMS:{' '}
            <strong>
              {props.valorIcms.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </div>
          <div>
            PIS:{' '}
            <strong>
              {props.valorPis.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </div>
          <div>
            COFINS:{' '}
            <strong>
              {props.valorCofins.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </div>
        </div>
      </div>
      <div className={Styles.totalPagar}>
        <span>
          Total da Fatura:{' '}
          <strong>
            {props.total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </span>
      </div>
    </div>
  );
}

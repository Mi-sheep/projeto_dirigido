import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'

function Alerta() {

    const location = useLocation();
    console.log(location)

    const [opcaoR, setOpcaoR] = useState('');

  return (
    <form action="">
        <div>

        <label htmlFor="data_ocorrido">Data do ocorrido</label>
        <br />
        <input id="data_ocorrido" type="date" />

        </div>

        <hr />

        <div>

        <p>Período ocorrido</p>
        <br />
        <select name="" id="periodos">
            <option value="selecione" disabled selected>Selecione o período</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
            <option value="madrugada">Madrugada</option>
        </select>

        </div>

        <hr />

        <div>
          <p>Região do assalto</p>
          <br />
          <select value={opcaoR} onChange={(o) => setOpcaoR(o.target.value)} name="" id="regioes">
            <option value="selecione" disabled selected>Selecione a região geral</option>
            <option value="portaria1">Portaria 1 (Avenida dos Estados)</option>
            <option value="portaria6">Portaria 6 / Rua Abolição (Entrada dos fundos / Bloco B)</option>
            <option value="torre">Torre do Relógio / Parada do Fretado Intercampi</option>
            <option value="caminhoc">Caminho a pé até a Estação Celso Daniel (Avenidas Industrial/Estados)</option>
            <option value="caminhop">Caminho a pé até a Estação Prefeito Saladino (Rua Santa Adélia/Viaduto)</option>
            <option value="trolebus">Ponto de Trólebus (Parada Itamaraty)</option>
            <option value="dentro">Dentro das dependências do campus (Bloco A, Bloco B, R.U., Estacionamento)</option>
            <option value="outra">Outra</option>
          </select>
          {opcaoR === 'outra' && (
            <input id="outros" type="text" placeholder="Escreva a região aqui" />
          )}
        </div>

        <hr />

        <div>
          <label htmlFor="desc">Faça uma descrição do assalto</label>
          <br />
          <input type="text" id="desc" placeholder='Houve armas? Estava só ou em grupo? Sofreu alguma violência? Compartilhe o que achar relevante'/>
        </div>

        <hr />

        <p>Texto sobre ocorrências</p>

        <hr />

        <button>Enviar</button>

        
    </form>
  )
}

export default Alerta
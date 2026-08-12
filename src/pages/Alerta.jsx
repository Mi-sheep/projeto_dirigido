import React from 'react'
import { useState } from 'react';
import { useLocation, Navigate, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../createClient';
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'


const Container = styled.div`
  min-height: 100dvh;
  padding: 1.25rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  
 header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    margin-bottom: 1.25rem;
  }
    
  .titulo{
    flex: 0 0 auto;
    margin-left: auto;
    padding: 1rem 1rem;
  }

  form{
    display: flex;
    max-width: 75wv;
    width: 100%;
    flex-direction: column;
    align-items: center
  }

  p:not(.bo), label{
    margin: 0;
    font-size: 1rem;
    line-height: 2;
  }

  .bo{
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;

    font-size: 0.95rem;
    line-height: 1.4;
    text-align: justify;
    }
  }

  
`;


function Alerta() {

  const navigate = useNavigate()

  const { state } = useLocation();
  console.log(state)

  const [opcaoR, setOpcaoR] = useState('');

  const [dados, setDados] = useState({
    data_ocorrido: null, periodo: null, regiao: null, descricao: null, local_y: state?.long ?? null, local_x: state?.lati ?? null
  })
  console.log(dados)

  function handleMudanca(e) {

    setDados(preFormData => {
      return {
        ...preFormData,
        [e.target.name]: e.target.value
      }
    })
  }


  async function registrarDados(e) {
    e.preventDefault();

    const { error } = await supabase
      .from('ocorrencias')
      .insert({ data_ocorrido: dados.data_ocorrido, periodo_ocorrido: dados.periodo, regiao_ocorrido: dados.regiao, local_x: dados.local_x, local_y: dados.local_y, descricao: dados.descricao })

    if (!error) {
      navigate("/")
    }
    else {
      console.error(error)
    }
  }

  return (
    <Container>

      <header>
        <Link to={"/"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>

        <h1 className='titulo'>Ocorrência</h1>
      </header>

      <form onSubmit={registrarDados}>
        <div>

          <label htmlFor="data_do_ocorrido">Data do ocorrido</label>
          <input id="data_do_ocorrido" type="date" name='data_ocorrido' onChange={handleMudanca} />

        </div>

        <div>

          <p>Período ocorrido</p>
          <select name="periodo" id="periodos" onChange={handleMudanca}>
            <option value="" disabled selected>Selecione o período</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
            <option value="Madrugada">Madrugada</option>
          </select>

        </div>

        <div>
          <p>Região do assalto</p>
          <select value={opcaoR} onChange={(o) => { setOpcaoR(o.target.value); handleMudanca(o) }} name="regiao" id="regioes">
            <option value="" disabled>Selecione a região geral</option>
            <option value="Portaria 1 (Avenida dos Estados)">Portaria 1 (Avenida dos Estados)</option>
            <option value="Portaria 6 / Rua Abolição (Entrada dos fundos / Bloco B)">Portaria 6 / Rua Abolição (Entrada dos fundos / Bloco B)</option>
            <option value="Torre do Relógio / Parada do Fretado Intercampi">Torre do Relógio / Parada do Fretado Intercampi</option>
            <option value="Caminho a pé até a Estação Celso Daniel (Avenidas Industrial/Estados)">Caminho a pé até a Estação Celso Daniel (Avenidas Industrial/Estados)</option>
            <option value="Caminho a pé até a Estação Prefeito Saladino (Rua Santa Adélia/Viaduto)">Caminho a pé até a Estação Prefeito Saladino (Rua Santa Adélia/Viaduto)</option>
            <option value="Ponto de Trólebus (Parada Itamaraty)">Ponto de Trólebus (Parada Itamaraty)</option>
            <option value="Dentro das dependências do campus (Bloco A, Bloco B, R.U., Estacionamento)">Dentro das dependências do campus (Bloco A, Bloco B, R.U., Estacionamento)</option>
            <option value="outra">Outra</option>
          </select>
          {opcaoR === 'outra' && (
            <input name='regiao' id="outros" type="text" placeholder="Escreva a região aqui" onChange={handleMudanca} />
          )}
        </div>

        <div>
          <label htmlFor="desc">Faça uma descrição do assalto</label>
          <input name='descricao' type="text" id="desc" placeholder='Houve armas? Estava só ou em grupo? Sofreu alguma violência? Compartilhe o que achar relevante' onChange={handleMudanca} />
        </div>
        
        <div className='bo'>
        <p>Registrou um Boletim de Ocorrência? Você sabia que esse registro pode ajudar muito além do seu próprio caso? O Boletim de Ocorrência contribui para que as autoridades identifiquem padrões, compreendam a necessidade de intervenção em determinados pontos e horários, além de auxiliar em investigações de situações semelhantes. Saiba mais acessando nosso mural de informações.</p>
        </div>

        <button type='submit'>Enviar</button>

      </form>
    </Container>
  )
}

export default Alerta
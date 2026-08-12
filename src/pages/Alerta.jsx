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
  max-width: 750px;
  margin: 0 auto;
  
 header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.2rem 0;
    margin-bottom: 0;
  }
    
  .titulo{
    flex: 0 0 auto;
    margin-left: auto;
    padding: 0 1rem;
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
  
  div{
    width: 100%
  }

  input, select{
    font-family: inherit;
    width: 100%;
  }

  label{
    font-size: 1.3rem;
   }

  .datas{
    margin-bottom: 0.5rem;
    input{
      background-color: ${theme.fundoCards};
      border-radius: 0.3rem;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
      height: 2.5rem;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      padding: 0 0.5rem;
      font-size: 1rem;
    }
  }
  
  .periodos, .regioes{
    margin-bottom: 0.5rem;
    p{
      font-size: 1.3rem;
    }
    
    input, select{
      background-color: ${theme.fundoCards};
      border-radius: 0.3rem;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
      height: 2.5rem;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      padding: 0 0.5rem;
      font-size: 1rem;
    }
  }
   
  .opcoes{
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }

  .descricoes{
    width: 100%;
    margin-bottom: 0.5rem;
    textarea{
      background-color: ${theme.fundoCards};
      border-radius: 0.3rem;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
      height: 10rem;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      padding: 0.5rem 0.5rem;
      font-size: 1rem;
      width: 100%;
      font-family: inherit;
      resize: none;
    }
  }

  .bo{
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.4rem;
    margin-bottom: 2rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;

    h4{
      margin: 0 0 1rem 0;
    }

    p{
      font-size: 0.95rem;
      line-height: 1.4;
      text-align: justify;
    }
  }

  .envio{
    color: white;
    font-weight: 700;
    width: 9rem;
    height: 3.5rem;
    border: none;
    border-radius: 0.2rem;
    background-color: ${theme.botaoVoltar};
    cursor: pointer;
    font-size: 2rem;

    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    margin-bottom: 1.25rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.02);
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
        <div className='datas'>

          <label htmlFor="data_do_ocorrido">Data do ocorrido</label>
          <br />
          <input id="data_do_ocorrido" type="date" name='data_ocorrido' onChange={handleMudanca} />

        </div>

        <div className='periodos'>
          <p>Período ocorrido</p>
          <select name="periodo" id="periodos" onChange={handleMudanca}>
            <option value="" disabled selected>Selecione o período</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
            <option value="Madrugada">Madrugada</option>
          </select>
        </div>

        <div className='regioes'>
          <p>Região do assalto</p>
          <div className='opcoes'>
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
              <input name='regiao' id="outros" type="text" placeholder="Escreva aqui" onChange={handleMudanca} />
            )}
          </div>
        </div>

        <div className='descricoes'>
          <label htmlFor="desc">Faça uma descrição do assalto</label>
          <br />
          <textarea name='descricao' id="desc" placeholder='Houve armas? Estava só ou em grupo? Sofreu alguma violência? Compartilhe o que achar relevante' onChange={handleMudanca} />
        </div>

        <br />
        <div className='bo'>
          <h4><em>Registrou um Boletim de Ocorrência?</em></h4>
          <p>Você sabia que esse registro pode ajudar muito além do seu próprio caso? O Boletim de Ocorrência contribui para que as autoridades identifiquem padrões, compreendam a necessidade de intervenção em determinados pontos e horários, além de auxiliar em investigações de situações semelhantes.</p>
          <br />
          <p>Saiba mais acessando nosso mural de informações.</p>
        </div>

        <button className='envio' type='submit'>Enviar</button>

      </form>
    </Container>
  )
}

export default Alerta
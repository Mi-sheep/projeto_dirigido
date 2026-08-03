import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/icon-voltar.png'
import { Link } from 'react-router-dom'
import { supabase } from '../createClient'

const Container = styled.div`
  min-height: 100dvh;
  padding: 1.25rem;
  box-sizing: border-box;

  header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    margin-bottom: 1.25rem;
  }

  .botao-voltar {
    width: 3.5rem;
    height: 3.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${theme.botaoVoltar};
    cursor: pointer;

    display:flex;
    justify-content: center;
    align-items: center;
  }

  .titulo {
    flex: 1;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
    font-family: 'Inclusive Sans', sans-serif;
  }

  .iconeVoltar {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 1.45rem;
    margin-left: 1.45rem; 
    transform: scale(2.2);
  }

  h1{
    flex: 1;
    text-align: center;
    color: ${theme.texto};
    margin: 0;
  }

  .secao-titulo {
    font-size: 2rem;
    font-weight: 400;
    margin: 1.5rem 0 0.5rem 0;
    color: ${theme.texto};
  }

  .carrossel-graficos {
    display:flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
  }

  .card-estatistica {
    background-color: ${theme.fundoCards};
    border: 0.1rem solid ${props => props.theme.fundoCampos};
    border-radius: 0.25rem;
    padding: 1rem;
    min-width: 18rem;
    max-width: 20rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .topo-grafico {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.texto};
    margin-bottom: 0.75rem;
  }

  .numero-total {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${theme.texto};
    margin: auto 0;
    text-align: center;
  }

  .lista-ruas {
    margin: 0;
    padding-left: 1.25rem;
    color: ${theme.fundoCards};
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .lista-historico {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-ocorrencia {
    background-color: ${theme.fundoCards};
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    padding: 0.75rem;
  }

  .topo-ocorrencia {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .tag-info {
    background-color: ${theme.fundoCampos};
    padding: 0.25rem 0.75rem;
    font-size: 0.85rem;
    border-radius: 0.15rem;
    color: ${theme.texto};
  }

  .descricao-ocorrencia {
    background-color: ${theme.fundoCampos};
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
    min-height: 4rem;
    border-radius: 0.15rem;
    color: ${theme.texto};
  }
`



function Comunidade() {
  return (
    <Container>
      <header>
      <Link to={"/"}>
        <button className="botao-voltar">
          <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
        </button>
      </Link>
        <h1 className="titulo">Estatísticas</h1>
      </header>

      <div className="carrossel-graficos">

        <div className="card-estatistica">
          <div className="topo-grafico"> Roubos Mensais</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '6.25rem', padding: '0 0.5rem', marginTop: 'auto' }}>
          <div style={{ width: '1.25rem', height: '2rem', backgroundColor: '#52b788', borderRadius: '0.125rem' }}></div>
            <div style={{ width: '1.25rem', height: '4.5rem', backgroundColor: '#52b788', borderRadius: '0.125rem' }}></div>
            <div style={{ width: '1.25rem', height: '3.5rem', backgroundColor: '#52b788', borderRadius: '0.125rem' }}></div>
            <div style={{ width: '1.25rem', height: '5.5rem', backgroundColor: '#52b788', borderRadius: '0.125rem' }}></div>
            <div style={{ width: '1.25rem', height: '1.5rem', backgroundColor: '#52b788', borderRadius: '0.125rem' }}></div>
            <div style={{ width: '1.25rem', height: '4rem', backgroundColor: '#52b788', borderRadius: '0.125rem' }}></div>
            </div>
          </div>
        </div>

        <div className="card-estatistica">
          <div className="topo-grafico">Roubos totais registrados</div>
          <div className="numero-total">12</div>
        </div>

        <div className="card-estatistica">
          <div className="topo-grafico">Ruas com mais ocorrências</div>
            <ol className="lista-ruas">
              <li><strong>5x</strong> - Av. Paulista</li>
              <li><strong>4x</strong> - Rua Augusta</li>
              <li><strong>3x</strong> - Rua Consolação</li>
            </ol>
      </div>

      <h2 className="secao-titulo">Histórico</h2>

      <div className="lista-historico">

        <div className="card-ocorrencia">
          <div className="topo-ocorrencia">
            <span className="tag-info"><b>Endereço:</b> Av. Paulista, 1000</span>
            <span className="tag-info"><b>Período:</b> Noite</span>
            <span className="tag-info"><b>Data:</b> 03/08/2026</span>
          </div>
          <div className="descricao-ocorrencia">
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Comunidade
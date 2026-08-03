import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;

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

  .iconeVoltar {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 1.45rem;
    margin-left: 1.45rem; 
    transform: scale(2.2);
  }
`;


function MuralS() {
  return (
    <Container>
      
      <header>
        <Link to={"/"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1>Mural de informações</h1>
      </header>

      <div className='botoesM'>
        
        <Link to={"/prevencao"}>
        <button className='prevencao'>Guia de Prevenção</button>
        </Link>
        
        <Link to={"/contatos-de-emergencia"}>
        <button>Contatos de Emergência</button>
        </Link>

        <Link to={"/delegacia-eletronica"}>
        <button>Delegacia Eletrônica</button>
        </Link>
        
        <Link to={"/como-os-assaltos-afetam-o-psicologico-das-vitimas"}>
        <button>Como Assaltos Afetam às Vitmas</button>
        </Link>

        <Link to={"/ufabc-em-combate-aos-assaltos"}>
        <button>UFABC em Combate aos Assaltos</button>
        </Link>

        <a href="https://pu.ufabc.edu.br/horarios-dos-onibus" target="_blank" rel="noopener noreferrer"><button>Cronograma do Fretado</button></a>
        
      </div>

    </Container>
  )
}

export default MuralS
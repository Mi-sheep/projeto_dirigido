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


function Configuracoes() {
  return (
    <Container>

      <header>
         <Link to={"/"}>
            <button className="botao-voltar">
              <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
            </button>
          </Link>
        <h1>Configurações</h1>
      </header>

      <div className='botoesConfig'>
        <button>Sobre o aplicativo</button>
        <button>Acessibilidade</button>
        <button>Reporte de erros e sugestões</button>
      </div>
    </Container>
  )
}

export default Configuracoes
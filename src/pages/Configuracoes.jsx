import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;

  .botao-voltar {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: ${theme.botaoVoltar};
    cursor: pointer;

    display:flex;
    justify-content: center;
    align-items: center;
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
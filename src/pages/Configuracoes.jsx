import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;

 header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    margin-bottom: 1.25rem;
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
        <h1 className='titulo'>Configurações</h1>
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
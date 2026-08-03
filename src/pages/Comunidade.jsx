import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'
import { Link } from 'react-router-dom'

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

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

  .titulo {
    flex: 1;
    text-align: center;
  }

  .iconeVoltar {
    width: 24px;
    height: 24px;
  }

  h1{
    flex: 1;
    text-align: center;
    color: ${theme.texto};
  }
`;



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
    </Container>
  )
}

export default Comunidade
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'

const Container = styled.div`
  min-height: 100dvh;
  padding: 1.25rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;

  a{
    text-decoration: none;
  }

 header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;
    padding-top: 1.5rem;

    .titulo {
      text-align: center;
      padding-left: 0rem;
      box-sizing: border-box;
      flex: 1;
      font-weight: 500;
      font-size: 2.4rem;
    }
  }

  .cartaoBotao {
    background-color: ${theme.fundoCards};
    border: none;
    border-radius: 0.5rem;
    padding: 1.75rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transition: transform 0.2s, background-color 0.2s;

    &:hover {
      transform: translateY(-2px);
    }

  }

    span {
      color: ${theme.texto};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.3;
      text-align: center;
    }

  .botoesC {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  .card-aviso {
    background-color: ${theme.fundoCards};
    border-left: 6px solid #e2a63b;
    border-right: 6px solid #e2a63b;
    border-radius: 0.25rem;
    padding: 1rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    margin-bottom: 1.25rem;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #b07211;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    }

    p {
      font-size: 1rem;
      color: #444;
      margin: 0;
      text-align: center;
    }
  }

@media(min-width:800px) {
  max-width: 70%;

  header{
    .titulo{
      font-size: 2.65rem;
    }
  }

  span{
    font-size: 1.45rem;
  }

  .card-aviso{
    h2 {
      font-size: 1.45rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
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

      <div className='botoesC'>

        <div className='card-aviso'>
          <h2>⚠️ Área em Construção</h2>
          <p>Algumas funções podem estar instáveis ou indisponíveis no momento.</p>
        </div>

        <button className='cartaoBotao'>
          <span>Sobre o aplicativo</span>
        </button>


        <button className='cartaoBotao'>
          <span>Acessiblidade</span>
        </button>


        <button className='cartaoBotao'>
          <span>Reporte de erros e sugestões</span>
        </button>

        <Link to={"/referencias"}>
          <button className='cartaoBotao'>
            <span>Referências do mural</span>
          </button>
        </Link>

      </div>
    </Container>
  )
}

export default Configuracoes
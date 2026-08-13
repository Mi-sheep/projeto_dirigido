import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'
import iconGuia from '../assets/icon-guia.png'
import iconCombate from '../assets/icon-computador.png'
import iconFretado from '../assets/icon-onibus.png'
import iconPsicologico from '../assets/icon-cerebro.png'
import iconDelegacia from '../assets/icon-contato.png'
import iconEmergencia from '../assets/icon-telefone.png'


const Container = styled.div`
  min-height: 100dvh;
  padding: 1.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;


 header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    padding-top: 0.5rem;

    .titulo {
      text-align: center;
      padding-left: 0rem;
      box-sizing: border-box;
      flex: 1;
    }
  }

  .botoesM {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
    box-sizing: border-box;

    a {
      text-decoration: none;
      display: block;
      width: 100%;
    }
  }

  .cartaoMural {
    background-color: ${theme.fundoCards};
    border: none;
    border-radius: 0.5rem;
    padding: 1.25rem 1rem;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }

    span {
      color: ${theme.texto};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.3;
    }
  }

  .icon-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: auto;

    img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: contain;
    }
  }

  @media(min-width:800px) {
    max-width: none;
    align-items: normal;
    padding-top: 0;

    header{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .titulo {
        text-align: left;
        margin-right: auto;
        padding-left: 0.4rem;
        flex: 0 1 auto;
      }
    }

    .cartaoMural {
      background-color: ${theme.fundoCards};
      border: none;
      border-radius: 0.5rem;
      padding: 1.25rem 1.5rem;
      width: 100%;
    
      span {
        color: ${theme.texto};
        font-size: 1.7rem;
        font-weight: 500;
        line-height: 1.3;
      } 
    }

    .botoesM {
      padding: 0.75rem 0.5rem;
    }
    
    .icon-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: auto;

      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
    }
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
        <h1 className='titulo'>Mural de Informações</h1>
      </header>

      <div className='botoesM'>

        <Link to={"/guia-de-prevencao"}>
          <button className='cartaoMural'>
            <span>Guia de Prevenção</span>
            <div className="icon-container">
              <img src={iconGuia} alt="Ícone Guia" />
            </div>
          </button>
        </Link>

        <Link to={"/contatos-de-emergencia"}>
          <button className='cartaoMural'>
            <span>Contatos de Emergência</span>
            <div className="icon-container">
              <img src={iconEmergencia} alt="Ícone Emergência" />
            </div>
          </button>
        </Link>

        <Link to={"/delegacia-eletronica"}>
          <button className='cartaoMural'>
            <span>Delegacia Eletrônica</span>
            <div className="icon-container">
              <img src={iconDelegacia} alt="ícone Delegacia" />
            </div>
          </button>
        </Link>

        <Link to={"/como-os-assaltos-afetam-o-psicologico-das-vitimas"}>
          <button className='cartaoMural'>
            <span>Como assaltos afetam as vítimas</span>
            <div className="icon-container">
              <img src={iconPsicologico} alt="Ícone Psicológico" />
            </div>
          </button>
        </Link>

        <Link to={"/ufabc-em-combate-aos-assaltos"}>
          <button className='cartaoMural'>
            <span>UFABC em combate aos assaltos</span>
            <div className="icon-container">
              <img src={iconCombate} alt="Ícone Combate" />
            </div>
          </button>
        </Link>

        <a href="https://pu.ufabc.edu.br/horarios-dos-onibus" target="_blank" rel="noopener noreferrer">
          <button className='cartaoMural'>
            <span>Cronograma do Fretado</span>
            <div className="icon-container">
              <img src={iconFretado} alt="Ícone Fretado" />
            </div>
          </button>
        </a>

      </div>

    </Container>
  )
}

export default MuralS
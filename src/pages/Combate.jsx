import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'

const Container = styled.div`
  min-height: 100dvh;
  padding: 1.25rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;

 header {
    box-sizing: border-box;
    max-width: 480px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    min-height: 3.5rem;

    .botao-voltar {
      position: absolute;
      left: 0;
      top: 0;
      margin-bottom: 0;
    }
  }

  .titulo {
    flex: 1;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 600;
    font-family: 'Inclusive Sans', sans-serif;
    color: ${theme.letraTitulo};
    padding-left: 3.5rem;
    padding-right: 0.5rem;
  }

  section {
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;

    h4 {
      margin: 0 0 0.75rem 0;
      font-size: 1.2rem;
      font-weight: bold;
    }

    p {
      margin: 0 0 0.75rem 0;
      font-size: 0.95rem;
      line-height: 1.4;
      text-align: justify;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 0.5rem 0 0 0;
    padding-left: 1.25rem;
  }

  li{
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }

@media(min-width:800px) {
  max-width: none;
  align-items: normal;
  padding: 0rem 2rem;
  
  header{
    margin-bottom: 1rem;
    max-width: none;
    .titulo {
        text-align: left;
        margin-right: auto;
        padding-left: 0.2rem;
        flex: 0 1 auto;
        font-size: 2.25rem;
      }
    }
  }
  
  section {
  h4 {
      font-size: 1.45rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  li{
    font-size: 1.2rem;
  }
}
`;

function Combate() {
  return (
    <Container>

      <header>
        <Link to={"/mural-de-informacoes"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>UFABC em combate contra assaltos</h1>
      </header>

      <section>

        <h4>A segurança começa com a informação</h4>

        <p>A ocorrência de assaltos e outros problemas de segurança no entorno universitário pode gerar medo e insegurança na comunidade acadêmica. Por isso, além das ações preventivas realizadas pela Universidade em conjunto com os órgãos de segurança pública, é fundamental que estudantes, servidores e visitantes saibam quais recursos estão disponíveis para comunicar uma situação de risco.</p>

        <p>Muitas pessoas não sabem, mas a UFABC possui canais próprios para registro e comunicação de ocorrências, permitindo que a Universidade tenha conhecimento dos casos e possa encaminhar as informações às autoridades responsáveis.</p>
      </section>

      <section>

        <h4>Como comunicar uma ocorrência?</h4>

        <p>Entre em contato com:</p>

        <p><strong>190 — Polícia Militar</strong></p>
        <p>Para situações de risco imediato.</p>

        <p><strong>3356-7007 ou ramal 7007</strong></p>
        <p>Canal de emergência da UFABC, disponível 24 horas para comunicação de ocorrências dentro da Universidade. </p>

        <p>Além disso, a equipe de segurança patrimonial dos campi dispõe de instrumento próprio para registro de ocorrências. Mesmo tendo ocorrido fora do campus, este registro é importante para garantir informações a serem reportadas às forças de segurança pública.</p>

      </section>

      <section>

        <h4>Registro de ocorrências na UFABC</h4>

        <p>A Universidade também disponibiliza computadores para que a comunidade possa formalizar registros de ocorrências.</p>

        <ul>
          <li>Campus Santo André: Piso Vermelho do Bloco A</li>
          <li>Campus São Bernardo do Campo: Saguão do Bloco Alfa I</li>
        </ul>

      </section>
    </Container>
  )
}

export default Combate
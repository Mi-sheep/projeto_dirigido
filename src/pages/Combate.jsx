import React from 'react'
import { Link } from 'react-router-dom';
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

function Combate() {
  return (
    <Container>
      
      <header>
        <Link to={"/murals"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>UFABC em combate contra assaltos</h1>
      </header>

      <section className='introducao'>

        <h4>A segurança começa com a informação</h4>

        <p>A ocorrência de assaltos e outros problemas de segurança no entorno universitário pode gerar medo e insegurança na comunidade acadêmica. Por isso, além das ações preventivas realizadas pela Universidade em conjunto com os órgãos de segurança pública, é fundamental que estudantes, servidores e visitantes saibam quais recursos estão disponíveis para comunicar uma situação de risco.</p>

        <p>Muitas pessoas não sabem, mas a UFABC possui canais próprios para registro e comunicação de ocorrências, permitindo que a Universidade tenha conhecimento dos casos e possa encaminhar as informações às autoridades responsáveis.</p>
      </section>

      <section className='como'>

        <h4>Como comunicar uma ocorrência?</h4>

        <p>Entre em contato com:</p>

        <p>190 — Polícia Militar</p>
        <p>Para situações de risco imediato.</p>

        <p>3356-7007 ou ramal 7007</p>
        <p>Canal de emergência da UFABC, disponível 24 horas para comunicação de ocorrências dentro da Universidade. </p>

        <p>Além disso, a equipe de segurança patrimonial dos campi dispõe de instrumento próprio para registro de ocorrências. Mesmo tendo ocorrido fora do campus, este registro é importante para garantir informações a serem reportadas às forças de segurança pública.</p>

      </section>

      <section className='final'>

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
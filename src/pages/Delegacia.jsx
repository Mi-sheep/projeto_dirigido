import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'
import imgAssalto from '../assets/img-assalto.png'

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

  header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
    margin-bottom: 1.5rem;
    min-height: 3.5rem;
    padding-top: 0.25rem;

    .botao-voltar {
      position: absolute;
      left: 0;
      top: 0;
      margin-bottom: 0;
    }

    .titulo {
      flex: 1;
      text-align: center;
      margin: 0;
      font-size: 1.9rem;
      margin-left: 3.5rem;
      overflow: hidden;
      padding-top: 0.3rem;
    }
  
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

    ul + h4 {
      margin-top: 1.5rem;
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

  .box-img {
    margin-bottom: 1.25rem;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
      
    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: fill;
    }
  }
  
  ul {
    margin: 0.5rem 0 0 0;
    padding-left: 1.25rem;
  }

  li {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    text-align: justify;
  }

  li:last-child {
    margin-bottom: 0;
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
`;

function Delegacia() {
  return (
    <Container>
      
      <header>
        <Link to={"/murals"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>Delegacia Eletrônica</h1>
      </header>

      <section>

        <h4>A importância do Boletim de Ocorrência.</h4>

        <p>A Delegacia Eletrônica é um serviço que permite registrar ocorrências pela internet, oferecendo mais praticidade, economia de tempo e acessibilidade ao cidadão. Além de reduzir a necessidade de atendimento presencial nas unidades policiais, o sistema agiliza a comunicação entre a população e as autoridades.</p>

        <p>O boletim de ocorrência é a comunicação oficial de um fato à polícia. A partir desse registro, as autoridades podem adotar as medidas cabíveis, iniciar investigações e garantir os direitos da vítima. É importante destacar que o B.O. não constitui uma prova definitiva, mas sim o relato inicial dos acontecimentos.</p>
      </section>

      <div className="box-img">
        <img src={imgAssalto} alt="Imagem de documento" />
      </div>

      <section>
        <h4>Quando registrar um B.O.?</h4>

        <p>É recomendado registrar um boletim de ocorrência sempre que ocorrer:</p>

        <ul>
            <li>Furto ou roubo;</li>

            <li>Ameaça, agressão ou violência doméstica;</li>

            <li>Acidentes de trânsito;</li>

            <li>Perda ou extravio de documentos;</li>

            <li>Golpes, fraudes ou estelionatos, inclusive os praticados pela internet;</li>

            <li>Danos ao patrimônio público ou privado.</li>
        </ul>

      </section>

      <section>
        <h4>Como registrar um Boletim de Ocorrência Digital</h4>

        <ul>
            <li>1. Acesse a Delegacia Eletrônica e faça login com sua conta ou utilize o acesso pelo Gov.br.</li>

            <li>2. Clique em "Comunicar Ocorrência" e selecione o tipo de ocorrência desejada (como furto, estelionato, perda de documentos ou acidente de trânsito sem vítimas).</li>

            <li>3. Preencha os campos obrigatórios com um relato claro e objetivo, além das informações dos envolvidos.</li>

            <li>4. Envie o formulário e anote o número do protocolo para acompanhar o andamento da solicitação pelo site ou por e-mail.</li>
        </ul>

        <h4>Dicas Importantes</h4>

        <ul>
            <li>Guarde o número do protocolo gerado após o registro;</li>

            <li>Informe os fatos com o máximo de precisão possível, incluindo data, horário, local e, se houver, testemunhas;</li>

            <li>Utilize apenas os canais oficiais para registrar a ocorrência;</li>

            <li>Em situações graves ou urgentes, procure imediatamente uma unidade policial ou orientação jurídica.</li>
        </ul>

      </section>

    </Container>
  )
}

export default Delegacia
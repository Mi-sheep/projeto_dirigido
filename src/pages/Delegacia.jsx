import React from 'react'
import { Link } from 'react-router-dom';
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

  ul {
    padding-left: 10rem;
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
        <h1>Delegacia Eletrônica</h1>
      </header>

      <section className='importancia'>

        <h3>A importância do Boletim de Ocorrência.</h3>

        <p>A Delegacia Eletrônica é um serviço que permite registrar ocorrências pela internet, oferecendo mais praticidade, economia de tempo e acessibilidade ao cidadão. Além de reduzir a necessidade de atendimento presencial nas unidades policiais, o sistema agiliza a comunicação entre a população e as autoridades.</p>

        <p>O boletim de ocorrência é a comunicação oficial de um fato à polícia. A partir desse registro, as autoridades podem adotar as medidas cabíveis, iniciar investigações e garantir os direitos da vítima. É importante destacar que o B.O. não constitui uma prova definitiva, mas sim o relato inicial dos acontecimentos.</p>
      </section>

      <section>
        <h3>Quando registrar um B.O.?</h3>

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
        <h3>Como registrar um Boletim de Ocorrência Digital</h3>

        <ol>
            <li>Acesse a Delegacia Eletrônica e faça login com sua conta ou utilize o acesso pelo Gov.br.</li>

            <li>Clique em "Comunicar Ocorrência" e selecione o tipo de ocorrência desejada (como furto, estelionato, perda de documentos ou acidente de trânsito sem vítimas).</li>

            <li>Preencha os campos obrigatórios com um relato claro e objetivo, além das informações dos envolvidos.</li>

            <li>Envie o formulário e anote o número do protocolo para acompanhar o andamento da solicitação pelo site ou por e-mail.</li>
        </ol>

        <h3>Dicas Importantes</h3>

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
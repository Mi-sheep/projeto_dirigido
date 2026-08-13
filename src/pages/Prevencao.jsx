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
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 1.25rem;
    min-height: 3.5rem;

    .titulo {
      flex: 1;
      text-align: center;
      margin: 0;
      font-size: 1.9rem;
      margin-left: auto;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .introducao {
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;

    h4 {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: justify;
    }
  }

  .subtitulo-container {
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;

    h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .dicas {
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1.5rem;

    ol {
      padding-left: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    li {
      display: flex;
      flex-direction: column;
      text-align: left;

      strong {
        font-size: 1.05rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }

      p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.35;
        text-align: justify;
      }
    }
  }

  @media(min-width:800px) {
    max-width: none;
    align-items: normal;
    padding: 0.5rem 2rem;

    header{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .titulo {
        text-align: left;
        margin-right: auto;
        margin-left: 0;
        padding-left: 0.2rem;
        flex: 0 1 auto;
        font-size: 2.25rem;
      }
    }

    .introducao {
      h4 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.4;
        text-align: justify;
      }
    }
    
    .subtitulo-container {
      h2 {
        font-size: 1.35rem;
      }
    }
      
    .dicas {

      li {
        strong {
          font-size: 1.3rem;
        }

        p {
          font-size: 1.15rem;
        }
      }
    }
  }
`;

function Prevencao() {
  return (
    <Container>

      <header>
        <Link to={"/mural-de-informacoes"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>Guia de Prevenção</h1>
      </header>

      <section className='introducao'>
        <h4>
          Uma das maiores preocupações dos estudantes da UFABC em relação à segurança pública é a recorrência de roubos no entorno da universidade. A cada hora, 5 casos de roubo são registrados no Grande ABC. No primeiro semestre de 2026, foram por média 121 ocorrências por dia, com 21.877 boletins de ocorrência registrados somente de crimes contra o patrimônio. Diante dessa realidade, este panfleto reúne orientações e dicas de prevenção para ajudar a comunidade acadêmica a reduzir riscos e adotar medidas de segurança no dia a dia.
        </h4>
      </section>

      <div className='subtitulo-container'>
        <h2>7 Dicas para prevenção a assaltos</h2>
      </div>

      <section className='dicas'>
        <ol>
          <li>

            <strong>1. Esteja atento ao seu entorno</strong>
            <p>Mantenha a atenção ao que acontece ao seu redor. Evite caminhar distraído usando o celular ou fones de ouvido, principalmente em locais com pouco movimento.</p>

          </li>

          <li>

            <strong>2. Prefira locais iluminados</strong>
            <p>Sempre que possível, utilize ruas bem iluminadas e movimentadas, especialmente durante a noite.</p>

          </li>

          <li>

            <strong>3. Desconfie de situações incomuns</strong>
            <p>Caso alguém o aborde de maneira suspeita ou faça você se sentir inseguro, afaste-se imediatamente e procure um local seguro e com outras pessoas.</p>

          </li>

          <li>

            <strong>4. Varie seus trajetos</strong>
            <p>Evite seguir sempre o mesmo caminho e horário. Alternar suas rotas dificulta que criminosos conheçam sua rotina.</p>

          </li>

          <li>

            <strong>5. Ande em grupo</strong>
            <p>Sempre que possível, caminhe acompanhado, principalmente no período noturno. Grupos costumam ser menos visados por criminosos.</p>

          </li>

          <li>

            <strong>6. Esteja preparado</strong>
            <p>Mantenha seu celular carregado e tenha os números de emergência salvos para facilitar um pedido de ajuda, se necessário.</p>

          </li>

          <li>

            <strong>7. Colabore com a comunidade</strong>
            <p>Compartilhe informações sobre ocorrências, participe das iniciativas de segurança da universidade e informe situações suspeitas às autoridades competentes.</p>

          </li>


        </ol>

      </section>

    </Container>
  )
}

export default Prevencao
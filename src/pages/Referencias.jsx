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
      width: 100%;
      text-align: center;
      margin: 0;
      font-size: 1.9rem;
      padding: 0 3.5rem;
      box-sizing: border-box;
    }
  }

  .introducao {
  background-color: ${theme.fundoCards};
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  width: 100%;
  box-sizing: border-box;

  h4 {
    margin: 0 0 0.75rem 0;
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.35;
    text-align: left;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  a{
    color: ${theme.texto};
    font-size: 0.95rem;
    line-height: 1.4;
    word-break: break-all;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
 }

.contato {
  background-color: ${theme.fundoCards};
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  margin:  0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  li {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;

    strong {
      font-size: 1.05rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${theme.texto};
      line-height: 1.35;
    }

    a {
      font-size: 0.9rem;
      color: ${theme.texto};
      text-decoration: none;
      word-break: break-all;
      line-height: 1.4;
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.container-telefone {
  background-color: ${theme.fundoCards};
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  width: 100%;
  box-sizing: border-box;

  .titulo-telefone {
    margin: 0 0 1rem 0;
    font-size: 1.05rem;
    font-weight: 700;
    text-align: left;
  }

  .telefone {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    li {
      display: flex;
      flex-direction: column;

      strong {
        color: ${theme.texto};
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      a {
        font-size: 0.9rem;
        color: ${theme.texto};
        text-decoration: none;
        word-break: break-all;
        line-height: 1.4;
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

@media(min-width:800px) {
  max-width: none;
  align-items: normal;
  padding: 0.5rem 2rem;
  
  header{
    margin-bottom: 1rem;
    .titulo {
        text-align: left;
        margin-right: auto;
        padding-left: 0.2rem;
        flex: 0 1 auto;
        font-size: 2.25rem;
      }
    }
      
    .introducao {
    h4 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1.1rem;
      }

      a {
        font-size: 1.1rem;
      }
    }

    .contato {
      li {
        strong {
          font-size: 1.3rem;
        }
        a {
          font-size: 1.1rem;
        }
    }
  }

  .container-telefone {
    .titulo-telefone {
      font-size: 1.3rem;
    }

    .telefone {
      li {
        strong {
          font-size: 1.3rem;
        }
        a {
          font-size: 1.1rem;
        }
      }
    }
  }
}
`;


function Referencias() {
  return (
    <Container>

      <header>
        <Link to={"/murals"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>Referências</h1>
      </header>

      <section className='introducao'>
        <h4>Como assaltos afetam psicologicamente e como lidar com o ocorrido:</h4>
        <p>
          <a href="https://repositorio.ufc.br/handle/riufc/24382" target="_blank" rel="noopener noreferrer">
            https://repositorio.ufc.br/handle/riufc/24382
          </a>
          <a href="https://www.em.com.br/app/noticia/gerais/2013/05/01/interna_gerais,380067/vitimas-de-assalto-ficam-com-sofrimento-gravado-na-memoria.shtml" target="_blank" rel="noopener noreferrer">
            https://www.em.com.br/app/noticia/gerais/2013/05/01/interna_gerais,380067/vitimas-de-assalto-ficam-com-sofrimento-gravado-na-memoria.shtml
          </a>
        </p>
      </section>

      <ul className='contato'>
        <li>
          <strong>UFABC em combate aos assaltos:</strong>
          <a href="https://www.ufabc.edu.br/noticias/gestores-da-ufabc-se-reuniram-nesta-terca-feira-11-10-com-autoridades-policiais-para-discutir-acoes-de-seguranca-publica-no-entorno-do-campus#" target="_blank" rel="noopener noreferrer">
            https://www.ufabc.edu.br/noticias/gestores-da-ufabc-se-reuniram-nesta-terca-feira-11-10-com-autoridades-policiais-para-discutir-acoes-de-seguranca-publica-no-entorno-do-campus#
          </a>
        </li>

        <li>
          <strong>Guia de prevenção:</strong>
          <a href="https://www.dgabc.com.br/Noticia/4338673/por-hora-regiao-registra-5-casos-de-roubo-ou-furto-no-primeiro-semestre" target="_blank" rel="noopener noreferrer">
            https://www.dgabc.com.br/Noticia/4338673/por-hora-regiao-registra-5-casos-de-roubo-ou-furto-no-primeiro-semestre
          </a>
          <a href="https://faeseguranca.com.br/priorizando-sua-seguranca-10-dicas-para-prevenir-roubos-e-assaltos/" target="_blank" rel="noopener noreferrer">
            https://faeseguranca.com.br/priorizando-sua-seguranca-10-dicas-para-prevenir-roubos-e-assaltos/
          </a>
          <a href="https://www.ccb.usp.br/arquivos/cipa/1435181141_boletimcipaavisa69abril2015.pdf" target="_blank" rel="noopener noreferrer">
            https://www.ccb.usp.br/arquivos/cipa/1435181141_boletimcipaavisa69abril2015.pdf
          </a>
        </li>

        <li>
          <strong>Contatos de emergência:</strong>
          <a href="https://prefeitura.sp.gov.br/web/defesa_civil/w/noticias/184619" target="_blank" rel="noopener noreferrer">
            https://prefeitura.sp.gov.br/web/defesa_civil/w/noticias/184619
          </a>
        </li>
      </ul>

      <div className='container-telefone'>
        <h4 className='titulo-telefone'>Delegacia eletrônica: A importância de abrir boletins de ocorrência:</h4>
        <ul className='telefone'>
          <li>
            <a href="https://www.jusbrasil.com.br/artigos/boletim-de-ocorrencia-o-que-e-como-fazer-e-qual-a-importancia-juridica/5282024742" target="_blank" rel="noopener noreferrer">
              https://www.jusbrasil.com.br/artigos/boletim-de-ocorrencia-o-que-e-como-fazer-e-qual-a-importancia-juridica/5282024742
            </a>
          </li>
          <li>
            <a href="https://faliveneadvogados.com.br" target="_blank" rel="noopener noreferrer">
              https://faliveneadvogados.com.br
            </a>
          </li>
        </ul>
      </div>

    </Container>
  )
}

export default Referencias;
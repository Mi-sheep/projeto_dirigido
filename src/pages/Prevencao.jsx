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

  .iconeVoltar {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 1.45rem;
    margin-left: 1.45rem; 
    transform: scale(2.2);
  }
`;

function Prevencao() {
  return (
    <Container>
      
      <header>
        <Link to={"/murals"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>Guia de Prevenção</h1>
      </header>

      <section className='introducao'>
      <h4>Uma das maiores preocupações dos estudantes da UFABC em relação à segurança pública é a recorrência de roubos no entorno da universidade. Em 2025, as estatísticas oficiais apontaram o registro de XX roubos na cidade, sendo grande parte desses crimes cometida contra pedestres. Diante dessa realidade, este panfleto reúne orientações e dicas de prevenção para ajudar a comunidade acadêmica a reduzir riscos e adotar medidas de segurança no dia a dia.</h4>
      </section>

      <section className='dicas'>
      <h2>7 Dicas para prevenção a assaltos</h2>

      <ol>

        <li>
          
          <strong>Esteja atento ao seu entorno</strong>
          <p>Mantenha a atenção ao que acontece ao seu redor. Evite caminhar distraído usando o celular ou fones de ouvido, principalmente em locais com pouco movimento.</p>
        
        </li>

        <li>
          
          <strong>Prefira locais iluminados</strong>
          <p>Sempre que possível, utilize ruas bem iluminadas e movimentadas, especialmente durante a noite.</p>
        
        </li>

        <li>
          
          <strong>Desconfie de situações incomuns</strong>
          <p>SCaso alguém o aborde de maneira suspeita ou faça você se sentir inseguro, afaste-se imediatamente e procure um local seguro e com outras pessoas.</p>
        
        </li>

        <li>
          
          <strong>Varie seus trajetos</strong>
          <p>Evite seguir sempre o mesmo caminho e horário. Alternar suas rotas dificulta que criminosos conheçam sua rotina.</p>
        
        </li>

        <li>
          
          <strong>Ande em grupo</strong>
          <p>Sempre que possível, caminhe acompanhado, principalmente no período noturno. Grupos costumam ser menos visados por criminosos.</p>
        
        </li>

        <li>
          
          <strong>Esteja preparado</strong>
          <p>Mantenha seu celular carregado e tenha os números de emergência salvos para facilitar um pedido de ajuda, se necessário.</p>
        
        </li>

        <li>
          
          <strong>Colabore com a comunidade</strong>
          <p>Compartilhe informações sobre ocorrências, participe das iniciativas de segurança da universidade e informe situações suspeitas às autoridades competentes.</p>
        
        </li>


      </ol>

      </section>

    </Container>
  )
}

export default Prevencao
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
  align-items: stretch;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;

 header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;
    min-height: 6.5rem;
    padding-top: 1.5rem;

    Link, a {
      position: absolute;
      left: 0;
      top: 20%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
    }

    .botao-voltar {
      margin-bottom: 0;
    }

    h1 {
      font-size: 1.7rem;
      line-height: 1.2;
      text-align: center;
      margin: 0;
      padding: 0 3.5rem;
      width: 100%;
      box-sizing: border-box;
    }
  }

  section{
    p{
      margin: 0 0 0.75rem 0;
      font-size: 0.95rem;
      line-height: 1.4;
      text-align: justify;
    }

    p:last-child {
      margin-bottom: 0;
    }

    ul {
      margin: 0.5rem 0 0 0;
      padding-left: 1.25rem;
      list-style: none;
    }

    li{
      font-size: 0.95rem;
      margin-bottom: 1rem;
      line-height: 1.4;
      text-align: justify;

      strong {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 0%.25;
      }
    }

    li:last-child {
      margin-bottom: 0;
    }
  }

  section:not(.reacoes) {
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;
  }

  .reacoes{
    background-color: ${theme.fundoCards};
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    margin-bottom: 1.25rem;

  }

   iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  
@media(min-width:800px) {
  max-width: none;
  align-items: normal;
  padding: 0rem 2rem;

  header {
    margin-bottom: 0.5rem;
    min-height: 6.5rem;
    padding-top: 0rem;

    .botao-voltar {
      margin-bottom: 0;
    }

    h1 {
      font-size: 1.95rem;
      line-height: 1.2;
      text-align: left;
      margin: 0;
      padding: 0 0.25rem;
      width: 100%;
      box-sizing: border-box;
    }
  }

  section {
    p{
      font-size: 1.2rem;
    }

    li{
      font-size: 1.2rem;

      strong {
        font-size: 1.35rem;
      }
    }
  }
}

@media(min-width:1050px){
  .texto-video{
    display: flex;
    gap: 1rem;
    align-items: stetch;
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 0;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
  }

  .reacoes{
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    width: 100%;
    box-sizing: border-box;
  }
}
`;

function Consequencias() {
  return (
    <Container>

      <header>
        <Link to={"/murals"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>Como os assaltos afetam o psicológico das vítimas</h1>
      </header>

      <section>
        <p>Ser vítima de um assalto é uma experiência potencialmente traumática. Situações como estar sob a mira de uma arma, sofrer agressões físicas ou ser ameaçado de morte podem deixar marcas psicológicas duradouras. Após o ocorrido, muitas vítimas enfrentam dificuldades para retomar a rotina e passam a conviver com sentimentos de insegurança e vulnerabilidade.</p>
      </section>

        <section>

          <p>É comum que, após um evento como esse, surjam diferentes reações emocionais e psicológicas. Entre as principais estão:</p>

          <ul>
            <li>

              <strong>1. Medo do crime</strong>
              <p>O medo é uma das consequências mais frequentes após um assalto. Muitas vítimas passam a evitar determinados locais, horários ou situações semelhantes às do ocorrido, modificando sua rotina na tentativa de reduzir o risco de uma nova vitimização. Também é comum investir em medidas de segurança para recuperar a sensação de proteção.</p>

            </li>

            <li>

              <strong>2. Ansiedade</strong>

              <p>O trauma pode desencadear sintomas de ansiedade, como preocupação constante, sensação de alerta, dificuldade para relaxar e medo excessivo. Em alguns casos, podem surgir transtornos como Transtorno de Ansiedade Generalizada (TAG), fobias específicas e fobia social.</p>

            </li>

            <li>

              <strong>3. Transtorno de Estresse Pós-Traumático (TEPT)</strong>

              <p>O TEPT é um dos transtornos mais associados às vítimas de crimes violentos. A pessoa pode reviver repetidamente o momento do assalto por meio de lembranças, pesadelos ou pensamentos invasivos, além de evitar lugares, pessoas ou situações que lembrem o ocorrido. Também é comum apresentar irritabilidade, hipervigilância e dificuldade para se sentir segura novamente.</p>

            </li>
          </ul>
        </section>

      <div className='texto-video'>
      <section className='reacoes'>

        <p>Após um assalto, buscar apoio psicológico pode ser um passo importante para que a vítima consiga lidar melhor com a situação e com as emoções causadas pelo trauma. O acompanhamento profissional auxilia na compreensão do que foi vivido, no controle de sentimentos como medo e ansiedade e na recuperação gradual da segurança e da qualidade de vida. Pedir ajuda é uma forma de cuidado consigo mesmo e contribui para a retomada das atividades do cotidiano.</p>

      </section>

      <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/2Yy7z12eMMM"
            title="O Que um Assalto Faz com o Seu Cérebro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
</div>

    </Container>
  )
}

export default Consequencias
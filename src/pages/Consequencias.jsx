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

      <section className='introducao'>
        <p>Ser vítima de um assalto é uma experiência potencialmente traumática. Situações como estar sob a mira de uma arma, sofrer agressões físicas ou ser ameaçado de morte podem deixar marcas psicológicas duradouras. Após o ocorrido, muitas vítimas enfrentam dificuldades para retomar a rotina e passam a conviver com sentimentos de insegurança e vulnerabilidade.</p>
      </section>

      <section className='sintomas'>

        <p>É comum que, após um evento como esse, surjam diferentes reações emocionais e psicológicas. Entre as principais estão:</p>

        <ol>
          <li>
            
            <strong>Medo do crime</strong>
            <p>O medo é uma das consequências mais frequentes após um assalto. Muitas vítimas passam a evitar determinados locais, horários ou situações semelhantes às do ocorrido, modificando sua rotina na tentativa de reduzir o risco de uma nova vitimização. Também é comum investir em medidas de segurança para recuperar a sensação de proteção.</p>
          
          </li>

          <li>

          <strong>Ansiedade</strong>

          <p>O trauma pode desencadear sintomas de ansiedade, como preocupação constante, sensação de alerta, dificuldade para relaxar e medo excessivo. Em alguns casos, podem surgir transtornos como Transtorno de Ansiedade Generalizada (TAG), fobias específicas e fobia social.</p>

          </li>

          <li>

          <strong>Transtorno de Estresse Pós-Traumático (TEPT)</strong>

          <p>O TEPT é um dos transtornos mais associados às vítimas de crimes violentos. A pessoa pode reviver repetidamente o momento do assalto por meio de lembranças, pesadelos ou pensamentos invasivos, além de evitar lugares, pessoas ou situações que lembrem o ocorrido. Também é comum apresentar irritabilidade, hipervigilância e dificuldade para se sentir segura novamente.</p>

          <p>O medo é uma das consequências mais frequentes após um assalto. Muitas vítimas passam a evitar determinados locais, horários ou situações semelhantes às do ocorrido, modificando sua rotina na tentativa de reduzir o risco de uma nova vitimização. Também é comum investir em medidas de segurança para recuperar a sensação de proteção.</p>
          </li>
        </ol>
      </section>

      <section className='final'>
        
        <p>Após um assalto, buscar apoio psicológico pode ser um passo importante para que a vítima consiga lidar melhor com a situação e com as emoções causadas pelo trauma. O acompanhamento profissional auxilia na compreensão do que foi vivido, no controle de sentimentos como medo e ansiedade e na recuperação gradual da segurança e da qualidade de vida. Pedir ajuda é uma forma de cuidado consigo mesmo e contribui para a retomada das atividades do cotidiano.</p>

      </section>
    </Container>
  )
}

export default Consequencias
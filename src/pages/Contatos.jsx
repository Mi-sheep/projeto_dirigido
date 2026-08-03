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

function Contatos() {
  return (
    <Container>
      
      <header>
        <Link to={"/murals"}>
          <button className="botao-voltar">
            <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
          </button>
        </Link>
        <h1 className='titulo'>Contatos de Emergência</h1>
      </header>

      <section className='introducao'>
        <h4>Caso aconteça alguma emergência, você saberá como proceder e para quem ligar?</h4>
        <p>Sabemos que, após um assalto, muitas vítimas ficam em estado de choque e podem ter dificuldade para lembrar quais medidas tomar. Por isso, selecionamos alguns contatos importantes que podem ajudar em situações de emergência e oferecer apoio quando você mais precisar.</p>
      </section>

      <ul className='contato'>

        <li>
          
          <strong>Polícia Militar - 190</strong>
          <p>Acione em casos de roubo, assalto em andamento, situações de risco ou quando houver necessidade de atendimento policial imediato.</p>
        
        </li>

        <li>
          
          <strong>SAMU - 192</strong>
          <p>Serviço de Atendimento Móvel de Urgência. Deve ser acionado em casos de emergência médica, como pessoas feridas, desmaios ou outras situações que exijam atendimento rápido.</p>
        
        </li>

        <li>
          
          <strong>Corpo de Bombeiros - 193</strong>
          <p>Atua em incêndios, acidentes de trânsito, resgates, salvamentos e outras situações que envolvam risco à vida.</p>
        
        </li>

        <li>
          
          <strong>Defesa Civil - 199</strong>
          <p>Responsável por atender ocorrências relacionadas a desastres naturais e riscos estruturais, como enchentes, deslizamentos, queda de árvores, alagamentos e construções com risco de desabamento.</p>
        
        </li>

      </ul>

      <h4>Ao telefonar: </h4>

      <ul className='telefone'>

        <li>
            <p><strong>Fique calmo - </strong> Caso o munícipe esteja nervoso, a comunicação pode ser prejudicada e o entendimento do caso mais demorado, atrasando, assim, o acionamento da equipe.</p>
        </li>

        <li>
            <p><strong>Identifique-se fornecendo o nome e o telefone de contato - </strong>Assim que o atendente receber a ligação, de imediato, informe seu nome e o telefone para contato. Caso a ligação seja perdida, o atendente terá condições de retornar a ligação para o munícipe.</p>
        </li>

        <li>
            <p><strong>Diga exatamente o que está acontecendo - </strong>É primordial que seja informado o que realmente esteja acontecendo no local para que seja determinado o nível de emergência da ocorrência.</p>
        </li>

        <li>
            <p><strong>Informe se há vítimas. Havendo, forneça precisamente o número de pessoas - </strong>Fornecendo o número exato de pessoas, o atendente aciona o número de equipes necessárias para o atendimento.</p>
        </li>

        <li>
            <p><strong>Forneça corretamente o endereço e, se possível, uma ou mais referências - </strong>Quanto mais precisa for a localização passada, mais rápido a equipe chegará ao local. Por isso, informe o maior número de referências possíveis e o endereço, com numeral, corretamente.</p>
        </li>

      </ul>

    </Container>
  )
}

export default Contatos
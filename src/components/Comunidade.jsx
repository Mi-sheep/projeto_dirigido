import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/return-icon.svg'

const CardContainer = styled.div`
  background-color: ${theme.fundoTela};
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const BotaoVoltar = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.botaoVoltar};
  cursor: pointer;

  display:flex;
  justify-content: center;
  align-items: center;
`;

const IconeVoltar = styled.img`
  width: 24px;
  height: 24px;
`;

const Titulo = styled.h1`
  flex: 1;
  text-align: center;
  color: ${theme.texto};
`;





function Comunidade() {
  return (
    <CardContainer>
      <Header>
        <BotaoVoltar>
          <IconeVoltar src={iconVoltar} alt="Voltar" />
        </BotaoVoltar>

        <Titulo>Estatísticas</Titulo>
      </Header>
      
    </CardContainer>
  )
}

export default Comunidade
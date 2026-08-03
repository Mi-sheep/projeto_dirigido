import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { createGlobalStyle } from "styled-components";
import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${theme.fundoTela};
    font-family: 'Inclusive Sans', sans-serif;
  } 

  ol {
    padding-left: 10rem;
  }

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

  .titulo {
    flex: 1;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
    font-family: 'Inclusive Sans', sans-serif;
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

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle /> 
      <Router />
    </BrowserRouter>
  )
}

export default App

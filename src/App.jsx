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

import React from 'react'
import { Link } from 'react-router-dom'


function MuralS() {
  return (
    <main>
      
      <header className='mobile'>
        <Link to={"/"}>
        <button>Volta</button>
        </Link>
        <h1>Mural de informações</h1>
      </header>

      <header className='desktop'>
        <h1>Mural de informações</h1>
      </header>

      <div className='botoesM'>
        
        <Link to={"/prevencao"}>
        <button className='prevencao'>Guia de Prevenção</button>
        </Link>
        
        <button>Contatos de Emergência</button>
        <button>Delegacia Eletrônica</button>
        <button>Como Assaltos Afetam às Vitmas</button>
        <button>UFABC em Combate aos Assaltos</button>
        <button>Cronongrama do Fretado</button>

      </div>

    </main>
  )
}

export default MuralS
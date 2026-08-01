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
        
        <Link to={"/contatos-de-emergencia"}>
        <button>Contatos de Emergência</button>
        </Link>

        <Link to={"/delegacia-eletronica"}>
        <button>Delegacia Eletrônica</button>
        </Link>
        
        <Link to={"/como-os-assaltos-afetam-o-psicologico-das-vitimas"}>
        <button>Como Assaltos Afetam às Vitmas</button>
        </Link>

        <Link to={"/ufabc-em-combate-aos-assaltos"}>
        <button>UFABC em Combate aos Assaltos</button>
        </Link>

        <a href="https://pu.ufabc.edu.br/horarios-dos-onibus" target="_blank" rel="noopener noreferrer"><button>Cronograma do Fretado</button></a>
        
      </div>

    </main>
  )
}

export default MuralS
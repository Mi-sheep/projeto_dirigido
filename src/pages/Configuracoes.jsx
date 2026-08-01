import React from 'react'
import { Link } from 'react-router-dom'


function Configuracoes() {
  return (
    <main>

      <header className='mobile'>
        <Link to={"/"}>
        <button>Volta</button>
        </Link>
        <h1>Configurações</h1>
      </header>

      <header className='desktop'>
        <h1>Configurações</h1>
      </header>

      <div className='botoesConfig'>
        <button>Sobre o aplicativo</button>
        <button>Acessibilidade</button>
        <button>Reporte de erros e sugestões</button>
      </div>
    </main>
  )
}

export default Configuracoes
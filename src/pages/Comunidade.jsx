import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/icon-voltar.png'
import { Link } from 'react-router-dom'
import { supabase } from '../createClient'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Container = styled.div`
  min-height: 100dvh;
  padding: 1.25rem;
  box-sizing: border-box;

  header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    margin-bottom: 1.25rem;
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

  h1{
    flex: 1;
    text-align: center;
    color: ${theme.texto};
    margin: 0;
  }

  .secao-titulo {
    font-size: 2rem;
    font-weight: 400;
    margin: 1.5rem 0 0.5rem 0;
    color: ${theme.texto};
  }

  .carrossel-graficos {
    display:flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
  }

  .card-estatistica {
    background-color: ${theme.fundoCards};
    border: 0.1rem solid ${props => props.theme.fundoCampos};
    border-radius: 0.25rem;
    padding: 1rem;
    min-width: 18rem;
    max-width: 20rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .topo-grafico {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.texto};
    margin-bottom: 0.75rem;
  }

  .numero-total {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${theme.texto};
    margin: auto 0;
    text-align: center;
  }

  .lista-ruas {
    margin: 0;
    padding-left: 1.25rem;
    color: ${theme.texto};
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .lista-historico {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-ocorrencia {
    background-color: ${theme.fundoCards};
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    padding: 0.75rem;
  }

  .topo-ocorrencia {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .tag-info {
    background-color: ${theme.fundoCampos};
    padding: 0.25rem 0.75rem;
    font-size: 0.85rem;
    border-radius: 0.15rem;
    color: ${theme.texto};
  }

  .descricao-ocorrencia {
    background-color: ${theme.fundoCampos};
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
    min-height: 4rem;
    border-radius: 0.15rem;
    color: ${theme.texto};
  }
`



function Comunidade() {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [dadosGrafico, setDadosGrafico] = useState({ labels: [], datasets: [] });
  const [totalregistrado, setTotalRegistrado] = useState(0);
  const [ruasMaisFrequentes, setRuasMaisFrequentes] = useState([]);


  async function buscarDados() {
    const { data, error } = await supabase
    .from('ocorrencias')
    .select('*')
    .order('data_ocorrido', { ascending: false });

    if (error) {
      console.error('Erro ao buscar dados:', error);
      return;
    }

    console.log('Dados carregados:', data);

    atualizarEstados(data || []);
  }


  function atualizarEstados(dados) {
    setOcorrencias(dados);
    setTotalRegistrado(dados.length);
    processarDadoGrafico(dados);
    calcularRankingRuas(dados);
  }

  useEffect(() => {
    buscarDados();

    const canalOcorrencias = supabase
      .channel('mudancas-ocorrencias')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'ocorrencias' },
        () => {
          buscarDados();
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(canalOcorrencias);
    };
  }, []);


  function processarDadoGrafico(lista) {
    const todosMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ];
    const mesAtual = new Date().getMonth();
    let mesesDoQuadrimestre = [];
    let indicesDosMeses = [];

    if (mesAtual >= 0 && mesAtual <= 3) {
      mesesDoQuadrimestre = todosMeses.slice(0, 4);
      indicesDosMeses = Array.of(0, 1, 2, 3);
    } else if (mesAtual >= 4 && mesAtual <= 7) {
      mesesDoQuadrimestre = todosMeses.slice(4, 8);
      indicesDosMeses = Array.of(4, 5, 6, 7);
    } else {
      mesesDoQuadrimestre = todosMeses.slice(8, 12);
      indicesDosMeses = Array.of(8, 9, 10, 11);
    }

    const contagemQuadrimestre = Array(4).fill(0);

    lista.forEach(item => {
      if (item.data_ocorrido) {
        const [ano, mes, dia] = item.data_ocorrido.split('-');
        const mesIndex = parseInt(mes, 10) - 1;

        const posicaoNoQuadrimestre = indicesDosMeses.indexOf(mesIndex);
        if (posicaoNoQuadrimestre !== -1) {
          contagemQuadrimestre[posicaoNoQuadrimestre] += 1;
        }
      }
    });
  
  setDadosGrafico({
    labels: mesesDoQuadrimestre,
    datasets: [
      {
        label: 'Ocorrências',
        data: contagemQuadrimestre,
        backgroundColor: '#52b788',
        borderRadius: 4,
      },
    ],
  });
}


function calcularRankingRuas(lista) {
  const contagemRuas = {};

  lista.forEach(item => {
    if (item.regiao_ocorrido) {
      const nomeRua = item.regiao_ocorrido.trim();
      contagemRuas[nomeRua] = (contagemRuas[nomeRua] || 0) + 1;
    }
  });

  const rankingOrdenado = Object.keys(contagemRuas)
    .map(rua => ({ nome: rua, quantidade: contagemRuas[rua] }))
    .sort((a, b) => b.quantidade - a.quantidade)
    .slice(0, 3);

  setRuasMaisFrequentes(rankingOrdenado);
}

const opcoesGrafico = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  barPercentage: 0.6,
  scales: {
    y: { beginAtZero: true, ticks: { stepSize: 1 } },
    x: { grid: { display: false } }
  }
};


function formatarDataExibicao(dataStr) {
  if (!dataStr) return '';
  const [ano, mes, dia] = dataStr.split('-');
  return `${dia}/${mes}/${ano}`;
}


  return (
    <Container>
      <header>
      <Link to={"/"}>
        <button className="botao-voltar">
          <img className='iconeVoltar' src={iconVoltar} alt="Voltar" />
        </button>
      </Link>
        <h1 className="titulo">Estatísticas</h1>
      </header>

      <div className="carrossel-graficos">

        <div className="card-estatistica">
          <div className="topo-grafico"> Roubos Mensais</div>
          <div style={{flex: 1, minHeight:'6.25rem'}}>
            {dadosGrafico.labels.length > 0 && (
              <Bar data={dadosGrafico} options={opcoesGrafico} />
            )}
          </div>
        </div>

        <div className="card-estatistica">
          <div className="topo-grafico">Roubos totais registrados</div>
          <div className="numero-total">{totalregistrado}</div>
        </div>

        <div className="card-estatistica">
          <div className="topo-grafico">Regiões com mais ocorrências</div>
            <ol className="lista-ruas">
              {ruasMaisFrequentes.map((rua, index) => (
                <li key={index}>
                  <strong>{rua.quantidade}x</strong> - {rua.nome}
                </li>
              ))}
              {ruasMaisFrequentes.length === 0 && (
                <div style={{ opacity: 0.5 }}>Nenhum registro encontrado.</div>
              )}
            </ol>
        </div>
      </div>

      <h2 className="secao-titulo">Histórico</h2>

      <div className="lista-historico">
        {ocorrencias.map((oc) => (
          <div key={oc.Id || oc.id} className="card-ocorrencia">
            <div className="topo-ocorrencia">
              <span className="tag-info"><b>Região:</b> {oc.regiao_ocorrido || 'Não informado'}</span>
              <span className="tag-info"><b>Período:</b> {oc.periodo_ocorrido || 'Não informado'}</span>
              <span className="tag-info"><b>Data:</b> {formatarDataExibicao(oc.data_ocorrido)}</span>
            </div>
          <div className="descricao-ocorrencia">
            {oc.descricao || "Sem descrição disponível"}
          </div>
        </div>
        ))}

        {ocorrencias.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem 0', opacity: 0.5 }}>
            Nenhuma ocorrência registrada no momento.
          </div>
        )}
      </div>
    </Container>
  )
}

export default Comunidade
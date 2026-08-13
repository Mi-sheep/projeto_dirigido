import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import iconVoltar from '../assets/icon-voltar.png'
import { Link } from 'react-router-dom'
import { supabase } from '../createClient'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
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

  .titulo {
    color: ${theme.letraTitulo};
  }

  h1{
    flex: 1;
    text-align: center;
    color: ${theme.texto};
    margin: 0;
  }

  .secao-titulo {
    font-size: 2rem;
    font-weight: 600;
    margin: 1.5rem 0 0.5rem 0;
    color: ${theme.letraTitulo};
  }

  .carrossel-graficos {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 1.45rem;
  }

  .card-estatistica {
    background-color: ${theme.fundoCards};
    border: none;
    border-radius: 0.25rem;
    padding: 1rem;
    min-width: 18rem;
    max-width: 23rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  }

  .topo-grafico {
    font-size: 1.15rem;
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

    li {
      background-color: ${theme.fundoCampos};
      border-left: 0.25rem solid ${theme.botaoVoltar};
      padding: 0.6rem 0.75rem;
      border-radius: 0.15rem;
      font-size: 0.9rem;
      color: ${theme.texto};
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      min-height: 3rem;
    }

    .nomerua {
      flex: 1;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }

    .contador-alerta {
      font-weight: 700;
      font-size: 0.85rem;
      color: ${theme.texto};
      background-color: rgba(0, 0, 0, 0.05);
      padding: 0.2rem 0.5rem;
      border-radius: 0.15rem;
      white-space: nowrap;
    }
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

  .topo-ocorrencia {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.5rem;
    flex-direction: column;
  }

  .linha-regiao{
    display: flex;
  }

  .linha-info{
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  .linha-info .tag-info {
    flex: 1;
  }
  
  .regiao{
    flex: 1;
    white-space: normal;
  }

  @media(min-width:800px) {
    padding: 0 5rem;

    header {
      display: flex;
      align-items: left;
      padding: 0.5rem 0.25rem;
      margin-bottom: 1.25rem;
  }

    .titulo {
      flex: 1;
      text-align: left;
      font-size: 2.5rem;
      font-weight: 600;
      font-family: 'Inclusive Sans', sans-serif;
      color: ${theme.letraTitulo};
  }
    .carrossel-graficos{
      flex-direction: row;
      display: flex;
      justify-content: space-between;
    }

    .topo-ocorrencia{
        flex-direction: row;
        align-items: center;
      }

    .linha-regiao, .linha-info{
      flex: 1;
    }
    .regiao {
      flex: 2;
    }
    
  }
`



function Estatisticas() {
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
    const todosMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
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
          <div style={{ flex: 1, minHeight: '6.25rem' }}>
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
          <ul className="lista-ruas">
            {ruasMaisFrequentes.map((rua, index) => (
              <li key={index}>
                <span className="nome-rua" title={rua.nome}>
                  {rua.nome}
                </span>
                <span className="contador-alerta">
                  {rua.quantidade} {rua.quantidade === 1 ? 'registro' : 'registros'}
                </span>
              </li>
            ))}
            {ruasMaisFrequentes.length === 0 && (
              <div style={{ opacity: 0.5, padding: '1rem 0', fontSize: '0.9rem' }}>Nenhum registro encontrado.</div>
            )}
          </ul>
        </div>
      </div>

      <h2 className="secao-titulo">Histórico</h2>

      <div className="lista-historico">
        {ocorrencias.map((oc) => (
          <div key={oc.Id || oc.id} className="card-ocorrencia">
            <div className="topo-ocorrencia" style={{}}>
              <div className='linha-regiao'>
                <span className="tag-info regiao">
                  <strong>Região:</strong> {oc.regiao_ocorrido || 'Não informado'}
                </span>
              </div>

              <div className='linha-info'>
                <span className="tag-info">
                  <strong>Período:</strong> {oc.periodo_ocorrido || 'Não informado'}
                </span>
                <span className="tag-info">
                  <strong>Data:</strong> {formatarDataExibicao(oc.data_ocorrido)}
                </span>
              </div>
            </div>

            <div className="descricao-ocorrencia" sytle={{ marginTop: '0.5rem' }}>
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

export default Estatisticas
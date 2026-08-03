import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';

import styled from 'styled-components';
import { theme } from '../styles/theme'

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { Link, Navigate, useNavigate } from "react-router-dom";

import { supabase } from '../createClient';

//estilos

const Container = styled.div`
  * {
  font-family: Arial;
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
}

.map {
  height: 90vh;
  width: 150vh;
  margin: 0 auto;
}

.cluster_icon {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: aquamarine;
  transform: translate(-35%, -35%);
  align-items: center;
  justify-content: center;
  display: flex;
  color: black;
  font-size: 2rem;
  font-weight: 400;
} 


 header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    margin-bottom: 1.25rem;
    margin-left: 15rem;
    margin-right: 15rem;
  }


.logo {
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 0.5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  }

`;


function Map() {

//implementação do supabase

  const [ocorrencia, setOcorrencia] = useState([])
  console.log(ocorrencia)

  useEffect(() => {
    fetchOcorrencia()
  }, [])

  async function fetchOcorrencia(){
    const {data} = await supabase.from('ocorrencias').select('*')
    setOcorrencia(data)

  }

//ajustes do mapa

  const customIcon = new Icon({
    iconUrl: "https://api.iconify.design/mdi/map-marker.svg?color=%23ff0000",
    iconSize: [60, 60]
  })

  const customCluster = (cluster) => {
    return new divIcon({
      html: `<div class = "cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster"
    })
  }

  const formatarData = (data) => {

    const[ano, mes, dia] = data.split("-")
    return `${dia}/${mes}/${ano}`;
  }

  //ajuste do alerta
  const navigate = useNavigate()
  const [alerta, setAlerta] = useState(false)


  function OAlerta(){

    useMapEvents({
    click(p) {

      if(!alerta) return;

      navigate("/alerta", {
        state:{
          lati: p.latlng.lat,
          long: p.latlng.lng,
        }
      })
    }
  });
    return null;
  }


  return (
  <Container>
    <header>
      <img className='logo' src="https://api.iconify.design/mdi/shield.svg?color=%234285F4" alt="placeholder" />
      
      <h1 className='titulo'>UFAssalto</h1>

      <Link to={"/configuracoes"}>
      <button>Configurações</button>
      </Link>

    </header>
      
    <div className='mapa'>
      <MapContainer className = 'map' center = {[-23.64420573766554, -46.52851296697583]} zoom={19} minZoom={17}>

      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <OAlerta />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={customCluster}
      >

        {ocorrencia.map((ocorrencia) => (
            <Marker key={ocorrencia.id} icon ={customIcon} position={[ocorrencia.local_x, ocorrencia.local_y]}>
            <Popup> 
              <h4>Data do assalto: {formatarData(ocorrencia.data_ocorrido)}</h4>
              <p>Período: {ocorrencia.periodo_ocorrido}</p>
              <p>Região: {ocorrencia.regiao_ocorrido}</p>
              <p>Descrição: {ocorrencia.descricao}</p>

            </Popup>
            </Marker>
        ))
        }
      </MarkerClusterGroup>
    </MapContainer>

    </div>

  {/* botões de baixo */}

    <div className='botoes'>
      <Link to={"/comunidade"}>
      <button>Estatísticas</button>
      </Link>

      <button onClick={() => {setAlerta(!alerta); alerta ? alert("Selecione o botão novamente para ativar o modo de alerta") : alert("Selecione o local do assalto")}}>{alerta ? "Alerta!!" : "Alerta?"}</button>

      <Link to={"/murals"}>
      <button>Mural</button>
      </Link>
    </div>
      
  </Container>
    
  )
}

export default Map

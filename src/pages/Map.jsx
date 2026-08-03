import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';

import styles from "../styles/Map.module.css";

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { Link, Navigate, useNavigate } from "react-router-dom";

import { supabase } from '../createClient';

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
  <main>
    <header>
      <img src="https://api.iconify.design/mdi/shield.svg?color=%234285F4" style={{ width: "80px", height: "auto" }} alt="placeholder" />
      
      <h1>UFAssalto</h1>

      <Link to={"/configuracoes"}>
      <button>Configurações</button>
      </Link>

    </header>
      
    <div className='mapa'>
      <MapContainer className = {styles.map} center = {[-23.64420573766554, -46.52851296697583]} zoom={19} minZoom={17}>

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
              <h2>{ocorrencia.data_ocorrido}</h2>
            </Popup>
            </Marker>
        ))
        }
      </MarkerClusterGroup>
    </MapContainer>

    </div>

  {/* botões de baixo */}

    <div>
      <Link to={"/comunidade"}>
      <button>Estatísticas</button>
      </Link>

      <button onClick={() => {setAlerta(!alerta); alerta ? alert("Selecione o botão novamente para ativar o modo de alerta") : alert("Selecione o local do assalto")}}>{alerta ? "Alerta!!" : "Alerta?"}</button>

      <Link to={"/murals"}>
      <button>Mural</button>
      </Link>
    </div>
      
  </main>
    
  )
}

export default Map

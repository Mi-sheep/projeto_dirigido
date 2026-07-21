import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';

import styles from "../styles/Map.module.css";

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';


import { supabase } from '../createClient';

function Map() {

  const [Local, setLocals] = useState([])
  console.log(Local)

  
  useEffect(() => {
    fetchLocals()
  }, [])

  async function fetchLocals(){
    const {data} = await supabase.from('Local').select('*')
    setLocals(data)

  }

  const markers = [
  {
    geocode: [-23.645925645072236, -46.52744301775867],
    Popup: <h1 style={{color:"red"}}>Mim roubaram :(</h1>
  },
  {
    geocode: [-23.643176517570094, -46.528761168383795],
    Popup: <h1 style={{color:"blue"}}>Ufa, assaltei alguém :D</h1>
  }
  ];

  const customIcon = new Icon({
    iconUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/129.png",
    iconSize: [60, 60]
  });
  const customCluster = (cluster) => {
    return new divIcon({
      html: `<div class = "cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster"
    })
  }

  return (

    <MapContainer className = {styles.map} center = {[-23.64420573766554, -46.52851296697583]} zoom={19} minZoom={17}>

      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={customCluster}
      >

        {markers.map(marker => (
            <Marker position={marker.geocode} icon ={customIcon}>
            <Popup> 
              {marker.Popup}
            </Popup>
            </Marker>
        ))
        }
      </MarkerClusterGroup>
    </MapContainer>
  )
}


export default Map

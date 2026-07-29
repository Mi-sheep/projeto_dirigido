import { Routes, Route } from "react-router-dom"

import Map from "./components/Map"
import Comunidade from "./components/Comunidade"
import Configuracoes from "./components/Configuracoes"
import MuralS from "./components/MuralS"
import MuralP1 from "./components/MuralP1"
import Alerta from "./components/Alerta"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Map/>}/>
            <Route path="/alerta" element={<Alerta/>}/>
            <Route path="/comunidade" element={<Comunidade/>}/>
            <Route path="/configuracoes" element={<Configuracoes/>}/>
            <Route path="/murals" element={<Configuracoes/>}/>
            <Route path="/muralp1" element={<Configuracoes/>}/>            
        </Routes>
    )
}

export default Router
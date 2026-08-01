import { Routes, Route } from "react-router-dom"

import Map from "./pages/Map"
import Comunidade from "./pages/Comunidade"
import Configuracoes from "./pages/Configuracoes"
import MuralS from "./pages/MuralS"
import Prevencao from "./pages/Prevencao"
import Alerta from "./pages/Alerta"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Map/>}/>
            <Route path="/alerta" element={<Alerta/>}/>
            <Route path="/comunidade" element={<Comunidade/>}/>
            <Route path="/configuracoes" element={<Configuracoes/>}/>
            <Route path="/murals" element={<MuralS/>}/>
            <Route path="/prevencao" element={<Prevencao/>}/>            
        </Routes>
    )
}

export default Router
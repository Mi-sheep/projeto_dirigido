import { Routes, Route } from "react-router-dom"

import Map from "./pages/Map"
import Comunidade from "./pages/Comunidade"
import Configuracoes from "./pages/Configuracoes"
import MuralS from "./pages/MuralS"
import Prevencao from "./pages/Prevencao"
import Alerta from "./pages/Alerta"
import Contatos from "./pages/Contatos"
import Delegacia from "./pages/Delegacia"
import Consequencias from "./pages/Consequencias"
import Combate from "./pages/Combate"
import Referencias from "./pages/Referencias"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Map/>}/>
            <Route path="/alerta" element={<Alerta/>}/>
            <Route path="/comunidade" element={<Comunidade/>}/>
            <Route path="/configuracoes" element={<Configuracoes/>}/>
            <Route path="/murals" element={<MuralS/>}/>
            <Route path="/prevencao" element={<Prevencao/>}/>   
            <Route path="/contatos-de-emergencia" element={<Contatos/>}/>
            <Route path="/delegacia-eletronica" element={<Delegacia/>}/> 
            <Route path="/como-os-assaltos-afetam-o-psicologico-das-vitimas" element={<Consequencias/>}/>        
            <Route path="/ufabc-em-combate-aos-assaltos" element={<Combate/>}/>
            <Route path="/referencias" element={<Referencias/>}/>
        </Routes> 
    )
}

export default Router
import React, {useState} from 'react';
import './App.css';

import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';


function App() {

  const [estiloAtualizado, setEstiloAtualizado] = useState(true);

  return (
    <div className="">
      <Topo state={estiloAtualizado} setState={setEstiloAtualizado}/>
      <SecaoBanner state={estiloAtualizado}/>
      <SecaoExperienciaTrabalho state={estiloAtualizado}/>
      <Rodape state={estiloAtualizado}/>
    </div>
  );
}

export default App;

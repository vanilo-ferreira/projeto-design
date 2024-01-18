import React from 'react';
import './App.css';

import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';


function App() {
  return (
    <div className="">
      <Topo />
      <SecaoBanner />
      <SecaoExperienciaTrabalho />
      <Rodape />
    </div>
  );
}

export default App;

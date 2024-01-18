import React from 'react';
import './App.css';

import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';

function App() {
  return (
    <div className="">
      <Topo />
      <SecaoBanner />
      <SecaoExperienciaTrabalho />
    </div>
  );
}

export default App;

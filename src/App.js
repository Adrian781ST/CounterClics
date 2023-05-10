import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>

      </div>

      <div className='contenedor-principal'>
        <h1 className='letter-front'>CONTADOR DE CLIC'S</h1>
        <br></br>
        <Contador numClics={numClics} />

        <Boton 
          texto='CLIC'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton 
          texto='REINICIAR'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
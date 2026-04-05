import './App.css';
import ComponenteClase3 from './components/clase3/ComponenteClase3.jsx';
import ComponentePresentacion from './components/clase4/ComponentePresentacion.jsx';
import Props from './components/clase4/Props.jsx';
import States from './components/clase4/States.jsx';

function App() {
  return (
    <>
      <h1>Título</h1>
      {/* <ComponenteClase3/> */}
      {/* <Props titulo={"Título prop"} subtitulo={"Subtitulo"} /> */}
      {/* <States/> */}
      <ComponentePresentacion titulo1={"Coder House"} titulo2={"Curso de React JS"}/>
    </>
  )
}

export default App
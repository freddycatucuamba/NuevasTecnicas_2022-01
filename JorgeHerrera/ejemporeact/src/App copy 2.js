
import './App.css';

function App() {
  return (
    <div >
        <HelloWorld nombre= "david" titulo="estudiante"/>
        <HelloWorld nombre= "jorge"titulo="estudiante"/>
        <HelloWorld nombre= "maria" titulo="estudiante"/>
        <HelloWorld nombre= "freddy" titulo="estudiante"/>
    </div>
  );
}


function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      <h3>{props.nombre}</h3>
      <p> Funcion Hola ..{props.nombre}</p></div>
  )

}
export default App;

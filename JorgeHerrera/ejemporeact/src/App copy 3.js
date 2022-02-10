
import './App.css';

function App() {
  return (
    <div >
        
        <HelloWorld id="1" nombre= "Freddy" apellido="Catucuamba" edad="39"/>
        <HelloWorld id="2" nombre= "Jorge" apellido="Herrera" edad="24"/>
        <HelloWorld id="3" nombre= "Maria" apellido="Cardenas" edad="25"/>
    </div>
  );
}


function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      <h3>No: {props.id}</h3>
      <p>Apellido: {props.nombre}</p>
      <p>Apellido: {props.apellido}</p>
      <p>Edad: {props.edad}</p></div>

)

}
export default App;

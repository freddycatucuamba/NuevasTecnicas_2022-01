
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
        <HelloWorld id="1" nombre= "Freddy" apellido="Catucuamba" edad="59"/>
        <HelloWorld id="2" nombre= "Jorge" apellido="Herrera" edad="24"/>
        <HelloWorld id="3" nombre= "Maria" apellido="Cardenas" edad="25"/>
    </div>
  );
}

class HelloWorld extends React.Component {
  state = {
    visible: true
  } 
  render(){
    if(this.state.visible){

  return (
    <div id="hello">
        <h3>No: {this.props.id}</h3>
        <p>Nombre: {this.props.nombre}</p>
        <p>Apellido: {this.props.apellido}</p>
        <p>Edad: {this.props.edad}</p>
    </div>
)
}else {
  return (
    <div>sin datos</div>
  )  
 }
}
}
export default App;

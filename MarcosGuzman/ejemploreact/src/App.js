import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <HelloWorld nombre = "Marcos" cargo = "Estudiante" nombreFoto ="Recordatorio"/>
      <HelloWorld nombre = "Jorge" cargo = "Profesor" nombreFoto ="Recordatorio"/>
      <HelloWorld nombre = "Mayra" cargo = "Oyente" nombreFoto ="Recordatorio"/>
    </div>
  );
}

class HelloWorld extends React.Component{
  state = {
    visible: true
  }
  render(){
    if (this.state.visible){
      return (
        <div id="hello">
          <h1>{this.props.nombre}</h1>
          <h2>{this.props.cargo}</h2>
          <img src="https://farm4.staticflickr.com/3735/11801395743_3e95f00c43_z.jpg" width='200'/>
        </div>
      )
    }else{
      return(
        <div>No existen datos</div>
      )
    }
  }
}

/*
function HelloWorld(props){
  console.log(props)
  return (
    <div id="hello">
      <h3>{props.titulo}</h3>
      <p>Hello World con React desde una nueva funcion...!!! {props.nombre}</p>
    </div>
  )
}
*/

/*function formulario(props){
  return(
    <div id="formulario">
      <p>{props.nombre}</p>
      <p>{props.apellido}</p>
      <p>{props.materia}</p>
    </div>
  )
}*/

export default App;

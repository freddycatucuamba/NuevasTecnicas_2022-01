
import React from 'react';
import './App.css';

function App() {
  return (

    <div>
      <HelloWorld nombre = "Marcos" titulo = "estdiante" Foto/>
      <HelloWorld nombre = "Jorge" titulo = "estudiante" Foto/>
      <HelloWorld nombre = "Stalin" titulo = "docente" Foto/>
      <HelloWorld nombre = "Richard" titulo = "administrativo" Foto/>
      <HelloWorld nombre = "Mayra" titulo = "oyente" Foto/>
    </div>
  );
}

class HelloWorld extends React.Component{
 state={
    visible: true  
 }
  render(){
    if(this.state.visible){
      return(
    <div id= "">
        <h3>{this.props.titulo}</h3>
        <p>{this.props.nombre}</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg" width = '200'/>
    </div>
      )
    }
    else {
        return(
          <div> No existen datos</div>
        )
    }
  }
}

/*
function HelloWorld(props){
  console.log(props)
  return (
    <div id= "Hello">
      <h3>{props.titulo}
      </h3>
    <p>Hello World con React desde una nueva funcion...{props.nombre}
    </p>
  </div>
  )
}
*/
/*
function App() {
  return (

    <div>
      <Formulario nombre = "Marcos" apellido = "Guzman" edad = "20" titulo = "estudiante"/>
      <Formulario nombre = "Jorge" apellido = "Perez" edad = "20" titulo = "estudiante"/>
      <Formulario nombre = "Stalin" apellido = "Orozco" edad = "20" titulo = "docente"/>
    </div>
  );
}
function Formulario (props){
  console.log(props)
  return (
    
    <form>
  <label>
    Nombre:
    <p> {props.nombre} </p>
    Apellido:
    <p> {props.apellido} </p>
    Edad:
    <p> {props.edad} </p>
  </label>
  <div>
     <input type="submit" value="Submit" />
  </div>
</form>
   
  )
}
*/

export default App;

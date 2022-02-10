
import './App.css';
import React from 'react';

function App() {
  return (
    <div >
      <HelloWorld nombre="Mayra" titulo="Estudiante"/>
      <HelloWorld nombre="Ximena" titulo="Administrativo"/>
      <HelloWorld nombre="Fernanda" titulo="Docente"/>
      <HelloWorld nombre="Jhon" titulo="Oyente"/>
      <HelloWorld nombre="Richard" titulo="Estudiante"/>

      <Ejemplo nombre="Fernanda" apellido="Escobar" edad="25"/>
      <Ejemplo nombre="Jhon" apellido="Pinto" edad="26"/>
      <Ejemplo nombre="Richard" apellido="Altamirano" edad="22"/>
    </div>
  );
}

class HelloWorld extends React.Component{
  state={
    visible:true
  }
  
  cambiarEstado=()=>{
    this.setState({visible:!this.state.visible})
  }
  
  render(){
    if(this.state.visible){
    return(
      <div id="hello">
        <h1>Nombre:{this.props.nombre}</h1>
        <h1>Cargo:{this.props.titulo}</h1>
              
      <button onClick={this.cambiarEstado}>Cambiar estado</button>
      </div>
    )
    }else{
    return(
      <div id="hello2">
        <h1>No existen datos</h1>
        <button onClick={this.cambiarEstado}>Cambiar estado</button>
      </div>
    )
  }
  }
}


//const App=()=> <div><HelloWorld/></div>

/*class app2 extends React.Component{
  render(){
    return <div><HelloWorld/></div>
  }
}

const objeto={
  nombre:'Mayra',
  apellido: 'Carrion'
}


function HelloWorld(props){
  console.log(props)
  return(
    <div id="hello">
      <h3>{props.titulo}</h3>
      <p>Hello World con Reacr desde una nueva funcion...!!! {props.nombre}</p>
      </div>
  )
}
*/
function Ejemplo(props){
  console.log(props)
  return(
    <div id="hello">
      
      <p>- Nombre: {props.nombre}  - Apellido: {props.apellido}  - Edad:{props.edad}</p>
      
      </div>
  )
}

export default App;


import './App.css';
import React from 'react';
import Foto from './imgs/foto1.jpg';
import Foto2 from './imgs/foto2.PNG';
import Foto3 from './imgs/foto3.PNG';

function App() {
  return (
    <div>
        <Empleado id="1" nombre= "Jorge" apellido="Herrera" cargo="Tecnico IT" nombreFoto={Foto}/> 
        <Empleado id="2"nombre= "Freddy" apellido="Catucuamba" cargo="Docente" nombreFoto={Foto2}/> 
        <Empleado id="3" nombre= "Maria" apellido="Cardenas" cargo="Economista" nombreFoto={Foto3}/>        
    </div>
  );
}
class Empleado extends React.Component {
  state = {
    visible: true
  } 
  render(){
    if(this.state.visible){

  return (
    <div id="hello">
        <h5>No : {this.props.id}</h5>
        <h1>Nombre: {this.props.nombre}</h1>
        <h1>Apellido: {this.props.apellido}</h1>
        <h2>Cargo: {this.props.cargo}</h2>
        <img src={this.props.nombreFoto} width='200' />                
    </div>
)
}else {
    return (
      <div>Sin datos</div>
    )  
  }
 }
}
export default App;

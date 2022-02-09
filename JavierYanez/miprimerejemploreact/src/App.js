import { render } from 'react-dom';
import './App.css';
import React from 'react';
import p1 from './img/perfil1.png';
import p2 from './img/perfil2.png';
import p3 from './img/perfil3.png';

function App() {
  return (
    <div >
      <Empleado nombre="Andres Pesantes" cargo="Técnico" foto={p1}/>
      <Empleado nombre="Estefania Alvarado" cargo="Contador" foto={p2}/>
      <Empleado nombre="Jorge Rivera" cargo="Ventas" foto={p3}/>
    </div>
  );
}

class Empleado extends React.Component{
  state = {
    visible : true
  }

cambiarestado = ()=>  this.setState({
  visible: false
  })
  cambiarestado2 = ()=>  this.setState({
    visible: true
    })
    
  render(){
    if(this.state.visible){
      return(
        <div id="trabajador">
          <h1>Nomre: {this.props.nombre}</h1>
          <h2>Cargo: {this.props.cargo}</h2>     
          <button onClick={this.cambiarestado}>Cambiar estado</button>   
          <img src={this.props.foto} width='200'/>  
                
        </div>
      )
    }else{
      return(        
        <button onClick={this.cambiarestado2}>Mostrar</button>       
      )
    }
  }
}
export default App;
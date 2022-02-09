import './App.css';
import React from 'react';
import foto1 from './img/img1.jpg';
import foto2 from './img/img2.png';
import foto3 from './img/img3.jpg';

function App() {
  return (
    <div >
      <FichaEmpleado nombre="Mayra Carrion" cargo="Analista financiera" foto ={foto1}/>
      <FichaEmpleado nombre="Nicolas Carcelen" cargo="Bodeguero" foto ={foto2} />
      <FichaEmpleado nombre="Samantha Gonzalez" cargo="Gerente" foto ={foto3} />
    </div>
  );
}

class FichaEmpleado extends React.Component{
  state={
    visible:true
  }
  render(){
    if(this.state.visible){
    return(
      <div id="estilos">
        <h1>NOMBRE: {this.props.nombre}</h1>
        <h2>CARGO: {this.props.cargo}</h2>
        <img src={this.props.foto} width='200' />
      </div>
    )
  }else{
    return(
      <div>No existen datos</div>
    )
  }
  }
}

export default App;

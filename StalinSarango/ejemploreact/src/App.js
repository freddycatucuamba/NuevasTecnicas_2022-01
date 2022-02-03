// import logo from './logo.svg';
import React from 'react';
import './App.css';
import stalin from './assets/img/stalin.jpg';
import stalindev from './assets/img/stalindev.jpg';
import jo55 from './assets/img/Jo55.jpg';

// const image = require('../public/img/stalin.jpg'); 

function App() {
  return (
    <div>
      <Helloworld nombre="5talin"
        apellido="Sarango"
        edad="27"
        cargo="Gerente"
        titulo="Empleado1"
        nombreFoto1={stalin} height='50'

      />

      <Helloworld nombre="Carlos"
        apellido="Perez"
        edad="18"
        cargo="Desarrollador"
        titulo="Empleado2"
        nombreFoto2={stalindev} height='50'
      />

      <Helloworld nombre="Jo55"
        apellido="Murillo"
        edad="22"
        cargo="Diseñador Grafico"
        titulo="Empleado3"
        nombreFoto3={jo55} height='50'
      />
    </div>
  );
}

class Helloworld extends React.Component {
  state = {
    visible: true
  }
  render() {
    if (this.state.visible) {

      return (
        <div id="hello">
          <h3>{this.props.titulo}</h3>
          <h1>{this.props.nombre}</h1>
          <h2>{this.props.cargo}</h2>
          <div className="img">
          </div>
          <img src={this.props.nombreFoto1} width='200' />
          <img src={this.props.nombreFoto2} width='200' />
          <img src={this.props.nombreFoto3} width='200' />
        </div>
      )
    } else {
      return (

        <div>No extisten datos</div>
      )
    }
  }
}


// function Helloworld(props){
//   console.log(props)
//   return (
//     <div id="hello">
//       <h3>{props.titulo}</h3>
//       <p>{props.nombre} {props.apellido} <br/>
//       {props.edad} años</p>
//     </div>
//   )
// }

export default App;

import React from 'react';
import './App.css';
import foto1 from './img/foto1.jpg';
 import foto2 from './img/foto2.jpg'; 
 import foto3 from './img/foto3.jpg';


function App() {
  return (
    <div>
    <FichaEmpleado nombre="RICHARD ALTAMIRANO" cargo="GERENTE" foto={foto3} />
    <FichaEmpleado nombre="REBECA ALVAREZ" cargo="ADMINISTRACION" foto={foto1} />
    <FichaEmpleado nombre="RACHEL GARCIA" cargo="TECNICA" foto={foto2} />
    </div>
  );
}


class FichaEmpleado extends React.Component{ 
  state={
  visible:true
  }
  render(){ if(this.state.visible){ return(
    <div id="hello">
    <h1>NOMBRE: {this.props.nombre}</h1>
    <h2>CARGO: {this.props.cargo}</h2>
    <img src={this.props.foto} width='200' />
    </div>
    )
    }else{ return(
    <div>No existen datos</div>
    )
    }
    }
    }
    
    
    export default App;
    


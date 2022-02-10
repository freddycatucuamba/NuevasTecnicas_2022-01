import './App.css';
import React from 'react';
import foto1 from './img/img1.jpg';


function App() {
  return (
    <div >
      <Encabezado foto ={foto1}/>
      <Datos />
      <Cuerpo />
      <Footer />
      
    </div>
  );
}

class Encabezado extends React.Component{
  state={
    visible:true
  }
  render(){
    if(this.state.visible){
    return(
      <div id="estilos">
        <h1>HOTEL "NUEVAS TÉCNICAS"</h1>
        <h2>FACTURACION</h2>
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

class Datos extends React.Component{
    state={
      visible:true
    }
    render(){
      if(this.state.visible){
      return(
        <div id="header">
          <h3>NÚMERO FACTURA: <input id="texto" type="text" placeholder="Ingrese un numero"></input></h3> 
          <h3>NOMBRE CLIENTE:
                <select id="boton">
                        <option>Richard Altamirano</option>
                        <option>Gustao Egas</option>
                        <option>Rebeca Alvarez</option>
                </select>
          </h3> 
          
          <h3>NOMBRE EMPLEADO:
            <select id="boton">
                            <option>Mayra Carrion</option>
                            <option>Sonia Carcelen</option>
                            <option>Rosa Gonzalez</option>
            </select>
          </h3>
         </div>
      )
    }else{
      return(
        <div>No existen datos</div>
      )
    }
    }
  }
  class Cuerpo extends React.Component{
    state={
      visible:true
    }
    render(){
      if(this.state.visible){
      return(
        <div id="footer">
          <h3>DESCRIPCION:</h3>
          <button type="button" id="boton">Agregar</button>
          <table class="table" id="table" >
            <thead class="">
                <tr>
                <th scope="col" width="100px">CODIGO</th>
                <th scope="col" width="100px">CANTIDAD</th>
                <th scope="col" width="250px">DESCRIPCION</th>
                <th scope="col" width="100px">VALOR</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>1</td>
                    <td>Habitacion individual</td>
                    <td>17.85</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
      )
    }else{
      return(
        <div>No existen datos</div>
      )
    }
    }
  }
class Footer extends React.Component{
    state={
      visible:true
    }
    render(){
      if(this.state.visible){
      return(
        <div id="footer">
          <h3>SUBTOTAL: <input type="text" placeholder="Subtotal"></input></h3>
          <h3>IVA: <input class="form-control form-control-lg" type="text" placeholder="Iva"></input></h3>
          <h3>TOTAL: <input class="form-control form-control-lg" type="text" placeholder="Total"></input></h3>
          <h3>ESTADO:
            <select id="boton">
                            <option>Cancelado</option>
                            <option>Pendiente</option>
                            <option>Anulada</option>
            </select>
            </h3>
          
          <button type="button" id="boton">Grabar</button>
          <button type="button" id="boton">Cancelar</button>
          <button type="button" id="boton">Imprimir</button>

          
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

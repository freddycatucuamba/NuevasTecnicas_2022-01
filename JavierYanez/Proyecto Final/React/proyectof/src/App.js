import './App.css';
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    
    <div>
      <body class="bg-light">
      <Usuario nombre= " Javier Yanez" cargo="Vendedor"/>   
      <Clientes nombre= "Seleccione un cliente"/>  
      <Habitacion nombre= "Seleccione una habitacion"/>   
      <br/>
      <Pago tipo ="Tipo pago"/>
      </body>       
    </div>
  );
}

class Usuario extends React.Component{
  state = {
    visible : true
  }
  render(){
    if(this.state.visible){
      return(        
        <div class="col-md-7 col-lg-8 mx-auto">          
          <h3 class="text-center display-4">Sistema Hotelero</h3>          
          <form>
                <label class="lead">
                  Ingresado con el nombre de Usuario : 
                  {this.props.nombre}
                </label><br/><br/>          
          </form>
        </div>       
      )
    }
  }
}

class Clientes extends React.Component{
  state = {
    visible : true
  }
  render(){
    if(this.state.visible){
      return(        
        <div class="card col-md-7 col-lg-8 mx-auto " style={{ width: 720  }} id="datos">
          <div class="card-body">
          <h4 class="mb-3  text-center">Datos personales</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Nombres</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>              
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Apellidos</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="email@gmail.com"/>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Direccion</label>
              <input type="text" class="form-control" id="address" placeholder="Av. Colon OE-7" required/>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Pais</label>
              <select class="form-select" id="country" required>
                <option value="">Seleccione un Pais</option>
                <option>Ecuador</option>
                <option>Argentina</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">Ciudad</label>
              <select class="form-select" id="state" required>
                <option value="">Seleccione una Ciudad</option>
                <option>Quito</option>
                <option>Cuenca</option>
                <option>Loja</option>
              </select>
            </div>
          </div>
          </form><br/>
          </div>        
        </div> 

      )
    }
  }
}

class Habitacion extends React.Component{
  state = {
    visible : true
  }
  render(){
    if(this.state.visible){
      return(
        <div class=" card col-md-7 col-lg-8 mx-auto" style={{ width: 720  }} id="reserva">
          <div class="card-body">
          <h4 class="text-center">Reserva de Habitaciones</h4>
            <form onSubmit={this.handleSubmit}>
                  <label class="form-label">
                    Seleccione el tipo de habitacion : 
                    <select class="form-select" value={this.state.value} onChange={this.handleChange}>
                      <option value="normal">Normal</option>
                      <option value="doble">Doble</option>
                      <option value="ejecutiva">Ejecutiva</option>
                      <option value="suite">Suite</option>
                    </select>
                  </label>
                  <input class="btn btn-info" type="submit" value="Mostrar" />
            </form>
            <form>
            <label class="form-label">Piso:</label><br></br>   
              <div class="form-check">            
              <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" disabled/>
              <label class="form-check-label" for="inlineCheckbox1">1(no disponible)</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">2</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                <label class="form-check-label" for="inlineCheckbox3">3 (no disponible)</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">4 </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                <label class="form-check-label" for="inlineCheckbox3">5 (no disponible)</label>
              </div>
              </div>        
              <div>
              <label>Extras: </label>
              <div class="form-floating" >
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ width: 450  }}></textarea>
                <label for="floatingTextarea2">Describir extras</label>
              </div>
              </div>       
              
            </form>
          </div>     
        </div>
       
      )
    }
  }
}

class Pago extends React.Component{
  state = {
    visible : true
  }
  render(){
    if(this.state.visible){
      return(        
        <div class="col-md-7 col-lg-8 mx-auto">       
          <form>
        <h4 class="mb-3">Pago</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked />
              <label class="form-check-label" for="credit">Tarjeta de Credito</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" />
              <label class="form-check-label" for="debit">Tarjeta de Debito</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" />
              <label class="form-check-label" for="paypal">Efectivo</label>
            </div>
          </div>

          

          <div class="row gy-3">
          <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Habitacion</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="Ejecutiva" disabled/>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">Num. Personas</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="2" disabled/>
            </div>
          <div class="col-md-6">
              <label for="cc-number" class="form-label">Sub Total</label>
              <input type="text" class="form-control" id="cc-number" placeholder="125.50 $" disabled/>
            </div>
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Total a Pagar</label>
              <input type="text" class="form-control" id="cc-name" placeholder="140.56 $" disabled/>
              <small class="text-muted">IVA incluido*</small>
            </div>            
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Confirmar Reserva</button>
          </form>
        </div>       
      )
    }
  }
}

export default App;

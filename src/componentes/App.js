import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import Gasto from './Gasto';
import '../css/App.css';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}

  }
  // Agregar un nuevo gasto al state
  agregarGasto = gasto => {
    // Tomar una copia del state actual
    const gastos = { ...this.state.gastos };

    //agregar el gasto al objeto del state
    gastos[`gastos${Date.now()}`] = gasto;

    // ponerlo en state
    this.setState({
      gastos
    })
  }

  render() {
    return (
        <div className="App container">
          <Header titulo='Control de Gastos Semanal' />
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
              <Formulario agregarGasto={this.agregarGasto}/>
              </div>
              <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <Gasto />
              </div>
            </div>
          </div>
        </div> 
    );
  }
}

export default App;

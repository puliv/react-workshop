import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

// ## Actividad
// Agregar una etiqueta donde se muestre un el valor de un contador inicializado en 0.
// Agregar boton que incremente en uno el contador.
// Agregar boton que reste uno al contador;
// Agregar boton que haga reset del contador volviendo a su valor inicial.

class App extends Component {
  render() {
    return (
      <div className="App">
        <button type="button">click!</button>
      </div>
    );
  }
}

export default hot(module)(App);

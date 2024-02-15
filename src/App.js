import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultUser from "./resources/default_user.jpg";
import './App.css';

class App extends Component {
  render(){
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand desplazoDerecha">
            Agenda
          </a>
          <div className="navbar-nav mr-auto d-flex align-items-center">
            <li className="nav-item mb-0">
              <a className="nav-link">
                Añadir persona
              </a>
            </li>
            </div>
            <div className="container-profile d-flex align-items-center">
            <li className="nav-item">
              <p className="text-light mb-0">Nombre Perfil</p>
            </li>
            <img className="contenedor-redondo" src = {defaultUser}/>
            </div>
        </nav>
        </div>
        <div className="fondoAgenda">

        </div>
      </div>
    );
  }
}

export default App;

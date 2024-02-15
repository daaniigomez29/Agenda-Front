import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultUser from "./resources/default_user.jpg";
import './App.css';
import SubMenuRegistered from "./components/subMenuRegistred";
import SubMenuUnregistered from "./components/subMenuUnregistered";

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      userRegistered : false
    }
  }

  cargarMenu = () =>{
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu")
  }
  
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
              <p className="text-light">Nombre Perfil</p>
            </li>
            <img className="contenedor-redondo encimaImagen" src = {defaultUser} onClick={this.cargarMenu}/>
            </div>
           {this.state.userRegistered ? <SubMenuRegistered></SubMenuRegistered> : <SubMenuUnregistered></SubMenuUnregistered> /* Evalues if the user is registered/logged or not*/}
        </nav>
        </div>
        <div className="fondoAgenda">
          
        </div>
      </div>
    );
  }
}

export default App;

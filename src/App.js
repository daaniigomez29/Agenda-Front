import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render(){
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand">
            Agenda
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link">
                Añadir persona
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                
              </a>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

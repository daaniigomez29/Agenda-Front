import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultUser from "./resources/default_user.jpg";
import bisbal from "./resources/bisbal.jpeg";
import './App.css';
import SubMenuRegistered from "./components/subMenuRegistred";
import SubMenuUnregistered from "./components/subMenuUnregistered";
import ListContactBook from "./components/ListContactBook";
import EditPerson from "./components/EditPerson";
import AddPerson from "./components/AddPerson";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDetails from "./components/UserDetails"


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
    <Router>
    <div className="fondoAgenda">
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <img className="contenedor-redondo" src={bisbal}/>
          <a className="navbar-brand desplazoDerecha">
            Agenda
          </a>
          <div className="navbar-nav mr-auto d-flex align-items-center">
          <li className="nav-item">
              <Link to={"/person"} className="nav-link">
                Contactos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Añadir contacto
              </Link>
            </li>
            </div>
            <div className="container-profile d-flex align-items-end">
            <li className="nav-item">
              <p className="text-light">Nombre Perfil</p>
            </li>
            <img className="contenedor-redondo encimaImagen pointer" src = {defaultUser} onClick={this.cargarMenu}/>
            </div>
           {this.state.userRegistered ? <SubMenuRegistered></SubMenuRegistered> : <SubMenuUnregistered></SubMenuUnregistered> /* Evalues if the user is registered/logged or not*/}
        </nav>
        </div>
        <div className="positionDivRoute d-flex justify-content-center align-items-center">
          {/*El en switch se renderizarán todas los compoentes cuya URL coincidan con la activa*/}
            <Route exact path={["/", "/person"]} component={ListContactBook} />
            <Route path="/person/:id" component={EditPerson} />
            <Route exact path="/add" component={AddPerson} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={UserDetails} />

        </div>
      </div>
      </Router>
    );
  }
}

export default App;

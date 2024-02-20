import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'


class SubMenuRegistered extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="submenu-wrap" id="subMenu">
              <div className="submenu">
                <div className="user-info">
                <Link to={"/profile"} className="btn onLoginRegister">
                  Perfil
                </Link>
                <hr></hr>
                <Link to={"/Logout"} className="btn onLoginRegister">
                  Cerrar sesión
                </Link>
                </div>
              </div>
            </div>
         );
    }
}
 
export default SubMenuRegistered;
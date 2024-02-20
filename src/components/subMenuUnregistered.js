import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class SubMenuUnregistered extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="submenu-wrap" id="subMenu">
              <div className="submenu">
                <div className="user-info">
                <Link to={"/register"} className="btn onLoginRegister">
                  Registrarse
                </Link>
                <hr></hr>
                <Link to={"/login"} className="btn">
                  Iniciar sesión
                </Link>
                </div>
              </div>
            </div>
         );
    }
}
 
export default SubMenuUnregistered;
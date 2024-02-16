import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


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
                <a>Perfil</a>
                <hr></hr>
                <a>Cerrar sesión</a>
                </div>
              </div>
            </div>
         );
    }
}
 
export default SubMenuRegistered;
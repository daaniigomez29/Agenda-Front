import React, { Component } from 'react';

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
                <a>Registrarse</a>
                <hr></hr>
                <a>Iniciar sesión</a>
                </div>
              </div>
            </div>
         );
    }
}
 
export default SubMenuUnregistered;
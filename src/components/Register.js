import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Register extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className='container shadow container-register'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Registrarse</h3>
                    </div>
                </div>
                <div className='row rowSize'>
                    <div className='col-md-12'>
                        <p>Correo electrónico</p>
                        <input type="text" className='form-control'></input>
                    </div>
                </div>
                <div className='row rowSize'>
                    <div className='col-md-12'>
                        <p>Nombre de usuario</p>
                        <input type="text" className='form-control'></input>
                    </div>
                </div>
                <div className='row rowSize'>
                    <div className='col-md-12'>
                        <p>Contraseña</p>
                        <div className='d-flex'>
                            <input type="password" className='form-control'></input>
                            <button class="btn btn-outline-secondary" type="button" id="toggle-button" onclick="togglePasswordVisibility()">Mostrar</button>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-12'>
                        <button className='btn btn-info buttonSize'>Confirmar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
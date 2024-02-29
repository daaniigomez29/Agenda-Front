import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            visibility: false,
            inputCheck : false,
            inputCheckUsername: true,
            inputCheckPassword: true
        }
    }

    onChangeValue = (e) => {
        const nameValue = e.target.name;
        const formValue = e.target.value;
        this.setState({ [nameValue]: formValue}, () =>{
            this.checkInputs()
        })
    }

    togglePasswordVisibility = () => {
       !this.state.visibility ?  this.setState({ visibility: true }) :  this.setState({ visibility: false })
    }

    checkInputs = () =>{
        let email = this.state.email
        let username = this.state.username
        let password = this.state.password
        let contador = 0
        if(!email.includes("@gmail.com")){
           this.setState({
            inputCheck: false
           })
           contador++   
        }
        if(username.length > 0 && username.length < 5){
            this.setState({
                inputCheckUsername: false
            })
            contador++
        } else{
            this.setState({
                inputCheckUsername: true
            })
        }

        if(password.length > 0 &&  password.length < 6 || password.length > 9){
            this.setState({
                inputCheckPassword: false
            })
            contador++
        } else{
            this.setState({
                inputCheckPassword: true
            })
        }

        if(contador > 0){
            this.setState({
                inputCheck: false
            })
        } else{
            this.setState({
                inputCheck: true
            }) 
        }
    }

    render() {
        return (
            <div className='container-md-3 w-50 bg-white shadow d-flex justify-content-center align-items-center flex-column'>
                <div className='row mt-3'>
                    <div className='col-md-12 mb-3'>
                        <h3>Registrarse</h3>
                    </div>
                </div>
                <div className='row rowSize w-100'>
                    <div className='col-md-12'>
                        <p>Correo electrónico</p>
                        <input type="text" required name='email' value={this.state.email} onChange={this.onChangeValue} className='form-control shadow'></input>
                    </div>
                </div>
                <div className='row rowSize mt-5 w-100'>
                    <div className='col-md-12'>
                        <p>Nombre de usuario</p>
                        <input type="text" required name='username' value={this.state.username} onChange={this.onChangeValue} className='form-control shadow'></input>
                       {this.state.inputCheckUsername ?  "" : <h6 className='text-danger '>Se necesitan al menos 5 caracteres</h6>}
                    </div>
                </div>
                <div className='row rowSize mt-5 w-100'>
                    <div className='col-md-12'>
                        <p>Contraseña</p>
                        <div className='d-flex'>
                            <input type={this.state.visibility ? "text" : "password"} required name='password' value={this.state.password} onChange={this.onChangeValue} className='form-control shadow' />
                            <button class="btn btn-outline-secondary shadow" type="button" onClick={this.togglePasswordVisibility}>Mostrar</button>
                        </div>
                        {this.state.inputCheckPassword ?  "" : <h6 className='text-danger'>Se necesitan entre 6 y 9 caracteres</h6>}
                    </div>
                </div>
                <div className='row mt-5 w-100'>
                    <div className='col-md-12'>
                        <button className={`btn btn-info w-100 shadow ${this.state.inputCheck ? "" : "disabled"}`}>Confirmar</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 mt-3'>
                        <p>¿Tienes cuenta ya? Inicia sesión <Link to="/login">aquí</Link></p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
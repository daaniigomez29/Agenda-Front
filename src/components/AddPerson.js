import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactDataService from "../services/contactBook.service";
import AlertMessage from './AlertMessage';

class AddPerson extends Component {
    constructor(){
        super()
        this.checkInputs = this.checkInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            street: '',
            postalCode: 0,
            city: '',
            birthday: null,
            correctAdded : false,
            showMessageError: "d-none"
        }
    }

    componentDidMount = () => {
        
    }

    onChangeValue = (e) => {
        const nameValue = e.target.name;
        const formValue = e.target.value;
        this.setState({[nameValue]: formValue})  
    }
    
    handleSubmit = () =>{
        let data = this.state;
        this.setState({
            showMessageError : "",
        })
        
        if(this.checkInputs()){
            ContactDataService.addContact(data)
        .then(response =>{
            this.setState({
                correctAdded : true,
            })
            this.props.setLength(this.props.diaryLength + 1)
        })
        .catch(e =>{
            this.setState({
                correctAdded : false
            })
        })
        }
    }

    checkInputs = () =>{
        let contador = 0
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let street = this.state.street
        let postalCode = this.state.postalCode
        let city = this.state.city
        let birthday = this.state.birthday

        if(firstName == null || firstName.length == 0){
            contador++
            console.log("Error en nombre")
        }
        if(lastName == null || lastName.length == 0){
            contador++
            console.log("Error en apellidos")
        }
        if(street == null || street.length == 0){
            contador++
            console.log("Error en dirección")
        }
        if(postalCode == null || isNaN(postalCode) || postalCode.length == 0){
            contador++
            console.log("Error en cod postal")
        }
        if(city == null || city.length == 0){
            contador++
            console.log("Error en ciudad")
        }
        if(birthday == null || birthday.length == 0){
            contador++
            console.log("Error en cumpleaños")
        }
        console.log(contador)
        if(contador > 0){
            return false
        } else{
            return true
        }
    }

    render() {
        return (
            <div className="container shadow">
                {this.state.correctAdded ? 
                <AlertMessage typeAlert="success" showMessage={this.state.showMessageError} message="El contacto se ha añadido correctamente"/> : <AlertMessage typeAlert="danger" showMessage={this.state.showMessageError} message="El contacto no se ha podido añadir"/>
                }
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Nombre</label>
                        <input className='form-control shadow' required id='firstName' name='firstName' onChange={this.onChangeValue} placeholder='Introduzca el nombre del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Apellidos</label>
                        <input className='form-control shadow' id='lastName' required name='lastName' onChange={this.onChangeValue} placeholder='Introduzca los apellidos del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Dirección</label>
                        <input className='form-control shadow' id='street' required name='street' onChange={this.onChangeValue} placeholder='Introduzca la dirección del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Código postal</label>
                        <input className='form-control shadow' id='postalCode' required name='postalCode' onChange={this.onChangeValue} placeholder='Introduzca el código postal del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Ciudad</label>
                        <input className='form-control shadow' id='city' required name='city' onChange={this.onChangeValue} placeholder='Introduzca la ciudad del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <div className='row'>
                        <label className='form-label'>Fecha de nacimiento</label>
                        </div>
                        <input type='date' className='shadow' onChange= {(e) => this.setState({birthday : e.target.value})} value={this.state.birthday}></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                    <button onClick={() => this.handleSubmit()} className={`btn btn-primary ${this.props.diaryLength >= 50 ? "disabled" : ""} `}>Confirmar</button>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default AddPerson;
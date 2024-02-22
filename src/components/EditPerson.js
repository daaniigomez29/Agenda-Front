import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactDataService from "../services/contactBook.service";


class EditPerson extends Component {
    constructor(){
        super()
        let correctInput = true
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            street: '',
            postalCode: 0,
            city: '',
            birthday: null
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.setState({
            id: id
        })
        this.obtainValues(id)
    }

    obtainValues = (id) => {
        ContactDataService.getContact(id)
        .then(response =>{
            console.log(response.data)
            this.setState({
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                street : response.data.street,
                postalCode : response.data.postalCode,
                city : response.data.city,
                birthday : response.data.birthday
            })
        })
        .catch(e =>{
            console.log(e)
        })
    }

    onChangeValue = (e) => {
        const nameValue = e.target.name;
        const formValue = e.target.value;
        this.setState({[nameValue]: formValue})  
    }
    
    handleSubmit = () =>{
        let data = this.state;
        ContactDataService.editContact(this.state.id, data).
        then(response =>{
            console.log(response)
        })
        .catch(e =>{
            console.log(e)
        })
    }

    checkInputs = () =>{
        let contador = 0
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let street = this.state.street
        let postalCode = this.state.postalCode
        let city = this.state.city
        let birthday = this.state.birthday
    }

    render() {
        return (
            <div className="container position-formAddPerson shadow">
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Nombre</label>
                        <input className='form-control shadow' required id='firstName' value={this.state.firstName} name='firstName' onChange={this.onChangeValue} placeholder='Introduzca el nombre del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Apellidos</label>
                        <input className='form-control shadow' id='lastName' required name='lastName' value={this.state.lastName} onChange={this.onChangeValue} placeholder='Introduzca los apellidos del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Dirección</label>
                        <input className='form-control shadow' id='street' required name='street' value={this.state.street} onChange={this.onChangeValue} placeholder='Introduzca la dirección del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Código postal</label>
                        <input className='form-control shadow' id='postalCode' required name='postalCode' value={this.state.postalCode} onChange={this.onChangeValue} placeholder='Introduzca el código postal del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Ciudad</label>
                        <input className='form-control shadow' id='city' required name='city' value={this.state.city} onChange={this.onChangeValue} placeholder='Introduzca la ciudad del contacto'></input>
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
                        <button onClick={() => this.handleSubmit()} className='btn btn-primary'>Confirmar</button>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default EditPerson;
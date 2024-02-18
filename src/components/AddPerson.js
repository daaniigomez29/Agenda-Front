import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ContactDataService from "../services/contactBook.service";
import { Link } from "react-router-dom";

class AddPerson extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            street: '',
            postalCode: 0,
            city: '',
            birthday: new Date(),
        }
    }

    componentDidMount = () => {
        
    }

    onChangeValue = (e) => {
        const nameValue = e.target.name;
        const formValue = e.target.value;
        this.setState({[nameValue]: formValue})    
    }

    onChangeValueDate = (date) => {
        

        this.setState = ({
            birthday : date
        })
        
    }

    handleSubmit = () =>{
        let data = this.state;
        console.log(data)
        ContactDataService.addContact(data)
    }

    render() {
        return (
            <div className="container border border-dark">
                <form onSubmit={this.handleSubmit}>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Nombre</label>
                        <input className='form-control' id='firstName' name='firstName' onChange={this.onChangeValue} placeholder='Introduzca el nombre del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Apellidos</label>
                        <input className='form-control' id='lastName' name='firstName' onChange={this.onChangeValue} placeholder='Introduzca los apellidos del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Dirección</label>
                        <input className='form-control' id='street' name='firstName' onChange={this.onChangeValue} placeholder='Introduzca la diracción del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <label className='form-label'>Ciudad</label>
                        <input className='form-control' id='city' name='firstName' onChange={this.onChangeValue} placeholder='Introduzca la ciudad del contacto'></input>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <div className='row'>
                        <label className='form-label'>Fecha de nacimiento</label>
                        </div>
                        <DatePicker selected={this.state.birthday} onChange={this.onChangeValueDate} placeholderText='Seleccione la fecha de nacimiento del contacto' dateFormat={'dd/MM/yyyy'}></DatePicker>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-md-12'>
                        <button type='submit' className='btn btn-primary'>Confirmar</button>
                    </div>
                </div>
                </form>
            </div>
            
        );
    }
}
 
export default AddPerson;
import React, { Component } from 'react';
import ContactDataService from '../services/contactBook.service'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


class ListContactBook extends Component {
    constructor(props) {
        super(props);
        this.retrieveContacts = this.retrieveContacts.bind(this)
        this.refreshList = this.refreshList.bind(this)
        this.setActiveContact = this.setActiveContact.bind(this)
        this.delete = this.delete.bind(this)
        this.state = {
            contacts: [],
            currentContact: null,
            currentIndex: -1,
            searchName: "",
            contactsSearched : [],
            contactsFlag: []
        }
    }


    componentDidMount(){
        this.retrieveContacts()
    }

    retrieveContacts(){
        ContactDataService.getAll()
        .then(response =>{
            this.setState({
                contacts : response.data,
                contactsFlag : response.data
            });
        })
        .catch(e => {
            console.log(e)
        })
    }

    refreshList(){
        this.retrieveContacts();
        this.setState({
            currentContact: null,
            currentIndex: -1
        })
    }

    setActiveContact(contact, index){
        this.setState({
            currentContact: contact,
            currentIndex: index
        })
    }


    delete = (id) => {
        console.log(id)
        ContactDataService.deleteContact(id)
        .then(response =>{
            console.log(response)
        })
        .catch(e =>{
            console.log(e)
        })
        this.retrieveContacts()
    }

    onChangeSearcherName = (e) =>{
        let value = e.target.value

        this.setState({
            searchName : value
        })
    }

    searchName = () => {
        this.setState({
            contactsSearched : []
        })
        console.log(this.state.searchName)
        if(this.state.searchName != ""){
        for(let contact of this.state.contactsFlag){
            if(contact.firstName.includes(this.state.searchName)){
                    this.state.contactsSearched.push(contact)
            }
        }
        this.setState({
            contacts : this.state.contactsSearched
        })
    } else{
        this.setState({
            contacts : this.state.contactsFlag
        })
    }
    }
    
    render() { 
        const {contacts, currentContact, currentIndex, name, contactsSearched, contactsFlag} = this.state
        return ( 
            <div className='container container-contact-book border-dark h-75 shadow'>
                <div className='row border-dark'>
                    <div className='col-md-6'>
                    <h2>Agenda</h2>
                    </div>
                    <div className='col-md-6'>
                    <h2>Información de contacto</h2>
                    </div>
                </div>
                <div className='row'>
                <div className='col-md-6  border-dark h-75 '> {/* Columna izquierda lista de contactos*/}
                        <label>Buscador contacto</label>
                        <div className='mb-3'>
                        <div className='d-flex gap-2'>
                        <input type='text' className='form-control w-50' onChange={this.onChangeSearcherName} value={name} placeholder='Introduzca el nombre del contacto'></input>
                        <button type='submit' className='btn btn-primary' onClick={() => {this.searchName()}}>Buscar</button>
                        </div>
                        </div>
                    <ul className='list-group'>
                        {contacts && contacts.map((contact, index) => (
                            <li className={"list-group-item " + (index === currentIndex ? "active" : "")} onClick={() => this.setActiveContact(contact, index)} key={index}>
                                {contact.firstName + " "+  contact.lastName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='col-md-6  border-dark h-75'>  {/* Columna derecha info contacto*/}
                    {currentContact ? (
                        <div>
                            <div>
                                <label>
                                    <strong>Nombre: </strong>
                                </label>{" "}
                                {currentContact.firstName}
                            </div>
                            <div>
                                <label>
                                    <strong>Apellidos: </strong>
                                </label>{" "}
                                {currentContact.lastName}
                            </div>
                            <div>
                                <label>
                                    <strong>Calle: </strong>
                                </label>{" "}
                                {currentContact.street}
                            </div>
                            <div>
                                <label>
                                    <strong>Código postal: </strong>
                                </label>{" "}
                                {currentContact.postalCode}
                            </div>
                            <div>
                                <label>
                                    <strong>Ciudad: </strong>
                                </label>{" "}
                                {currentContact.city}
                            </div>
                            <div>
                                <label>
                                    <strong>Fecha de nacimiento: </strong>
                                </label>{" "}
                                {currentContact.birthday}
                            </div>
                            <div className='d-flex gap-2'>
                               <Link to={"/person/" + currentContact.id} className="badge bg-info">Editar</Link>
                               <button className="badge bg-danger" onClick={() => {this.delete(currentContact.id)}}>Eliminar</button>
                            </div>
                        </div>

                    ) : 
                    (
                        <div>
                        <p>Por favor seleccione un contacto...</p>
                        </div>
                    )
                        
                    }
                </div>
                </div>

            </div>
         );
    }
}
 
export default ListContactBook;
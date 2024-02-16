import React, { Component } from 'react';
import ContactDataService from '../services/contactBook.service'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


class ListContactBook extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contacts: [],
            currentContact: null,
            currentIndex: -1,
            searchDNI: ""
        }
    }


    componentDidMount(){
        this.retrieveContacts()
    }

    retrieveContacts(){
        ContactDataService.getAll()
        .then(response =>{
            this.setState({
                contacts : response.data
            });
            console.log(response.data)
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


    
    render() { 
        const {contacts, currentContact, currentIndex, dni} = this.state
        return ( 
            <div className='container container-contact-book  border-dark'>
                <div className='row  border-dark'>
                    <div className='col-md-6'>
                    <h2>Agenda</h2>
                    </div>
                    <div className='col-md-6'>
                    <h2>Información de contacto</h2>
                    </div>
                </div>
                <div className='row'>
                <div className='col-md-6  border-dark h-75 '> {/* Columna izquierda lista de contactos*/}
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
                            <div>
                               <Link to={"/person/" + currentContact.id} className="badge bg-info">Editar</Link>
                               <Link to={"/person/" + currentContact.id} className="badge bg-danger">Eliminar</Link>
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
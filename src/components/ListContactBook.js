import React, { Component } from 'react';
import ContactDataService from '../services/contactBook.service'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import goku_loop from "../resources/goku_kame_1_loop_fast_2.gif"
import bisbal_vegano from "../resources/bisbal_vegano.jpeg"


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
            contactsSearched: [],
            contactsFlag: [],
            progress: 0,
            currentPage: 1,
            contactsPerPage: 5
        }
    }


    componentDidMount() {
        this.retrieveContacts()
    }

    retrieveContacts() {
        ContactDataService.getAll()
            .then(response => {
                this.setState({
                    contacts: response.data,
                    contactsFlag: response.data,
                    progress: response.data.length
                });
            })
            .catch(e => {
                console.log(e)
            })
    }


    refreshList() {
        this.retrieveContacts();
        this.setState({
            currentContact: null,
            currentIndex: -1
        })
    }

    setActiveContact(contact, index) {
        this.setState({
            currentContact: contact,
            currentIndex: index
        })
    }

    delete = (id) => {
        if(window.confirm("Seguro que quieres borrar este contacto?")){
            ContactDataService.deleteContact(id)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        this.retrieveContacts()
        }
    }

    onChangeSearcherName = (e) => {
        let value = e.target.value

        this.setState({
            searchName: value
        })
    }

    searchName = () => {
        this.setState({
            contactsSearched: []
        })
        console.log(this.state.searchName)
        if (this.state.searchName != "") {
            for (let contact of this.state.contactsFlag) {
                if (contact.firstName.toLowerCase().includes(this.state.searchName.toLowerCase())) {
                    this.state.contactsSearched.push(contact)
                }
            }
            this.setState({
                contacts: this.state.contactsSearched
            })
        } else {
            this.setState({
                contacts: this.state.contactsFlag
            })
        }
    }

    render() {
        const { contacts, currentContact, currentIndex, name, contactsSearched, contactsFlag, currentPage, contactsPerPage } = this.state
        const indexOfLastContact = currentPage * contactsPerPage;
        const indexOfFirstContact = indexOfLastContact - contactsPerPage;
        const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact)
        let maxContacts = 50
        let pbValue = Math.round((this.state.progress / maxContacts) * 100)

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
                        <div className='row'>
                            <div className='d-flex gap-2'>
                                <input type='text' className='form-control w-50' onChange={this.onChangeSearcherName} value={name} placeholder='Introduzca el nombre del contacto'></input>
                                <button type='submit' className='btn btn-primary' onClick={() => { this.searchName() }}>Buscar</button>
                            </div>
                        <div className='d-flex align-items-center position_div_progress_img'>
                            <img src={goku_loop}/>
                            <div class="progress w-75 h-50 position_progress_bar triangulo">
                                <div class="progress-bar progress_an" role="progressbar" style={{ '--pbWidth': `${pbValue}%`, animation: `${this.state.progress > 1 ? "expandAnimation" : ""} 1s ease-in-out forwards`, animationDelay: '0s' }} aria-valuenow={pbValue} aria-valuemin="0" aria-valuemax="100" >{pbValue}%</div>
                            </div>
                        </div>
                        </div>

                        <div className='mb-4 mt-3'>
                        <ul className='list-group'>
                            {currentContacts.map((contact, index) => (
                                <li className={"list-group-item " + (index === currentIndex ? "active" : "")} onClick={() => this.setActiveContact(contact, index)} key={index}>
                                    {contact.firstName + " " + contact.lastName}
                                </li>
                            ))}
                        </ul>
                        </div> 
                    <nav>
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(contacts.length / contactsPerPage) }, (_, index) => (
                            <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
                                <button className="page-link" onClick={() => this.setState({ currentPage: index + 1 })}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
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
                                    <button className="badge bg-danger" onClick={() => { this.delete(currentContact.id) }}>Eliminar</button>
                                </div>
                                <div className='w-100 d-flex justify-content-center'>
                                <img src={bisbal_vegano}/>
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
import React, { Component } from 'react';
import ContactDataService from '../services/contactBook.service'

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
            <div className='container container-contact-book border border-dark'>
                <div className='row border border-dark'>
                <h2>Agenda</h2>
                </div>
                <div className='row'>
                <div className='col-md-6 border border-dark h-75'> {/* Columna izquierda lista de contactos*/}
                    <ul className='list-group'>
                        {contacts && contacts.map((contact, index) => (
                            <li className={"list-group-item" + (index === currentIndex ? "active" : "")} onClick={() => this.setActiveContact(contact, index)} key={index}>
                                {contact.firstName + " "+  contact.lastName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='col-md-6 border border-dark h-75'>  {/* Columna derecha info contacto*/}
                    <p>lkjlkjj</p>
                </div>
                </div>

            </div>
         );
    }
}
 
export default ListContactBook;
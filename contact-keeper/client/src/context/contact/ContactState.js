import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CONTACT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
 } from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1, 
                name: 'jill johnson',
                email: 'jill@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2, 
                name: 'Sara Watson',
                email: 'sara@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3, 
                name: 'Harryt White',
                email: 'harry@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact})
    }

    // Delete Contact

    // Set Current Contact


    // Clear current Contact


    // Update contact


    // Filter Contacts


    // Clear Filter



    return (
        <ContactContext.Provider 
        value={{
            contacts: state.contacts,
            addContact
        }}>
            { props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;
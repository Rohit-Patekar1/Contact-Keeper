import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
    }, []);

    if (contacts == null) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>

            { filtered !== null ?
                filtered.map(contact => (
                    <ContactItem key={contact._id} contact={contact} />
                ))
                : contacts.map(contact => (
                    <ContactItem key={contact._id} contact={contact} />
                ))
            }
        </Fragment>
    )
}

export default Contacts;
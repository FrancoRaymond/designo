import React from 'react'
import ContactForm from '../components/contacts/ContactForm'
import ContactLocations from '../components/contacts/ContactLocations'

const Contacts = () => {
  return (
    <div className='py-16 overflow-x-clip'>
        <ContactForm />
        <ContactLocations />
    </div>
  )
}

export default Contacts

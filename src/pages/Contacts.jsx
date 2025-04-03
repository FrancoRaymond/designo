import React from 'react'
import ScrollTop from '../components/ScrollTop'
import ContactForm from '../components/contacts/ContactForm'
import ContactLocations from '../components/contacts/ContactLocations'

const Contacts = () => {
  return (
    <div className='py-16 overflow-x-clip'>
      <ScrollTop />
      <ContactForm />
      <ContactLocations />
    </div>
  )
}

export default Contacts

import React from 'react'
import Header from '../components/Header'
import ContactUs_Hero from '../components/contactus components/ContactUs_Hero'
import Footer from '../components/Footer'
import ContactUs_Form from '../components/contactus components/ContactUs_Form'
import ContactUs_Ourofice from '../components/contactus components/ContactUs_Ourofice'
import ContactUs_Address from '../components/contactus components/ContactUs_Address'
import ContactUs_WorldClock from '../components/contactus components/ContactUs_WorldClock'

const Contactus = () => {
  return (
    <div>
      <Header/>
      <ContactUs_Hero/>
      <ContactUs_WorldClock/>
      <ContactUs_Form/>
      <ContactUs_Ourofice/>
      <ContactUs_Address/>
      <Footer/>
      
    </div>
  )
}

export default Contactus
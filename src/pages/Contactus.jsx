import React from "react";
import { lazy } from "react";

// import Header from '../components/Header'
// import ContactUs_Hero from '../components/contactus components/ContactUs_Hero'
// import Footer from '../components/Footer'
// import ContactUs_Form from '../components/contactus components/ContactUs_Form'
// import ContactUs_Ourofice from '../components/contactus components/ContactUs_Ourofice'
// import ContactUs_Address from '../components/contactus components/ContactUs_Address'
// import ContactUs_WorldClock from '../components/contactus components/ContactUs_WorldClock'

const Header = lazy(() => import("../components/Header"));
const ContactUs_Hero = lazy(
  () => import("../components/contactus components/ContactUs_Hero")
);
const ContactUs_WorldClock = lazy(
  () => import("../components/contactus components/ContactUs_WorldClock")
);
const ContactUs_Form = lazy(
  () => import("../components/contactus components/ContactUs_Form")
);
const ContactUs_Ourofice = lazy(
  () => import("../components/contactus components/ContactUs_Ourofice")
);
const ContactUs_Address = lazy(
  () => import("../components/contactus components/ContactUs_Address")
);
const Footer = lazy(() => import("../components/Footer"));

const Contactus = () => {
  return (
    <div>
      <Header />
      <ContactUs_Hero />
      <ContactUs_WorldClock />
      <ContactUs_Form />
      <ContactUs_Ourofice />
      <ContactUs_Address />
      <Footer />
    </div>
  );
};

export default Contactus;

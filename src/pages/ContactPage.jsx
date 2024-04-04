import React from 'react'
import Contact from '../components/Contact'
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';

const ContactPage = () => {

  const url = useLocation().pathname
  
  return (
    <div className="w-full mt-[136px] mb-24">
      <Contact />
      <BackButton url={url} />
    </div>
  );
}

export default ContactPage

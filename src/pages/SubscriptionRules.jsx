import React from 'react'
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

const SubscriptionRules = () => {
 
    const url = window.location.pathname
  return (
    <div className="w-full h-auto mx-auto flex justify-center">
      <div className="contact_info w-full max-w-[700px] flex h-auto mt-[170px] flex-col items-center bg-white rounded-2xl text-black pb-44 p-8 mb-44 mx-2 relative">
        <span className="w-full flex justify-center text-2xl font-semibold border-b border-black pb-2">
          Inschrijving
        </span>
        <div className="w-full flex-col flex text-[18px] justify-center my-4 leading-8">
          <span className="tracking-wide ">
            Iedere cursusavond kost 5 euro, tenzij anders vermeld.
            <br />
            Zoomgroepen zijn gratis. <br />
            Voor wie de eigen bijdragen te hoog is, laat het ons weten, stuur
            een{" "}
            <Link to="/contactform">
              <span className="text-lg text-red-800 font-semibold underline">
                mail.
              </span>
            </Link>
            <br />
            Betalen kan per bank. Maak €5,- per cursusavond over op
            rekeningnummer:
            <br />
          </span>
          <span className="font-semibold">
            NL&nbsp;32&nbsp;INGB&nbsp;0000449815 t.n.v. PROTESTANTSE GEMEENTE IN
            ZAKE T&E
          </span>
          <div className="w-full flex justify-center mt-8">
            <span>Graag tot ziens!</span>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-yellow-950/5 flex justify-center items-center pb-20 rounded-b-2xl border-b border-stone-500">
          <BackButton url={url} />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionRules

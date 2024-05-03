import React from 'react'
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import pen from "../assets/icons/pen.png"

const SubscriptionRules = () => {

  const url = useLocation().pathname
 
  return (
    <div className="w-full h-auto mx-auto flex justify-center">
      <div className="contact_info w-full max-w-[700px] flex h-auto mt-[170px] flex-col items-center bg-white 
      rounded-2xl text-black pb-44 px-8 pt-8 mb-44 mx-2 relative max-xxxsm:px-4">
        <div
          className="contact_text w-full h-[100px] flex text-2xl text-white font-semibold justify-center items-center 
          bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 relative overflow-hidden"
        >
          <span className="z-10">Betaling en Inschrijving</span>
          <div className="absolute -right-4 bottom-4">
            <img src={pen} alt="" className="w-[180px] opacity-80" />
          </div>
        </div>
        <div className="w-full flex-col flex text-[18px] justify-center my-4 leading-8">
          <span className="tracking-wide ">
            Iedere cursusavond kost 5 euro, tenzij anders vermeld. Zoomgroepen
            zijn gratis. <br />
            Voor wie de eigen bijdragen te hoog is, laat het ons weten, stuur
            een{" "}
            <Link to="/subscriptionrules/contactform">
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
            NL32&nbsp;INGB&nbsp;0000449815 t.n.v. PROTESTANTSE GEMEENTE IN
            ZAKE T&E
            <br />
            <span className="font-normal">
              Vermeld hierbij het kenmerk van de activiteit.
            </span>
          </span>
          <span><br />
            Inschrijven doe je d.m.v. het inschrijfformulier. Klik op 'Lees
            meer' in een van de activiteiten en klik vervolgens op 'Schrijf je in'.
          </span>
          <div className="w-full flex justify-center mt-12">
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

import React from 'react'
import BackButton from '../components/BackButton';

const SubscriptionRules = () => {

    const url = window.location.pathname
  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="contact_info w-full max-w-[700px] flex h-screen mt-[170px] flex-col items-center bg-white rounded-2xl text-black pb-2 p-8 mb-20 mx-2">
        <span className="w-full flex justify-center text-2xl font-semibold border-b border-black pb-2">Inschrijving</span>
        <div className="w-full flex-col flex text-[16px] justify-center my-4">
          <span className="tracking-wide leading-relaxed">
            Om je in te schrijven geld een bijdrage van &euro; 5, zoom-groepen
            zijn gratis. <br />
            Voor wie de eigen bijdragen te hoog is, laat het ons weten, of aan
            de gespreksleider of stuur een mail.
            <br />
            Betalen kan met pinpas of per bank.
            <br />
            Maak &euro;5,- over op rekeningnummer:
            <br />
          </span>
          <span className="font-semibold">
            NL32INGB0000449815 t.n.v. PROTESTANTSE GEMEENTE IN ZAKE T&E
          </span>
          <div className="w-full flex justify-center mt-8">
            <span>Graag tot ziens!</span>
          </div>
        </div>
        <BackButton url={url} />
      </div>
    </div>
  );
}

export default SubscriptionRules

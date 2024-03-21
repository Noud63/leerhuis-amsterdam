import React from 'react'

const SubscriptionRules = () => {
  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="contact_info w-full max-w-[700px] flex h-screen mt-[170px] flex-col items-center bg-white rounded-2xl text-black pb-2 p-8 mb-20">
        <span className="text-2xl font-semibold">Inschrijving</span>
        <div className="w-full flex-col flex text-[16px] justify-center my-4">
          <span>
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
      </div>
    </div>
  );
}

export default SubscriptionRules

import React from 'react' 
import muiderkerk from "/images/muiderkerk2.png"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';
import SectionTitle from '../components/SectionTitle';


const ZakelijkPage = () => {

const url = useLocation().pathname

  return (
    <div className="min-h-screen w-full max-w-[900px] mx-auto max-lg:w-full max-xxl:w-full mt-[180px] prose-lg px-4 mb-24">

      <SectionTitle className="flex justify-center text-[22px] py-1 shadow-md border-b border-yellow-900 mb-4 tracking-wide">
        Aanmelden
      </SectionTitle>
      
      <div>
            <span className="font-semibold underline">Aanmelden:</span><br />
            <span >Aanmelden doe je via de activiteitenpagina. Onderaan de tekst over de geselecteerde activiteit, zit de knop: Schrijf je in. Hieronder staan ook de gegevens over de (vrijwillige) betaling. </span><br />
            <span className="font-semibold underline">Locatie van bijeenkomsten:</span><br /> 
            <span >Muiderkerk, Linnaeusstraat 37, Amsterdam-Oost</span><br />
            <span >De Thomas, Prinses Irenestraat 36, Amsterdam-Zuid</span><br />
            <span >De Opgang, Tussen Meer 68, Amsterdam-West</span><br />
            <span className="font-semibold underline">Kosten:</span><br /> 
            <span>Meestal vrijwillige bijdragen ter dekking van de kosten (gebruik vergaderruimte, verwarming, toilet, koffie/thee, kopieën), cash of per bank. Richtlijn: €5,- per cursusbijeenkomst, € 10/15 voor lezing</span><br />
            <span className="font-semibold underline">Bankgegevens: </span><br />
            <span>NL32 INGB 0000449815 t.a.v. Protestantse gemeente inzake T&E.</span> 
        </div>

      <div>
        <div className="relative">
          <img src={muiderkerk} alt="muiderkerk" />
        <div className="w-full absolute -bottom-6 bg-white shadow-md pl-2 py-1 text-gray-500 text-base">Muiderkerk, Linnaeusstraat 37, Amsterdam</div>
        </div>
      </div>

      <BackButton url={url} />

    </div>
  );
}

export default ZakelijkPage

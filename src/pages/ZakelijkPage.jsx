import React from 'react' 
import muiderkerk from "/images/muiderkerk2.png"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';
import SectionTitle from '../components/SectionTitle';


const ZakelijkPage = () => {

const url = useLocation().pathname

  return (
    <div className="min-h-screen w-full max-w-[900px] mx-auto max-lg:w-full max-xxl:w-full pt-[180px] prose-lg px-2 mb-24 max-xxsm:pt-[170px]">

      <SectionTitle className="flex justify-center text-lg py-1 shadow-md border-b border-yellow-900 mb-4 tracking-wide">
        Aanmelden
      </SectionTitle>
      <div className="aanmelden bg-white px-4 pt-4 rounded-xl pb-10 shadow-md ">
      <div className="pt-2">
            <div className="mb-3">Aanmelden doe je via de activiteitenpagina. Onderaan de tekst over de geselecteerde activiteit, zit de knop: Schrijf je in. Hieronder staan ook de gegevens over de (vrijwillige) betaling. </div>
            <div className="font-semibold underline">Locatie van bijeenkomsten:</div>
            <div >Muiderkerk, Linnaeusstraat 37, Amsterdam-Oost</div>
            <div >De Thomas, Prinses Irenestraat 36, Amsterdam-Zuid</div>
            <div >De Opgang, Tussen Meer 68, Amsterdam-West</div>
            <div className="font-semibold underline mt-3">Kosten:</div> 
            <div>Meestal vrijwillige bijdragen ter dekking van de kosten (gebruik vergaderruimte, verwarming, toilet, koffie/thee, kopieën), cash of per bank. Richtlijn: €5,- per cursusbijeenkomst, € 10/15 voor lezing</div>
            <div className="font-semibold underline mt-3">Bankgegevens: </div>
            <div>NL32 INGB 0000449815 t.a.v. Protestantse gemeente inzake T&E.</div> 
        </div>

      <div>
        <div className="relative">
          <img src={muiderkerk} alt="muiderkerk" />
        <div className="w-full absolute -bottom-6 bg-white py-1 text-gray-500 text-base">Muiderkerk, Linnaeusstraat 37, Amsterdam</div>
        </div>
      </div>

      
</div>
<BackButton url={url} />
    </div>
  );
}

export default ZakelijkPage

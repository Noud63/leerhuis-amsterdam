import React from 'react'
import muiderkerk from "/images/muiderkerk2.png"
import { Link } from "react-router-dom";


const ZakelijkPage = () => {
  return (
    <div className="min-h-screen w-full max-w-[900px] mx-auto max-lg:w-full max-xxl:w-full mt-[180px] prose-lg px-4 mb-24">
      <div className="font-semibold pb-2 border-b border-black mb-4">
        Zakelijke informatie
      </div>
      <div>
        Alle activiteiten vinden plaats in de Muiderkerk, Linnaeusstraat 37, Amsterdam Oost, tenzij anders
        vermeld. <br />
        Informatie en opgave via leerhuisamsterdam@gmail.com, Graag zo spoedig
        mogelijk, uiterlijk een week voor aanvang van de cursus. <br />
        Website: leerhuisamsterdam.nl <br />
        Je bijdrage: vrijwillige bijdrage ter dekking van de kosten (gebruik
        vergaderruimte, verwarming, toilet, koffie/thee, kopieën). <br />
        Bankgegevens: NL32 INGB 0000449815 t.a.v. Protestantse gemeente inzake
        T&amp;E.  <br />
        Láter instappen in cursussen is vaak mogelijk. Vraag de cursusleider wat
        kan.
      </div>
      <div>
        <img src={muiderkerk} alt="muiderkerk" />
      </div>

      <div className="w-full flex justify-center mt-24">
        <Link to="/">
          <button
            type="button"
            className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
          >
            Terug
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ZakelijkPage

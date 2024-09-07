import React from 'react'
import muiderkerk from "/images/muiderkerk.png"

const ZakelijkPage = () => {
  return (
    <div className="min-h-screen w-full max-w-[900px] mx-auto max-lg:w-full max-xxl:w-full mt-[180px] prose-lg px-4">
      <div className="font-semibold pb-2 border-b border-black mb-4">
        Zakelijke informatie
      </div>
      <div>
        Plaats: Muiderkerk, Linnaeusstraat 37 Amsterdam Oost, tenzij anders
        vermeld. <br />
        Informatie en opgave via leerhuisamsterdam@gmail.com, Graag zo spoedig
        mogelijk, uiterlijk een week voor aanvang van de cursus. <br />
        Website: www.leerhuisamsterdam.nl <br />
        Je bijdrage: vrijwillige bijdrage ter dekking van de kosten (gebruik
        vergaderruimte, verwarming, toilet, koffie/thee, kopieën). <br />
        Bankgegevens: NL32 INGB 0000449815 t.a.v. Protestantse gemeente inzake
        T&amp;E.  <br />
        Láter instappen in cursussen is vaak mogelijk. Vraag de cursusleider wat
        kan.
      </div>
       <div><img src={muiderkerk} alt="muiderkerk" /></div>
    </div>
  );
}

export default ZakelijkPage

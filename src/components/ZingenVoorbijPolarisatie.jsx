import React from 'react'
import { Link } from 'react-router-dom';
import Activity from './Activity';

const ZingenVoorbijPolarisatie = ({act}) => {
  return (
    <div className="w-1/2 flex flex-col justify-between mt-4 pl-6 max-socials:border-0 max-socials:pl-0 max-socials:w-full">
      <div className="prose-lg py-4 max-xxsm:w-full">
        <div
          className="text-xl flex flex-row mb-4 tracking-wide text-black font-semibold
                    py-1 max-xxsm:flex-col max-xxsm:gap-0 border-b border-black"
        >
          <span># Zingen voorbij polarisatie</span>
        </div>
        <p className="my-2">
          Leerhuis Amsterdam voor Zinvol Samenleven Organiseert op
          zaterdagmiddag 5 april van 14.30-17.30 uur, in de Muiderkerk een
          middag over ‘Zingen voorbij polarisatie’. Bestemd voor kerkmusici,
          koren, liturgiecommissies, voorgangers en wie er maar van kerkmuziek
          houdt. De één houdt van opwekking, de ander van gregoriaans, de een
          van Goudimel, de ander van Oosterhuis. Sluiten de verschillende genres
          elkaar uit? Soms lijkt dat wel zo. Wij willen de polarisatie voorbij.
          Met Christiaan Winter, musici van binnen en buiten de PKA. Organisatie
          door Rijk van Ark en Flip Noordam.
          <br />
          Voor informatie en aanmelding: klik op "Lees meer" in onderstaande
          aankondiging.
          <br />
          Een middag o.l.v. kerkmusicus Christiaan Winter.
          <br />
          Met: Jan Cornelis Blokhuis, Elthetokerk, Herman Rouw, Dominicuskerk;
          Pieter Mark, Kamminga, Noorderkerk; Catharina Bonsel, Hofkerk; Flip
          Noordam, Muiderkerk.
        </p>
      </div>
      <div className="w-full max-w-[400px] max-xxsm:max-w-full">
        <Activity act={act} />
      </div>
    </div>
  );
}

export default ZingenVoorbijPolarisatie

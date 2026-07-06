import React from "react";
import SectionTitle from "../components/SectionTitle";

const JaarThema = () => {
  return (
    <div className="w-full flex flex-col max-w-[900px] max-lg:w-full max-xxl:w-full prose-lg">
      <SectionTitle
        className="flex justify-center flex-row font-normal tracking-wide max-xxsm:items-center 
                     py-1 max-xxsm:flex-col max-xxsm:gap-0"
      >
        <span>Jaarthema 2026-2027 : Zie de mens</span>

      </SectionTitle>
      <div className="w-full h-auto">
        <img src="/images/paus_ai.jpg" alt="" className="w-full h-auto object-cover mt-4 mb-5"/>
      </div>
      <header className="text-2xl font-semibold tracking-wide mb-4 max-xmd:text-xl">
        Hoe kunstmatige intelligentie de mens kan dienen en niet andersom
      </header>
      <span className="w-fit mb-3 font-semibold border-b border-black">
        Inleiding:
      </span>
      <span className="mb-3">
        Hoe behouden we menselijke waardigheid en sociale rechtvaardigheid nu
        digitalisering en met name kunstmatige intelligentie – of artificial
        intelligence (AI) – zich alsmaar sneller ontwikkelen? Daarover gaat de
        encycliek ‘Magnifica Humanitas. Schitterende mensheid’ (2026) van paus
        Leo XIV. We laten ons daardoor inspireren voor ons jaarthema in het
        seizoen 2026-2027: ‘Zie de mens’.{" "}
      </span>
      <span className="mb-3">
        Mensen zijn geschapen en gezegend door God, maar kunnen ook doorslaan in
        zelfoverschatting. De paus wil de razendsnelle opkomst van kunstmatige
        intelligentie theologisch doordenken vanuit de sociale leer van de
        Rooms-Katholieke kerk, vanuit menselijke relaties en hun recht op
        ontwikkeling op alle terreinen van het leven. Technologie kan daaraan
        bijdragen en daarmee God eren en de liefde dienen. Maar het kan ook
        leiden tot ontmenselijking, verdeeldheid of uitsluiting. Want
        technologie, zoals AI, is niet neutraal: het vertegenwoordigt de waarden
        van de mensen die het ontwikkelen en gebruiken. De paus staat stil bij
        de morele consequenties van AI op menselijke relaties, (het manipuleren
        van) de waarheid, de arbeidsmarkt, oorlog en vrede, ecologie,
        machtsverhoudingen en het ‘perfectioneren’ van de mens.{" "}
      </span>
      <span>
        Met het nieuwe jaarthema wil het Leerhuis het gesprek in de Amsterdamse
        kerken stimuleren over de huidige digitale revolutie, die een nieuwe
        fase inluidt in de wereldsamenleving waarvan wij deel uitmaken. Hoe kan
        kunstmatige intelligentie de mens dienen en niet andersom? We bereiden
        vier bijeenkomsten voor, waarvan één uitmondt in een cursus. Het
        programma is nog in ontwikkeling. Houd onze website in de gaten voor
        nieuwe informatie en aangevullende data!
      </span>
    </div>
  );
};

export default JaarThema;

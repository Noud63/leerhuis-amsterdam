import React from "react";
import globe from "../assets/images/globe2.png";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";
import Inmemoriam from "../components/Inmemoriam_wv";
import SectionTitle from "../components/SectionTitle";

const OveronsPage = () => {
  const url = useLocation().pathname;

  return (
    <div className="w-full flex pt-[180px] items-center px-8 relative max-xxxsm:px-4 mb-20">
      <div className="w-full min-h-screen">
        <div className="overons flex flex-col">
          <div className="w-full flex flex-row justify-between text-black font-normal gap-12 rounded-lg z-5 max-lg:flex-col">
            <div className="flex flex-1 flex-col leading-2 text-lg max-lg:w-full pb-20">
              <div className="border-b border-black mb-8 ">
                <span className="flex text-[#000] text-xl font-semibold pb-2">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full flex flex-row items-start justify-center max-xxl:flex-col max-xxl:items-center">
                <div className="max-xxl:w-full max-xxl:flex flex-col items-center max-xxsm:items-start">
                  <SectionTitle className="w-full max-w-[900px] flex justify-center text-xl max-sm:text-xl tracking-wide mb-4 py-1 ">
                    Leren in een complexe wereld
                  </SectionTitle>

                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full prose-lg pt-2 pb-4">
                    <p>
                      Het Leerhuis Amsterdam, onderdeel van de Muiderkerk/
                      Protestantse Kerk Amsterdam, nodigt kerkelijke en
                      niet-kerkelijke Amsterdammers uit om elkaar te ontmoeten
                      rond belangrijke thema's van deze tijd. <br />
                      We organiseren cursussen en inspiratiedagen die gaan over
                      zinvol en verantwoordelijk samenleven.
                      <br />
                      Via cursussen, lezingen, colleges en moedige gesprekken
                      zoeken we verdieping, andere perspectieven, en antwoorden
                      op de vraag: wat zullen wij doen?
                    </p>
                  </div>

                  <div className="w-full flex flex-col max-w-[900px] max-lg:w-full max-xxl:w-full mt-4 prose-lg">
                    <SectionTitle
                      className="flex justify-center flex-row font-normal mb-4 gap-2 tracking-wide max-xxsm:items-center 
                     py-1 max-xxsm:flex-col max-xxsm:gap-0"
                    >
                      <span>Jaarthema 2025-2027 :</span>
                      <span>Zie de mens</span>
                    </SectionTitle>

                    <div className="w-full h-auto">
                      <img
                        src="/images/paus_ai.jpg"
                        alt=""
                        className="w-full h-auto object-cover mt-4 mb-5"
                      />
                    </div>

                    <header className="text-lg mb-3">
                      Hoe kunstmatige intelligentie de mens kan dienen en niet
                      andersom
                    </header>
                    <span className="w-fit mb-3 font-semibold border-b border-black">
                      Inleiding:
                    </span>
                    <span className="mb-3">
                      Hoe behouden we menselijke waardigheid en sociale
                      rechtvaardigheid nu digitalisering en met name kunstmatige
                      intelligentie – of artificial intelligence (AI) – zich
                      alsmaar sneller ontwikkelen? Daarover gaat de encycliek
                      ‘Magnifica Humanitas. Schitterende mensheid’ (2026) van
                      paus Leo XIV. We laten ons daardoor inspireren voor ons
                      jaarthema in het seizoen 2026-2027: ‘Zie de mens’.{" "}
                    </span>
                    <span className="mb-3">
                      Mensen zijn geschapen en gezegend door God, maar kunnen
                      ook doorslaan in zelfoverschatting. De paus wil de
                      razendsnelle opkomst van kunstmatige intelligentie
                      theologisch doordenken vanuit de sociale leer van de
                      Rooms-Katholieke kerk, vanuit menselijke relaties en hun
                      recht op ontwikkeling op alle terreinen van het leven.
                      Technologie kan daaraan bijdragen en daarmee God eren en
                      de liefde dienen. Maar het kan ook leiden tot
                      ontmenselijking, verdeeldheid of uitsluiting. Want
                      technologie, zoals AI, is niet neutraal: het
                      vertegenwoordigt de waarden van de mensen die het
                      ontwikkelen en gebruiken. De paus staat stil bij de morele
                      consequenties van AI op menselijke relaties, (het
                      manipuleren van) de waarheid, de arbeidsmarkt, oorlog en
                      vrede, ecologie, machtsverhoudingen en het
                      ‘perfectioneren’ van de mens.{" "}
                    </span>
                    <span>
                      Met het nieuwe jaarthema wil het Leerhuis het gesprek in
                      de Amsterdamse kerken stimuleren over de huidige digitale
                      revolutie, die een nieuwe fase inluidt in de
                      wereldsamenleving waarvan wij deel uitmaken. Hoe kan
                      kunstmatige intelligentie de mens dienen en niet andersom?
                      We bereiden vier bijeenkomsten voor, waarvan één uitmondt
                      in een cursus. Het programma is nog in ontwikkeling. Houd
                      onze website in de gaten voor nieuwe informatie en
                      aanvullende data!
                    </span>
                  </div>

                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full mt-8">
                    <div className="font-semibold pb-2 mb-2">
                      <span className="border-b border-black pb-1">
                        De commissie van het Leerhuis:
                      </span>
                    </div>

                    <ul className="list-disc pl-5">
                      <li>Rijk van Ark</li>
                      <li>Tiers Bakker</li>
                      <li>Sandra Bos</li>
                      <li>Corinne Egberts</li>
                      <li>Gerben van Manen</li>
                      <li>Anneke Nolet</li>
                      <li>Greteke de Vries</li>
                    </ul>
                  </div>

                  <Inmemoriam />
                </div>

                <div className="">
                  <img
                    src={globe}
                    alt="globe"
                    className="pl-16 max-xxl:pr-20 max-xxxsm:pr-16 mt-12"
                  />
                </div>
              </div>

              <BackButton url={url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OveronsPage;

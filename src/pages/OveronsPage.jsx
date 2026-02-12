import React from "react";
import globe from "../assets/images/globe2.png";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";
import Inmemoriam from "../components/Inmemoriam_wv";
import SectionTitle from "../components/SectionTitle";

const OveronsPage = () => {

  const url = useLocation().pathname
  
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

                  <SectionTitle className="w-full max-w-[900px] flex justify-center text-xl max-sm:text-xl tracking-wide mb-4 py-1 ">Leren in een complexe wereld</SectionTitle>
                 
                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full prose-lg pt-2 pb-4">
                    <p>
                      Het Leerhuis Amsterdam, onderdeel van de Muiderkerk/ Protestantse Kerk Amsterdam, nodigt kerkelijke en niet-kerkelijke Amsterdammers uit om elkaar te ontmoeten rond belangrijke thema's van deze tijd.  <br />
                      We organiseren cursussen en inspiratiedagen die gaan over
                      zinvol en verantwoordelijk samenleven.
                      <br />
                     Via cursussen, lezingen, colleges en moedige gesprekken zoeken we verdieping, andere perspectieven, en antwoorden op de vraag: wat zullen wij doen?
                      
                    </p>
                  </div>

                <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full mt-4 prose-lg">
                    <SectionTitle
                      className="flex justify-center flex-row font-normal mb-4 gap-2 tracking-wide max-xxsm:items-center 
                     py-1 max-xxsm:flex-col max-xxsm:gap-0"
                    >
                      <span>Jaarthema 2025-2026 :</span>
                      <span>De (wan)hoop nabij</span>
                    </SectionTitle>
                    <p>De wanhoop nabij! Het is een uitroep die velen vandaag herkennen – in gesprekken over de verwording van onze samenleving, de klimaatcrises, oorlog en ontmenselijking, de snelle ontwikkeling van AI, gevoelens over het eind der tijden en ook chaos in persoonlijke levens. Deze wanhoop nemen we serieus. Wat is er aan de hand, om wie maken we ons zorgen, wat doet wanhoop met ons geloof? We stellen ook de vraag: wat als politieke verdeeldheid, geestelijke leegte, economische ongelijkheid, een kerk in krimpstand geen teken is van mislukking, maar het begin van iets nieuws, iets echts?</p>
                    <p>In drie interactieve bijeenkomsten, een lezingenreeks en een middagje zingen stellen we wanhoop niet tegenover hoop, maar proberen we haar te zien als een doorgang. De Bijbel leert ons om niet te vluchten in gemakkelijke antwoorden, maar om dwars door de afgrond heen te gaan – en daarin een geloof te vinden dat niet draait om succes, zekerheid of troost, maar om waarheid, kwetsbaarheid en bevrijding. Echte hoop komt ons nabij wanneer we onze schijnbare zekerheden durven loslaten. Omdat geloof niet betekent: “alles komt goed”, maar: “zelfs als alles uit elkaar valt, ben ik niet alleen”.</p> 
                     <p>De Cyclus 'De (wan)hoop nabij' wordt mogelijk gemaakt met steun van het <a href="https://protestantsekerk.nl/onderwerp/kerk-en-wereld/" style={{textDecoration:"underline"}}>Fonds Kerk en Wereld.</a></p>
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

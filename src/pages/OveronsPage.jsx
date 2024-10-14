import React from "react";
import globe from "../assets/images/globe2.png";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";

const OveronsPage = () => {

  const url = useLocation().pathname
  
  return (
    <div className="w-full flex pt-[180px] items-center px-8 relative max-xxxsm:px-4 mb-20">
      <div className="w-full min-h-screen">
        <div className="overons flex flex-col">
          <div className="w-full flex flex-row justify-between text-black font-normal gap-12 rounded-lg z-5 max-lg:flex-col">
            <div className="flex flex-1 flex-col leading-2 text-lg max-lg:w-full pb-20">
              <div className="flex justify-between border-b border-black mb-8 ">
                <span className="flex text-[#000] text-xl font-semibold pb-2">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full  flex flex-row items-start justify-center max-xxl:flex-col max-xxl:items-center">
                <div className="max-xxl:w-full max-xxl:flex flex-col items-center max-xxsm:items-start">
                  <span className="flex justify-center text-2xl max-sm:text-xl  font-semibold tracking-wide max-xxxsm:justify-start  mb-4">
                    Leren in een complexe wereld
                  </span>
                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full prose-lg border-t border-black pt-4">
                    <p>
                      Het Leerhuis Amsterdam nodigt kerkelijke en
                      niet-kerkelijke Amsterdammers uit om elkaar te ontmoeten
                      rond de belangrijke thema's van deze tijd. <br />
                      We organiseren cursussen en inspiratiedagen die gaan over
                      zinvol en verantwoordelijk samenleven.
                      <br />
                      Via ontmoeting en moedige gesprekken zoeken we verdieping,
                      andere perspectieven, en antwoorden op de vraag: wat
                      zullen wij doen?
                      <br />
                      Onze cursussen en bijeenkomsten zijn boeiend, inspirerend,
                      en zeker ook gezellig!
                      <br />
                      Het Leerhuis Amsterdam is verbonden aan de protestantse
                      Muiderkerk.
                      <br />
                      <br />
                    </p>
                  </div>

                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full mt-4 prose-lg">
                    <div className="font-normal mb-4 tracking-wide text-white bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-900 py-1 pl-4">
                      Thema voor 2024-2025: De polarisatie voorbij
                    </div>
                    Wie de waarheid in pacht heeft mag het zeggen.
                    <br />
                    In deze tijd nemen velen het woord om hun waarheid te
                    verkondigen, hun aanhang te vergroten en anderen verdacht te
                    maken.
                    <br />
                    Wat is het antwoord van de kerk en de bijbel op deze
                    polarisatie? Wat kunnen we leren van inspiratiebronnen
                    binnen en buiten de kerk die aangeven dat en hoe het anders
                    kan? Een andere taal leren spreken, luisteren en het eigen
                    oordeel uitstellen. Verbinding zoeken in woord, gebaar en
                    muziek. Dat is wat we beogen met ons programma. <br />
                    We sluiten hiermee nauw aan bij de agenda van de
                    Protestantse Kerk Amsterdam die op allerlei manieren het
                    gesprek zoekt bij actuele thema’s in de stad. <br />
                    <br />
                    Het thema Polarisatie wordt uitgewerkt in drie grotere
                    bijeenkomsten en in een aantal van de activiteiten die
                    hieronder aangegeven staan. <br />
                    De drie bijeenkomsten over ‘de polarisatie voorbij’ zijn:
                    <br />
                    <span className="font-semibold text-2xl">*</span> Zaterdag 2
                    november, 14:30-17:30 uur. Wat is polarisatie, waardoor
                    ontstaat het, wat doet het met ons en met de wereld om ons
                    heen?
                    <br />
                    <span className="font-semibold text-2xl">*</span> Zaterdag 8
                    februari, 14:30-17:30 uur. Wat leren het christelijk geloof
                    en andere bronnen van inspiratie bijvoorbeeld over
                    verbindende en uitsluitende waarheid? 
                    <br />
                    <span className="font-semibold text-2xl">*</span> Zaterdag
                    24 mei, 14:30-17:30 uur. Hoe reageren we op polarisatie in
                    ons dagelijks leven? Hoe gaan we om met ongemak en emoties?
                    En hebben we antwoorden of richting gevonden voor wat ons te
                    doen staat?
                  </div>

                  <div className="mt-8">
                    Klik op onderstaande link voor meer informatie:
                  </div>

                  <div className="w-full flex justify-center mt-16 pb-8 mb-8 max-mini:pb-4">
                    <Link to="/polarisatie">
                      <button
                        type="button"
                        className="btn w-[250px] rounded-full justify-center items-center text-[#000] border-2 border-black gap-2  leading-8 p-2 text-md font-semibold"
                      >
                        De polarisatie voorbij
                      </button>
                    </Link>
                  </div>

                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full mt-12">
                    <div className="font-semibold pb-2 mb-2">
                      <span className="border-b border-black pb-1">
                        De commissie van het Leerhuis:
                      </span>
                    </div>

                    <ul className="list-disc pl-5">
                      <li>Rijk van Ark</li>
                      <li>Corinne Egberts</li>
                      <li>Gerben van Manen</li>
                      <li>Anneke Nolet</li>
                      <li>Wilken Veen</li>
                      <li>Greteke de Vries</li>
                    </ul>
                  </div>
                </div>

                <div className="">
                  <img
                    src={globe}
                    alt="globe"
                    className="pl-8 max-xxl:pr-20 max-xxxsm:pr-16 mt-12"
                  />
                </div>
              </div>

              {/* <div className="w-full flex justify-center mt-24">
                <Link to="/">
                  <button
                    type="button"
                    className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
                  >
                    Terug
                  </button>
                </Link>
              </div> */}
              <BackButton url={url}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OveronsPage;

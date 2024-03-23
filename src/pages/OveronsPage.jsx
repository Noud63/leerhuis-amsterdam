import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import globe from "../assets/images/globe2.png";

const OveronsPage = () => {
  const url = window.location.pathname;

  return (
    <div className="w-full flex pt-[180px] items-center px-8 relative max-xxxsm:px-4">
      <div className="w-full min-h-screen">
        <div className="overons flex flex-col">
          <div className="w-full flex flex-row justify-between text-black font-normal gap-12 rounded-lg z-5 max-lg:flex-col">
            <div className="flex flex-1 flex-col leading-2 text-lg max-lg:w-full pb-20">
              <div className="flex justify-between border-b border-black mb-8 max-mini:mb-4">
                <span className="flex text-[#000] text-2xl font-semibold pb-2">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full  flex flex-row items-start justify-center max-xxl:flex-col max-xxl:items-center">
                <div className="max-xxl:w-full max-xxl:flex flex-col items-center">
                  <span className="flex justify-center text-xl text-orange-700 font-semibold pb-4 max-xxxsm:justify-start">
                    Leven in een complexe wereld
                  </span>
                  <div className="w-full max-w-[900px] max-lg:w-full max-xxl:w-full">
                    <p>
                      Leerhuis Amsterdam nodigt kerkelijke en niet-kerkelijke
                      Amsterdammers uit om elkaar te ontmoeten rond de
                      belangrijke thema's van deze tijd. We organiseren
                      cursussen en inspiratiedagen die gaan over zinvol en
                      verantwoordelijk samenleven. Via ontmoeting en moedige
                      gesprekken zoeken we verdieping en verbreding. 
                      <br />
                      Leerhuis Amsterdam nodigt je uit voor 'moedige
                      egesprekken' met het oog op vragen, over hoe we met elkaar
                      zinvol kunnen samenleven .<br />
                      Rond de bespreking van een boek of een thema ontstaat voor
                      een tijdje een gemeenschap. Daarin hebben we aandacht voor
                      ieders geloof, spiritualiteit, filosofisch en
                      levensbeschouwend perspectief. Verras elkaar met je
                      leergierigheid, je vrijmoedig dóórvragen en soms ook met
                      je levenservaringen, wanneer je die wilt delen.
                      <br />
                      Betekenis vinden, op ideeën komen, door ontmoeting en
                      dialoog. Daar draait het om. En mogelijk heb je er ook wat
                      aan in gesprekken met vrienden, familie, tijdens je werk,
                      bij je morele en politieke keuzes of in je
                      geloofsgemeenschap. Zo'n zinvolle doorwerking van wat we
                      met en van elkaar leren zou mooi zijn!
                      <br />
                      Trouwens: heb je zélf een onderwerp dat je wilt bespreken
                      met anderen, laat het ons weten, dan kijken we of en
                      wanneer het past.
                      <br />
                      We kijken naar jullie uit!
                      <br />
                      <br />
                      De commissie van het Leerhuis:
                      <br />
                      Rijk van Ark
                      <br />
                      Liemo de Boer
                      <br />
                      Corinne Egberts
                      <br />
                      Gerben van Manen
                      <br />
                      Anneke Nolet
                      <br />
                      Wilken Veen
                      <br />
                      Greteke de Vries
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src={globe}
                    alt="globe"
                    className="pl-8 max-xxl:pr-20 max-xxl:mt-8 max-xxxsm:pr-16"
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

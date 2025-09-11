import React from "react";
import { Link } from "react-router-dom";
import wandelaars from "../assets/images/wandelaars2.png"
import SectionTitle from "./SectionTitle";

const Overons = () => {
  return (

 
     
            <>

              <div
                className="w-full max-w-[1220px] flex flex-col items-center justify-center pt-8 mt-[160px] max-xxmd:mt-[140px]
                   max-xmd:flex-row max-xmd:items-center  max-xxsm:max-w-full mx-auto"
                 >
                <div className="w-full max-w-[1220px] flex flex-col justify-center max-xmd:flex-col max-xmd:max-w-full mx-4">
                  <div className="w-full mb-20">
                    <div className="overons_text flex items-center flex-col max-lg:w-full bg-gradient-to-t from-stone-100 via-white to-white rounded-xl 
                                    border-b-2 border-stone-300 text-black px-10 pt-12 pb-12 max-xxxsm:px-4 max-xxxsm:pt-10 relative">
                               <div className="w-full h-full absolute bottom-0 right-0 bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-cover bg-center opacity-30" />

                              <SectionTitle className="w-full flex justify-center text-2xl  p-2 mb-4  max-mini:text-[20px] shadow-md">
                                Leren in een complexe wereld
                              </SectionTitle>
                      
                          <div className="w-full max-w-[800px] mt-6 mb-16 prose-lg">
                                Het Leerhuis Amsterdam, onderdeel van de Muiderkerk/ Protestantse Kerk Amsterdam, nodigt kerkelijke en niet-kerkelijke Amsterdammers uit om elkaar te ontmoeten rond belangrijke thema's van deze tijd.
                            <div className="tolman w-full flex justify-center mt-12">
                                <img
                                src={wandelaars}
                                alt=""
                                className="w-full max-w-[700px] max-xmd:max-w-full"
                                />
                             </div>
                                Via cursussen, lezingen, colleges en moedige gesprekken zoeken we verdieping, andere perspectieven, en antwoorden op de vraag: wat zullen wij doen?<br />
                                De commissie van het Leerhuis bestaat dit seizoen uit: Rijk van Ark, Tiers Bakker, Sandra Bos, Corinne Egberts, Gerben van Manen, Anneke Nolet en Greteke de Vries

                                <br />
                                  <span className="w-full flex justify-center mt-12">
                                      Wees welkom!
                                </span>
                          </div>

                            <Link
                              to="/overonspage"
                              className="flex justify-center mb-8 z-10"
                            >
                              <button
                                type="button"
                                className="btn w-[150px] rounded-full justify-center items-center text-black border-2 border-black gap-2 pb-1 leading-8 pt-1 font-semibold"
                              >
                                Lees meer
                              </button>
                            </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          
        
    
  );
};

export default Overons;

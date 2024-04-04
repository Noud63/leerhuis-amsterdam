import React from "react";
import {useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import globe from "../assets/images/globe2.png";

const OveronsPage = () => {
  const url = useLocation().pathname;
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
                    Leren in een complexe wereld
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

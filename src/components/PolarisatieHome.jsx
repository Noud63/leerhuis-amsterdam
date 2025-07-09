import React from "react";
import polarisatie from "../polarisatiedb.json";
import { Link } from "react-router-dom";
import PolarisatieActiviteit from "./PolarisatieActiviteit";
import { FaLongArrowAltRight } from "react-icons/fa";
import activities from "../db.json";
import DekeselEnMalevich from "./DekeselEnMalevich";

const PolarisatieHome = () => {
  const data = polarisatie.polarisatie;

  return (
    <div className="w-full flex flex-col mx-auto pt-[140px] max-xxsm:px-2 max-mini:pt-[130px]">
      <div className="px-8 mx-auto max-xxsm:px-2">
        <div className="w-[85%] mx-auto flex justify-center items-center bg-[url('/images/zomerreces.png')] bg-no-repeat bg-top bg-cover -z-[999] py-20  mt-10 mb-8 px-4 max-menu:bg-right max-xxsm:py-12 max-mini:py-8 max-xmd:w-full">
          <p className="text-white text-2xl tracking-wider flex text-shadow-sm px-4 max-menu:text-xl max-xxsm:text-lg max-mini:text-[18px]">
            Het Leerhuis houdt zomerreces en komt in september met een nieuw
            programma.
          </p>
        </div>
        <div className="flex flex-row text-[20px] font-semibold gap-2 text-black border-b border-black pb-4">
          <div className="w-32 gap-2 flex flex-row justify-between items-center text-yellow-800 border border-yellow-800 px-2 rounded-lg shadow-md">
            <span className="font-normal">Uitgelicht</span>
            <FaLongArrowAltRight />
          </div>{" "}
        </div>

        <div className="w-[85%] mx-auto flex flex-row mb-8 relative max-socials:flex-col max-xmd:w-full">
          <DekeselEnMalevich act={activities.activities[11]} />
        </div>

        <div className="w-[85%] mx-auto  py-4 max-xxsm:w-full max-xmd:w-full">
          <div
            className="text-xl flex flex-row font-semibold mb-4 gap-2 tracking-wide text-black 
                    py-1 max-xxsm:flex-col max-xxsm:gap-0 border-b border-black"
          >
            <span># De polarisatie voorbij</span>
          </div>
          <p className="my-2 prose-lg max-xsm:text-[17px]">
            Het Leerhuis Amsterdam voor zinvol samenleven wil een bijdrage
            leveren aan het maatschappelijk gesprek over polarisatie. <br />
            Het organiseert daartoe drie bijeenkomsten voor mensen van binnen en
            buiten de kerken die zich zorgen maken over toenemende sociale
            spanningen.
            <br />
            De rode lijn is de vraag naar waarheid.
            <br />
            Aannames en opvattingen over de ander leiden niet langer tot
            onderzoek en debat, maar tot een opzettelijk gecreëerde afgrenzing
            tussen wij (die weten wat waar is) en zij (die leugens vertellen).{" "}
            <br />
            Hoe aan deze versimpeling van de werkelijkheid voorbij te komen?
            <br />
            <br />
            <span className="mx-auto prose-lg mt-4 max-xsm:text-base">
              <span className="font-semibold">Bijdrage: </span>
              &euro;10,- per keer, &euro;17,50 voor twee en &euro;25,- voor drie
              bijeenkomsten
            </span>
          </p>

          <div className="text-[20px] mt-4 mb-4 font-semibold border-b border-black">
            Programma:
          </div>
        </div>

        <div className="w-[85%] mx-auto grid grid-cols-3 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 max-xmd:w-full">
          {data?.map((act) => (
            <PolarisatieActiviteit key={act.id} act={act} />
          ))}
        </div>

        <div className="w-full flex justify-center mt-16 pb-4 mb-8">
          <Link to="/allactivities">
            <button
              type="button"
              className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
            >
              Alle activiteiten
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolarisatieHome;

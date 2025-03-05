import React from "react";
import polarisatie from "../polarisatiedb.json";
import { Link, useLocation } from "react-router-dom";
import PolarisatieActiviteit from "./PolarisatieActiviteit";
import { FaLongArrowAltRight } from "react-icons/fa";
import LeesProjectZwartWit from "./LeesProjectZwartWit";
import ZingenVoorbijPolarisatie from "./ZingenVoorbijPolarisatie";

import activities from "../db.json"

const PolarisatieHome = () => {

  const data = polarisatie.polarisatie;

  return (
    <div className="w-full flex flex-col mx-auto pt-[180px] max-xxsm:px-2 ">
      <div className="px-8 mx-auto max-xxsm:px-2">
        <div className="flex flex-row text-[20px] font-semibold gap-2 text-black border-b border-black pb-4">
          <div className="w-32 gap-2 flex flex-row justify-between items-center text-yellow-800 border border-yellow-800 px-2 rounded-lg shadow-md">
            <span className="font-normal">Uitgelicht</span>
            <FaLongArrowAltRight />
          </div>{" "}
        </div>

        <div className=" w-[85%] mx-auto flex flex-row mb-8 relative max-socials:flex-col max-xxsm:w-full">
          <LeesProjectZwartWit act={activities.activities[8]} />
          <ZingenVoorbijPolarisatie act={activities.activities[9]} />
        </div>

        <div className="w-[85%] mx-auto prose-lg py-4 max-xxsm:w-full ">
          <div
            className="text-xl flex flex-row font-semibold mb-4 gap-2 tracking-wide text-black 
                    py-1 max-xxsm:flex-col max-xxsm:gap-0 border-b border-black"
          >
            <span># De polarisatie voorbij</span>
          </div>
          <p className="my-2">
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
            <span className="mx-auto prose-lg mt-4">
              <span className="font-semibold">Bijdrage: </span>
              &euro;10,- per keer, &euro;17,50 voor twee en &euro;25,- voor drie
              bijeenkomsten
            </span>
          </p>

          <div className="text-[20px] mt-4 mb-4 font-semibold border-b border-black">
            Programma:
          </div>
        </div>

        <div className="w-[85%] mx-auto grid grid-cols-3 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 max-xxsm:w-full">
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

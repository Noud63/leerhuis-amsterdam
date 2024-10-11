import React from 'react'
import polarisatie from "../polarisatiedb.json"
import { Link } from 'react-router-dom'
import PolarisatieActiviteit from '../components/PolarisatieActiviteit'


const Polarisatie = () => {

const data = polarisatie.polarisatie

  return (
    <div className="w-full flex flex-col mx-auto px-4 mb-20 pt-[180px] max-xxsm:px-2">
      <div className="w-[95%] mx-auto">
        <div className="text-[22px] font-semibold text-black border-b border-black pb-2">
          # De polarisatie voorbij
        </div>
        <div className="w-[85%] mx-auto prose-lg py-4 max-xxsm:w-full ">
          Het Leerhuis Amsterdam voor zinvol samenleven wil een bijdrage leveren
          aan het maatschappelijk gesprek over polarisatie. <br />
          Het organiseert daartoe drie bijeenkomsten voor mensen van binnen en
          buiten de kerken die zich zorgen maken over toenemende sociale
          spanningen.
          <br />
          De rode lijn is de vraag naar waarheid. Aannames en opvattingen over
          de ander leiden niet langer tot onderzoek en debat, maar tot een
          opzettelijk gecreëerde afgrenzing tussen wij (die weten wat waar is)
          en zij (die leugens vertellen). <br />
          Hoe aan deze versimpeling van de werkelijkheid voorbij te komen?
          <div className="mx-auto prose-lg mt-4">
            <span className="text-lg font-semibold">Bijdrage: </span>
            &euro;10,- per keer, &euro;17,50 voor twee en &euro;25,- voor drie
            bijeenkomsten
          </div>
          <div className="text-[22px] mt-4 mb-4 font-semibold border-b border-black">
            Programma:
          </div>
        </div>

        <div
          className={`w-[85%] mx-auto grid grid-cols-3 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 max-xxsm:w-full`}
        >
          {data?.map((act) => (
            <PolarisatieActiviteit key={act.id} act={act} />
          ))}
        </div>

        <div className="w-full flex justify-center mt-24 pb-8 mb-8 max-mini:pb-4">
          <Link to="/allactivities">
            <button
              type="button"
              className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-gray-400 gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
            >
              Terug
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Polarisatie

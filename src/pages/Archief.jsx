import React from 'react'
import BackButton from '../components/BackButton';
import {filteredExpiredActivities} from "../utils/filterByDate"
import { useLoaderData } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';

export const archiveLoader = () => {
     return filteredExpiredActivities;
};

const Archief = () => {

  const data = useLoaderData();

 const url = useLocation().pathname;
 
  return (
    <div className="w-full min-h-screen mt-[170px] flex flex-row justify-center items-start px-8 max-xxxsm:px-2 mb-44">
      <div className="actueel_info h-auto w-full max-w-[600px] bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-20">
        <div className="w-full flex mb-0 border-b border-black pb-2">
          <span className="text-2xl font-semibold  text-black"># Archief</span>
        </div>
        <div className="mt-4">
          Activiteiten die reeds hebben plaatsgevonden.
          <br />
          Inschrijven is helaas niet meer mogelijk
        </div>
          <div className="w-full max-w-full flex flex-col justify-center flex-wrap ">
            {data?.map((act) => (
              <div
                className="actueel h-auto flex flex-col rounded-t-lg mt-8 bg-gradient-to-t from-stone-400 to-white relative "
                key={act.id}
                 >
                <div className="flex flex-row py-3 px-3 text-black items-center">
                  <div className="flex flex-1 text-xl font-semibold font-papyrus mx-auto">
                    {act.title}
                  </div>
                </div>
                <div className="w-full">
                  <img
                    src={`./images/${act.image}`}
                    alt=""
                    className="w-full max-w-[550px]"
                  />
                </div>
                <div className="bg-gradient-to-t from-slate-900 to-slate-900/50 w flex justify-center py-6 absolute bottom-0 left-0 w-full">
                  <Link to={`/archief/calendaritem/${act.id}`}>
                    <button
                      type="button"
                      className="w-[150px] flex justify-center items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full p-2 hover:px-16 transform ease-in-out duration-500"
                    >
                      Lees meer
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      
        <BackButton url={url}/>
        
      </div>
    </div>
  );
}

export default Archief

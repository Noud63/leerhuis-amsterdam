import React from 'react'
import BackButton from '../components/BackButton';
import {filteredExpiredActivities} from "../utils/filterByDate"
import { useLoaderData } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ActivityArchiefActueel from '../components/ActivityArchiefActueel';

export const archiveLoader = () => {
     return filteredExpiredActivities;
};

const Archief = () => {

  const data = useLoaderData();
  console.log(data)

  const url = useLocation().pathname;
 
  return (
    <div className="w-full min-h-screen flex flex-col mt-[200px] items-start px-8 max-xxxsm:px-2 mb-44">
      <div className="w-full max-w-[600px] mx-auto ">
        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-20 mb-8">
          <div className="w-full flex mb-0 border-b border-black pb-2">
            <span className="text-2xl font-semibold  text-black">
              # Archief 2024-2025
            </span>
          </div>
          <div className="text-lg mt-4 mb-4 max-xxsm:text-[15px]">
            Hier vindt u alle activiteiten die reeds hebben plaatsgevonden.
            <br />
          </div>
          <div className="w-full max-w-full flex flex-col justify-center flex-wrap ">
            {data?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>
        </div>
      </div>

      <BackButton url={url} />
    </div>
  );
}

export default Archief

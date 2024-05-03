import React from "react";
import { Link } from "react-router-dom";
import { upcomingActivities} from "../utils/filterByDate"
import { useLoaderData } from "react-router-dom";
import Activity from "../components/Activity";

export const allActivitiesLoader = () => {
  return upcomingActivities;
};

const AllActivities = () => {

const data = useLoaderData();

  
return (
    <div className="w-full flex pt-[180px] flex-row">
      <div className="w-full flex justify-center items-center flex-col mb-40">
        <div className="w-[95%] flex flex-row mb-8 border-b border-black">
          <span className="text-2xl font-semibold pb-2">
            # Alle activiteiten
          </span>
        </div>

        <div className="w-[85%] grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 max-xxxsm:w-[95%]">
          {data?.map((act) => (
           <Activity key={act.id} act={act}/>
          ))}
        </div>

        <div className="w-full flex justify-center mt-16">
          <Link to="/" >
            <button
              type="button"
              className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
            >
              Terug
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export {AllActivities}

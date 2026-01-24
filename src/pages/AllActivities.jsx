import React, { useMemo } from "react";
import { upcomingActivities} from "../utils/filterByDate"
import { useLoaderData, useLocation} from "react-router-dom";
import Activity from "../components/Activity";
import BackButton from "../components/BackButton";

export const allActivitiesLoader = () => {
  return upcomingActivities;
};

const AllActivities = () => {

const url = useLocation().pathname;

const data = useLoaderData() || [];

const sortedData = useMemo(() => 
  (data || []).slice().sort((a, b) => new Date(a.starting_date) - new Date(b.starting_date)), 
  [data]
);
  
return (
  <div className="w-full flex pt-[180px] flex-row">
    <div className="w-full flex justify-center items-center flex-col mb-40">
      <div className="w-[95%] flex flex-row mb-8 border-b border-black max-xxmd:mb-4">
        <span className="text-[22px] font-semibold pb-2 font-Assistant tracking-wide">
          # Alle activiteiten 2025/2026
        </span>
      </div>

       {sortedData === null || sortedData.length === 0 && <div className="h-full w-[95%] justify-center flex border border-black py-2">Geen activiteiten gevonden</div>}

      <div className="w-[75%] grid grid-cols-3 max-maxxl:grid-cols-2  max-socials:w-[95%] max-md:grid-cols-1 gap-8 max-xxxsm:w-[95%]">
        {sortedData?.map((act) => (
          <Activity key={act.id} act={act} />
        ))}
       
      </div>
      <BackButton url={url} />
    </div>
  </div>
);
};

export {AllActivities}

import React from "react";
import { filteredByWeek } from "../utils/filterByDate";
import { Link } from "react-router-dom";
import ActivityArchiefActueel from "./ActivityArchiefActueel";
import { useLocation } from "react-router-dom";

const Thematiek = () => {
  const now = new Date().getTime();
  const url = useLocation().pathname;

  return (
    <div className="w-full flex flex-col px-8 mt-20 max-xxsm:px-2 max-mini:mt-0">
      <div className="w-full flex mb-6 border-b border-black pb-2">
        <span className="text-2xl font-semibold  text-black"># Thematiek 2024-2025</span>
       </div>

       <div
        className="actueel_info flex w-full justify-center flex-col px-8 pt-8 pb-12 rounded-xl max-xxxsm:px-4 
          bg-gradient-to-t from-stone-100 via-white to-white border-b border-stone-400"
          >
      </div>
    </div>
  );
};

export default Thematiek

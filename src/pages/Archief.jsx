import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { filteredExpiredActivities } from "../utils/filterByDate";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ActivityArchiefActueel from "../components/ActivityArchiefActueel";

export const archiveLoader = () => {
  return filteredExpiredActivities;
};

const Archief = () => {
  const [cut, setCut] = useState(-9);

  const data = useLoaderData();
  const archive2024 = data.slice(-10); // 10 aantal activiteiten van jan - jun 2024
  const archive2025 = data.slice(0, -10);

  const handleClick = () => {
    if (cut === -9) {
      setCut(11);
    } else {
      setCut(-9);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const url = useLocation().pathname;

  return (
    <div className="w-full min-h-screen flex flex-col mt-[200px] items-start px-8 max-xxxsm:px-2 mb-44">
      <div className="w-full max-w-[600px] mx-auto ">
       
        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-20 mb-8">
          <div className="w-full flex flex-col items-start border-b border-black pb-2 mb-8">
            <span className="text-2xl font-semibold  text-black">
              # Archief 2024-2025
            </span>
            <span>({archive2025.length} activiteiten)</span>
          </div>

          <div className="w-full max-w-full flex flex-col justify-center flex-wrap ">
            {archive2025.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>
        </div>

        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-20 mb-8">
          <div className="w-full flex flex-col items-start border-b border-black pb-2 mb-8">
            <span className="text-2xl font-semibold  text-black">
              # Archief jan-juni 2024
            </span>
            <span>({archive2024.length} activiteiten)</span>
          </div>

          <div className="w-full max-w-full flex-col justify-center flex-wrap">
            {archive2024.slice(0, cut)?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              type="button"
              className="btn  w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
              onClick={handleClick}
            >
              {cut === -9 ? "Hele archief" : "Bekijk minder"}
            </button>
          </div>
        </div>
      </div>

      <BackButton url={url} />
    </div>
  );
};

export default Archief;

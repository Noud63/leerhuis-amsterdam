import React from "react";
import { filteredByWeek } from "../utils/filterByDate";
import { Link } from "react-router-dom";
import ActivityArchiefActueel from "./ActivityArchiefActueel";
import { useLocation } from "react-router-dom";


const Aktueel = () => {
  
const now = new Date().getTime();
const url = useLocation().pathname

  return (
    <div className="w-full flex flex-col px-8 mt-10 max-xxsm:px-2">
      <div className="w-full flex mb-6 border-b border-black pb-2">
        <span className="text-2xl font-semibold  text-black"># Actueel</span>
      </div>

      <div className="actueel_info flex w-full justify-center flex-col px-8 pt-8 pb-12 rounded-xl max-xxxsm:px-4 
      bg-gradient-to-t from-stone-100 via-white to-white border-b border-stone-400">
        <div className="w-full flex text-lg border-b border-slate-700">
          <span className="w-full flex flex-row items-center text-lg text-slate-800 font-semibold pb-2 max-xxxsm:items-start">
            <span className="mr-1">Deze week:</span>
            <span className="ml-1 max-xxxsm:ml-0">
              {new Date().toLocaleDateString("nl-NL", {
                month: "long",
                day: "numeric",
              })}{" "}
              tot{" "}
              {new Date(now + 604800000).toLocaleDateString("nl-NL", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </span>
        </div>
        <div className="w-full pb-6">
          <div className="min-w-[300px] mx-auto flex flex-row justify-around gap-8 flex-wrap mt-8">
            {filteredByWeek.length === 0 && (
              <div className="w-full flex justify-center mt-20 mb-24 text-xl font-semibold text-orange-700">
                Geen activiteiten!
              </div>
            )}
            {filteredByWeek?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={""}/>
            ))}
          </div>

          <div className="w-full flex justify-center mt-4 ">
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
    </div>
  );
};

export default Aktueel;

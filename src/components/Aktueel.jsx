import React from "react";
import { filteredByWeek } from "../utils/filterByDate";
import { Link } from "react-router-dom";


export const currentLoader = () => {
  return filteredByWeek;
};

const Aktueel = () => {
  
const now = new Date().getTime();

  return (
    <div className="w-full flex flex-col px-8 mt-20 max-xxsm:px-2">
      <div className="w-full flex mb-6 border-b border-black pb-2 mt-0">
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
              <div
                className="actueel flex flex-col mb-12 rounded-t-xl bg-gradient-to-t from-stone-400 to-white relative"
                key={act.id}
              >
                <div className="flex flex-row py-3 px-3 text-black items-center">
                  <div className="flex flex-1 text-xl font-semibold font-papyrus mx-auto">
                    {act.title}
                  </div>
                  <div className="flex items-center text-lg text-yellow-600 font-semibold">
                    {new Date(act.date).toLocaleDateString("nl-NL", {
                      month: "long",
                      day: "numeric",
                    })}
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
                  <Link to={`/calendaritem/${act.id}`}>
                    <button
                      type="button"
                      className="w-[150px] flex justify-center items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full p-2"
                    >
                      info
                    </button>
                  </Link>
                </div>
                <div className="bg-slate-600 h-4"></div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-4 ">
            <Link to="/allactivities">
              <button
                type="button"
                className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-gray-400 gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
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

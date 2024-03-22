import React from "react";
import { filteredActivitiesByWeek } from "../utils/filterByDate";
import activities from"../db.json"
import { Link } from "react-router-dom";


const Aktueel = () => {
  const url = window.location.pathname;

  const sortedFilteredDates = filteredActivitiesByWeek.toSorted(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="w-full flex flex-col px-8 pt-16 max-xxsm:px-2">
      <div className="w-full flex mb-6 border-b border-black pb-2 mt-0">
        <span className="text-2xl font-semibold  text-black"># Actueel</span>
      </div>

      <div className="contact_info flex w-full justify-start bg-white px-8 pt-8 pb-12 rounded-xl max-xxxsm:px-4">
        <div className="w-full max-w-[600px] border-b border-orange-700 pb-6">
          <div className="w-full flex justify-start text-lg mb-6 border-b border-orange-700">
            <span className="text-xl text-orange-700 font-semibold  pb-2">
              Activiteiten komende week:
            </span>
          </div>
          {sortedFilteredDates?.map((act) => (
            <div
              className="actueel flex flex-row mb-2 py-2 px-2 bg-neutral-400/30 items-center"
              key={act.id}
            >
              <div className="flex items-center">
                {new Date(act.date).toLocaleDateString().slice(0, -5)}
              </div>

              <div className="flex flex-1 text-lg font-semibold mx-auto ml-2 max-xxsm:text-base">
                {act.title}
              </div>

              {/* <div className="mr-4 border border-red-800">{act.act.time}</div> */}
              <Link to={`/aktueel/calendaritem/${act.id}`}>
                <button
                  type="button"
                  className="flex items-center text-orange-800 font-semibold border-2 border-gray-400 rounded-full bg-white px-4 py-1"
                >
                  info
                </button>
              </Link>
            </div>
          ))}
          <div className="w-full flex justify-center mt-16 mb-4">
            <Link to="allactivities">
              <button
                type="button"
                className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2  border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
              >
                Alle activiteiten
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="w-full flex flex-1 justify-end">
          <img src="./images/sabbat.png" alt="" className="h-[320px]"/>
        </div> */}
      </div>
    </div>
  );
};

export default Aktueel;

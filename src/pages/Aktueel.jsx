import React from 'react'
import BackButton from '../components/BackButton';
import { filteredActivitiesByWeek } from "../utils/filterByDate";
import { Link } from 'react-router-dom';

const Aktueel = () => {

const url = window.location.pathname;

const sortedFilteredDates = filteredActivitiesByWeek.toSorted(
  (a, b) => new Date(a.date) - new Date(b.date)
);
console.log(sortedFilteredDates)

const now = new Date().getTime();

return (
  <div className="w-full min-h-screen mt-[170px] flex flex-row justify-center items-start px-8 max-xxxsm:px-2 mb-44">
    <div className="actueel_info h-auto w-full max-w-[600px] bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-20">
      <div className="w-full flex mb-6 border-b border-black pb-2">
        <span className="text-2xl font-semibold  text-black"># Actueel</span>
      </div>
      <div className="text-lg mb-6 border-b border-orange-800 ">
        <span className="w-full flex justify-between items-center text-lg text-orange-800 font-semibold pb-1">
          Deze week van: {" "}
          <span className="text-base">
            {new Date().toLocaleDateString()} tot{" "}
            {new Date(now + 604800000).toLocaleDateString()}
          </span>
        </span>
      </div>

      <div className="w-full max-w-full flex flex-col justify-center gap-8 mt-10 flex-wrap ">
        {sortedFilteredDates?.map((act) => (
          <div className="actueel flex flex-col mb-8 rounded-t-lg bg-gradient-to-t from-stone-200 to-white relative">
            <div
              className="flex flex-row py-3 px-3 text-black items-center bg-white"
              key={act.id}
            >
              <div className="flex flex-1 text-xl font-semibold font-papyrus mx-auto">
                {act.title}
              </div>
              <div className="flex items-center text-lg">
                {new Date(act.date).toLocaleDateString().slice(0, -5)}
              </div>
            </div>
            <div className="w-full">
              <img
                src={`./images/${act.image}`}
                alt=""
                className="w-full max-w-[550px]"
              />
            </div>
            <div className="bg-gradient-to-t from-slate-900/90 to-slate-900/50 w flex justify-center py-6 absolute bottom-0 left-0 w-full">
              <Link to={`/aktueel/calendaritem/${act.id}`}>
                <button
                  type="button"
                  className="flex items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full px-12 py-1 hover:px-16 transform ease-in-out duration-500"
                >
                  info
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <BackButton url={url} />
    </div>
  </div>
);
}

export default Aktueel

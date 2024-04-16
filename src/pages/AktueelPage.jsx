import React from "react";
import BackButton from "../components/BackButton";
import { filteredByWeek } from "../utils/filterByDate";
import { Link, useLoaderData, useLocation } from "react-router-dom";

export const currentLoader = () => {
  return filteredByWeek;
};


const Aktueel = () => {
  let data = useLoaderData();
  const url = useLocation().pathname;
  const now = new Date().getTime();

  return (
    <div className="w-full min-h-screen mt-[170px] flex flex-row justify-center items-start px-8 max-xxxsm:px-2 mb-44">
      <div className="actueel_info h-auto w-full max-w-[600px] bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-20">
        <div className="w-full flex mb-6 border-b border-black pb-2">
          <span className="text-2xl font-semibold  text-black"># Actueel</span>
        </div>
        <div className="text-lg border border-slate-700">
          <span className="w-full flex items-center text-lg p-2 text-slate-800 font-semibold">
            Deze week:&nbsp;
            <span className="">
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

        <div className="w-full max-w-full flex flex-col justify-center flex-wrap">
          {data.length === 0 && (
            <div className="w-full flex justify-center mt-12 text-xl font-semibold text-orange-700">
              Geen activiteiten!
            </div>
          )}
          {data?.map((act) => (
            <div
              className="actueel flex flex-col rounded-t-lg mt-8 bg-gradient-to-t from-stone-400 to-white relative "
              key={act.id}
            >
              <div className="flex flex-row py-3 px-3 text-black items-center">
                <div className="flex flex-1 text-xl font-semibold font-papyrus mx-auto">
                  {act.title}
                </div>
                <div className="flex items-center text-xl font-semibold text-amber-700">
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
                <Link to={`/aktueel/calendaritem/${act.id}`}>
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
        <BackButton url={url} />
      </div>
    </div>
  );
};

export default Aktueel;

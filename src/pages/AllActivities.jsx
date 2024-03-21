import React from "react";
// import calendar from "../assets/icons/calendar-icon.svg";
// import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import getJsonData from "../utils/getJsonData";
import { useLoaderData } from "react-router-dom";
import BackButton from "../components/BackButton";

export const loader = () => {
  const data = getJsonData();
  return data;
};

const AllActivities = () => {

  const url = window.location.pathname;

  const data = useLoaderData();

  return (
    <div className="w-full flex pt-[170px] flex-row">
      <div className="w-full flex justify-center items-center flex-col mb-40">
        <div className="w-[95%] flex flex-row mb-8 border-b border-black">
          <span className="text-2xl font-semibold pb-2">
            # Alle activiteiten
          </span>
        </div>

        <div className="w-[85%] grid grid-cols-4 max-xxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 max-xxxsm:w-[95%]">
          {data?.map((act) => (
            <div className="w-full min-h-full" key={act.id}>
              <div className="calendar_item w-full h-full rounded-t-2xl bg-gradient-to-t from-stone-300 to-white flex flex-col justify-between relative">
                <div className="p-4">
                  <span className="border-b border-black flex justify-between font-bold text-xl pb-2">
                    {act.title}
                  </span>
                </div>

                <div className="flex flex-col gap-2 pl-4">
                  <div className="w-full">
                    <span className="font-semibold">Start : </span>
                    {new Date(act.starting_date).toLocaleDateString()}
                  </div>
                  <div className="w-full">
                    {" "}
                    <span className="font-semibold">Tijd :</span> {act.time}
                  </div>

                  <div className="w-full">
                    {" "}
                    <span className="font-semibold">O.l.v :</span> {act.led_by}
                  </div>
                </div>

                <div className="w-full flex justify-center items-center mt-4">
                  <img
                    src={`/images/${act.image}`}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>

                <Link
                  to={`calendaritem/${act.id}`}
                  className="w-full flex justify-center items-center absolute bottom-0 z-10 bg-black/50 py-4"
                >
                  <button
                    type="button"
                    className="w-[150px] p-1 text-[#000] rounded-full"
                  >
                    <div className="flex flex-row justify-center items-center rounded-full p-1 border-2 border-white text-white gap-2">
                      <span>Lees meer</span>
                    </div>
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
};

export default AllActivities;

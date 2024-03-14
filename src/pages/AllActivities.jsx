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
    <div className="w-full flex pt-[150px] flex-row m-auto max-calendar:w-[85%] bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-right-bottom">
      <div className="w-full flex flex-1 justify-center items-center flex-col mb-40">
        <div className="w-[85%] flex flex-row gap-2 mb-8 pt-12 max-calendar:w-full border-b border-black max-xxsm:pt-8">
          {/* <img src={calendar} alt="calendar" className="w-[28px]" /> */}
          <span className="text-2xl font-semibold pb-2">
            # Alle activiteiten
          </span>
        </div>

        <div className="w-[85%] grid grid-cols-4 max-xxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 ">
          {data?.map((act) => (
            <div className="w-full min-h-full rounded-2xl" key={act.id}>
              <div className="calendar_item w-full h-full bg-gray-100/60 rounded-xl flex flex-col justify-between relative">
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

                <div className="w-full flex justify-center items-center mt-4 rounded-b-lg">
                  <img
                    src={`/images/${act.image}`}
                    alt=""
                    className="w-full h-auto rounded-b-lg"
                  />
                </div>

                <Link
                  to={`calendaritem/${act.id}`}
                  
                  className="w-full flex justify-center items-center absolute bottom-0 z-10 bg-black/50 py-4 rounded-b-lg"
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

import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { upcomingActivities } from "../utils/filterByDate";
import { useLoaderData } from "react-router-dom";
import Activity from "./Activity";

export const rootLoader = () => {
  return upcomingActivities;
};

const BP = {  // BP = breakpoint
  XL: 1600,
  LG: 1280,
  MD: 850,
};

const Activities = () => {
  
const [width, setWidth] = useState(window.innerWidth); 

const getSlice = (w) => {
  if (w >= BP.XL) return 4;
  if (w >= BP.LG) return 3;
  if (w >= BP.MD) return 2;
  return 1;
};

  const slice = useMemo(() => getSlice(width), [width]); 
  const data = useLoaderData();

  const activities = useMemo(() => {
  return (data || []).slice(0, slice)}, 
  [data, slice]);

  useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  
  window.addEventListener("resize", handleResize);
  //Cleanup Event Listener
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <div className="w-full flex flex-row m-auto px-8 mt-10 text-black max-xxsm:px-4 max-xxxsm:px-4 pb-8 max-mini:pb-2 max-xsm:mt-4">
      <div className="w-full flex flex-1 justify-center items-center flex-col">
        <div className="w-full flex flex-row gap-2 mb-6 border-b border-black pb-2 ">
          <span className="text-[20px] font-semibold text-black tracking-wide max-xxsm:text-[19px]">
            # Activiteiten Kalender 2025 - 2026
          </span>
        </div>
        <div className="w-[85%] mb-4 max-xmd:w-full max-xxsm:pl-0">
          <span className="prose-lg max-xsm:text-[17px]">
            Het Leerhuis Amsterdam organiseert bijeenkomsten, dialogen en
            cursussen. <br />
            De bijeenkomsten vinden plaats in de Muiderkerk tenzij anders
            vermeld.
            <br />
            Schrijf je in voor een of meerdere activiteiten.
            <br />
            Hoe je je inschrijft en betaalgegevens, vindt je{" "}
            <Link to="/subscriptionrules">
              <span className="text-lg text-red-800 font-semibold underline">
                hier.
              </span>
            </Link>
          </span>
        </div>
        <div
          className={`w-[85%] grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 max-xmd:w-full gap-4 mt-4`}
        >
          {activities?.map((act) => (
            <Activity key={act.id} act={act} />
          ))}
        </div>

        <div className="w-full flex justify-center mt-16 pb-8 mb-8 max-mini:pb-4">
          <Link to="/allactivities">
            <button
              type="button"
              aria-label="Bekijk alle activiteiten"
              className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
            >
              Alle activiteiten
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activities;

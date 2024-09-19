import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { upcomingActivities } from "../utils/filterByDate";
import { useLoaderData } from "react-router-dom";
import Activity from "./Activity";

export const rootLoader = () => {
  return upcomingActivities;
};

const Activities = () => {
  
  const [slice, setSlice] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);

  const data = useLoaderData();


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width !== null && width >= 1600) {
      setSlice(4);
    } else if (width !== null && width < 1600 && width >= 1280) {
      setSlice(3);
    } else if (width !== null && width < 1280 && width >= 850) {
      setSlice(2);
    } else if (width !== null && width < 850) {
      setSlice(1);
    }
  }, [width]);

  return (
    <div className="w-[full] flex flex-row m-auto px-8 mt-[180px] text-black max-xxsm:px-4 max-xxxsm:px-4 pb-8 max-mini:pb-2">
      <div className="w-full flex flex-1 justify-center items-center flex-col">
        <div className="w-full flex flex-row gap-2  mb-6 border-b border-black pb-2 ">
          <span className="text-[22px] font-semibold text-black ">
            # Activiteiten Kalender 2024
          </span>
        </div>
        <div className="w-[85%] mb-4 max-xmd:w-full max-xxsm:pl-0">
          <span className="text-lg max-xsm:text-base">
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
        {/* {data.length === 0 && (
        <div className="w-full flex justify-center mt-8 max-xxxsm:mt-4">
          
          <div
            className="w-[85%] flex justify-center text-amber-800 font-semibold relative
          text-lg calendar_item rounded-2xl bg-gradient-to-t from-stone-100  to-white py-12 px-4 max-xmd:w-full max-xxsm:py-8"
          >
            Het cursusjaar is ten einde.
            <br />
            Het nieuwe programma zal naar verwachting in augustus geplaatst worden.
            <br />
            We zien je graag weer terug.<br />
            Tot dan!
        
          </div>
        </div>
      )} */}
        <div
          className={`w-[85%] grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 max-xmd:w-full gap-4 mt-4`}
        >
          {data?.slice(0, slice).map((act) => (
            <Activity key={act.id} act={act} />
          ))}
        </div>

        <div className="w-full flex justify-center mt-16 pb-8 mb-8 max-mini:pb-4">
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
  );
};

export default Activities;

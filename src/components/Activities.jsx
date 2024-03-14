import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import getJsonData from "../utils/getJsonData";
import { useLoaderData } from "react-router-dom";


export const loader = () => {
  const data = getJsonData();
  return data;
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
       if (width !== null && width >= 1500) {
         setSlice(4);
       } else if (width !== null && width < 1500 && width >= 1280) {
         setSlice(3);
       } else if (width !== null && width < 1280 && width >= 850) {
         setSlice(2);
       } else if (width !== null && width < 850) {
         setSlice(1);
       }

     }, [width]);

     
return (
  <div className="w-[full] flex flex-row m-auto px-8 pt-[140px] text-black max-xxsm:px-4">
    <div className="w-full flex flex-1 justify-center items-center flex-col">
      <div className="w-full flex flex-row gap-2 pl-0 mb-6 border-b border-black pb-2 pt-12 max-xxsm:pt-8">
        <span className="text-2xl font-semibold pt-1 text-black">
          # Activiteiten Kalender 2024
        </span>
      </div>
      <div className="w-[85%] mb-4 pl-0 max-calendargrid:w-[95%] max-xxsm:w-full">
        <span className="text-lg font-normal max-xsm:text-base">
          Het Leerhuis Amsterdam organiseert bijeenkomsten, dialogen en
          cursussen, in de Muiderkerk. <br />
          Schrijf je in voor een of meerdere activiteiten.
        </span>
      </div>
      <div
        className={`w-[85%] grid grid-cols-4 max-xxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 max-xxsm:w-full gap-4 mt-4`}
      >
        {data?.slice(0, slice).map((act) => (
          <div className="w-full min-h-full rounded-2xl" key={act.id}>
            <div className="calendar_item w-full h-full bg-white rounded-xl flex flex-col justify-between relative">
              <div className="p-4">
                <span className="border-b border-black flex justify-between font-bold text-xl pb-2">
                  {act.title}
                </span>
              </div>

              <div className="flex flex-col gap-2 px-4">
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

      <div className="w-full flex justify-center mt-16 pb-8 mb-8">
        <Link to="allactivities">
          <button
            type="button"
            className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2  border-gray-400 gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
          >
            Alle activiteiten
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default Activities

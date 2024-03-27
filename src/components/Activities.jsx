import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { upcomingActivities } from '../utils/filterByDate';
import { useLoaderData } from "react-router-dom";


export const loader = () => {
  return upcomingActivities
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
  <div className="w-[full] flex flex-row m-auto px-8 mt-[180px] text-black max-xxsm:px-4 max-xxxsm:px-2 pb-8">
    <div className="w-full flex flex-1 justify-center items-center flex-col">
      <div className="w-full flex flex-row gap-2  mb-6 border-b border-black pb-2 ">
        <span className="text-2xl font-semibold text-black">
          # Activiteiten Kalender 2024
        </span>
      </div>
      <div className="w-[85%] mb-4 pl-0 max-xxsm:w-full">
        <span className="text-lg font-normal max-xsm:text-base">
          Het Leerhuis Amsterdam organiseert bijeenkomsten, dialogen en
          cursussen. <br />
          De bijeenkomsten vinden plaats in de Muiderkerk tenzij anders vermeld.<br />
          Schrijf je in voor een of meerdere activiteiten.
          <br />
          Hoe je je inschrijft, lees je{" "}
          <Link to="/subscriptionrules">
            <span className="text-lg text-red-800 font-semibold underline">
              hier.
            </span>
          </Link>
        </span>
      </div>
      <div
        className={`w-[85%] grid grid-cols-4 max-xxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 max-xmd:w-[100%] gap-4 mt-4`}
      >
        {data?.slice(0, slice).map((act) => (
          <div className="w-full min-h-full rounded-t-2xl" key={act.id}>
            <div className="calendar_item w-full h-full bg-white rounded-t-2xl flex flex-col justify-between relative">
              <div className="p-4">
                <span className="border-b border-black flex justify-between font-papyrus font-semibold text-xl pb-2">
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

              <div className="w-full flex justify-center items-center mt-4 ">
                <img
                  src={`/images/${act.image}`}
                  alt=""
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-gradient-to-t from-slate-900 to-slate-900/50 flex justify-center py-6 absolute bottom-0 left-0 w-full">
                <Link to={`/calendaritem/${act.id}`}>
                  <button
                    type="button"
                    className="flex items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full px-8 py-1 hover:px-10 transform ease-in-out duration-500"
                  >
                    Lees meer
                  </button>
                </Link>
              </div>
              <div className="bg-slate-600 h-4"></div>
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

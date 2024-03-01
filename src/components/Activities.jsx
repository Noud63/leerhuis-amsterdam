import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogo.png"
import getJsonData from "../utils/getJsonData";
import { useLoaderData } from "react-router-dom";


export const loader = () => {
  const data = getJsonData();
  return data;
};


const Activities = () => {

     const [slice, setSlice] = useState(3);
     const [width, setWidth] = useState(window.innerWidth);

     const data = useLoaderData();
     console.log(data)

     useEffect(() => {
       const handleResize = () => {
         setWidth(window.innerWidth);
       };
       window.addEventListener("resize", handleResize);
     }, []);

     useEffect(() => {
       if (width !== null && width > 1500) {
         setSlice(3);
       } else if (width !== null && (width <= 1500 && width > 800)) {
         setSlice(2);
       } else if (width !== null && width <= 800) {
         setSlice(1);
       }
     }, [width]);

     
return (
    <div className="w-full flex flex-row m-auto px-8">
      <div className="w-full flex flex-1 justify-center items-center flex-col">
        <div className="w-full flex flex-row gap-2 pl-4 mb-6 pt-0 border-b border-amber-800 pb-2">
          <span className="text-xl font-semibold pt-1 max-xsm:text-xl text-amber-900">
            # Activiteiten Kalender 2024
          </span>
        </div>

        <div
          className={`w-[85%] grid grid-cols-${slice} gap-4 mt-4 max-xxxl:w-full`}
        >
          {data?.slice(0, slice).map((act) => (
            <div
              className="calendar_item_shadow w-full rounded-2xl p-2 bg-gradient-to-t from-neutral-300"
              key={act.id}
            >
              <div className="calendar_item cw-full h-full  bg-gradient-to-t from-[#f1eee8] to-[#f3f2ef] rounded-xl text-amber-800 px-4 pb-4 pt-4 flex flex-col justify-between gap-2">
                <span className="w-full flex justify-between font-bold border-b border-amber-800 pb-2">
                  <img src={logo} alt="logo" className="w-[40px]" />
                </span>
                <span className="w-full border-b border-amber-800 flex justify-between font-bold mb-2 text-xl pb-2">
                  {act.title}
                </span>
                <span className="w-full">
                  <span className="font-bold">Datum: </span>
                  {act.date}
                </span>
                <span className="w-full">
                  {" "}
                  <span className="font-bold">Tijd:</span> {act.time}
                </span>

                <span className="w-full">
                  {" "}
                  <span className="font-bold">O.l.v:</span> {act.led_by}
                </span>

                <div className="w-full flex justify-center items-center mt-4">
                  <img
                    src={`/images/${act.image}`}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <Link
                  to={`infocalendaritem/${act.id}`}
                  className="w-full flex justify-center pt-2"
                >
                  <button
                    type="button"
                    className="w-[150px] p-1 text-[#000] rounded-full"
                  >
                    <div className="flex flex-row justify-center items-center rounded-full p-2 border-2 border-amber-800 text-amber-800 gap-2">
                      <span>Lees meer</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-16 border-b border-amber-800 pb-16 mb-8">
          <button
            type="button"
            className="btn w-[150px] rounded-full bg-gradient-to-t from-amber-950 to-yellow-700 justify-center items-center text-[#ece2d9] gap-2 pb-1 leading-8"
          >
            Alle activiteiten
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activities

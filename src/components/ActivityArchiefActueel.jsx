import React from 'react'
import { Link } from 'react-router-dom';

const ActivityArchiefActueel = ({act, url}) => {
  
  return (
    <div
      className="actueel flex flex-col mb-12 rounded-t-xl bg-gradient-to-t from-stone-400 to-white relative"
      key={act.id}
    >
      <div className="flex flex-row py-3 px-3 text-black items-center">
        <div className="flex flex-1 text-xl font-semibold font-papyrus mx-auto">
          {act.title}
        </div>
         {act.date ? (<div className="flex items-center text-lg text-gray-500 font-semibold">
         {new Date(act.date).toLocaleDateString("nl-NL", {
            month: "long",
            day: "numeric",
          })}
        </div>) : (
          ""
          )}
      </div>
      <div className="w-full">
        <img
          src={`images/${act.image}`}
          alt=""
          className="w-full max-w-[550px]"
        />
      </div>
      <div className="bg-gradient-to-t from-slate-900 to-slate-900/50 w flex justify-center py-6 absolute bottom-0 left-0 w-full">
        <Link to={`${url}/calendaritem/${act.id}`}>
          <button
            type="button"
            className="w-[150px] flex justify-center items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full p-2"
          >
            Lees meer
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ActivityArchiefActueel

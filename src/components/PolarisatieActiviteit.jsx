import React from 'react'
import { Link } from 'react-router-dom';

const PolarisatieActiviteit = ({act}) => {
  
  return (
    <div className="w-full min-h-full" key={act.id}>
      <div className="calendar_item w-full h-full rounded-t-2xl bg-gradient-to-t from-stone-300 to-white flex flex-col justify-between relative">
        <div className="p-4 overflow-y-hidden">
          <span className="border-b border-black flex justify-between font-semibold font-papyrus text-xl pb-2 max-sm:line-clamp-1">
            <span>{act.title}</span>
            
          </span>
        </div>

        <div className="h-auto flex flex-col gap-2 pl-4 mb-2">
          <div className="w-full flex flex-col">
            <span className="font-semibold">Start : </span>
            {new Date(act.starting_date).toLocaleDateString("nl-NL", {
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">Tijd :</span> {act.time}
          </div>

          <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">Locatie:</span>
            {act.location}
          </div>

          <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">Kenmerk :</span> {act.itemId}
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          <img src={`/images/${act.image}`} alt="" className="w-full h-auto" />
        </div>

        <div className="bg-gradient-to-t from-slate-950 to-slate-900/40 flex justify-center items-center h-[18%] absolute bottom-0 left-0 w-full">
          <Link
            to={`polarisatiecalendaritem/${act.id}`}
          >
            <button
              type="button"
              className="flex items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full px-8 py-2"
            >
              Lees meer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PolarisatieActiviteit

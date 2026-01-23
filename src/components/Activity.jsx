
import { Link } from 'react-router-dom';
import ActivityCategory from './ActivityCategory';
import ActivityItemLink from './ActivityItemLink';
import PodiumItemLink from './PodiumItemLink';

const Activity = ({act }) => {

  return (
    <div className="w-full min-h-full" key={act.id}>
     
      <div className="calendar_item w-full h-full rounded-t-2xl bg-gradient-to-t from-stone-300 to-white flex flex-col justify-between relative">

        <ActivityCategory cat={act.cat}/>

        <div className="p-4">
          <div className="border-b border-black justify-between font-semibold font-papyrus text-xl pb-2 truncate">
            {act.title}
          </div>
        </div>

        <div className="relative h-auto flex flex-col gap-1 pl-4 mb-2">
          {act.itemId === "LA-AC19" && (
            <div
              className="shadow-lg flex justify-center flex-col absolute top-16 items-center w-[90%] 
            bg-stone-100 -rotate-12 border-2 border-yellow-800 rounded-md p-4 tracking-wide text-yellow-800 text-xl font-papyrus font-semibold"
            >
              <div className="gap-2 flex justify-center">
                <span>Drieluik : </span>
                <span>Polarisatie</span>
              </div>
            </div>
          )}

          <div className="w-full flex flex-col">
            <span className="font-semibold">Start : </span>
            {new Date(act.itemId === "LA-AC22" ? act.closing_date : act.starting_date).toLocaleDateString("nl-NL", {
              month: "long",
              day: "numeric",
            })}<br />
          </div>
          <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">Tijd :</span> {act.time}
          </div>

          {/* <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">Locatie :</span> {act.location}
          </div> */}

          <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">O.l.v :</span>
            {act.led_by_short ? act.led_by_short : act.led_by}
          </div>

          <div className="w-full flex flex-col">
            {" "}
            <span className="font-semibold">Locatie :</span> {act.location}
          </div>

          
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          <Link to={`/allactivities/calendaritem/${act.id}`}>
            <img src={`/images/${act.image}`} alt="" className="w-full h-auto" loading="lazy" />
          </Link>
        </div>

        {act.itemId !== "P_01" ? <ActivityItemLink act={act} /> : <PodiumItemLink act={act} /> }
      </div>
    </div>
  );
}

export default Activity

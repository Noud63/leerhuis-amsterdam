import React from 'react'
import BackButton from '../components/BackButton';
import { filteredDates } from '../utils/filterByDate';
import { Link } from 'react-router-dom';

const Aktueel = () => {

const url = window.location.pathname;

const sortedFilteredDates = filteredDates.toSorted((a, b) => new Date(a.date) - new Date(b.date));

return (
  <div className="w-full h-screen mt-[170px] flex flex-row justify-center items-start px-8 max-xxxsm:px-2 mb-20">
    <div className="contact_info h-full w-full max-w-[600px] bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4">
      <div className="w-full flex mb-6 border-b border-black pb-2">
        <span className="text-2xl font-semibold  text-black"># Aktueel</span>
      </div>
      <div className="text-lg mb-6">
        <span className="text-xl text-orange-800 font-semibold border-b border-orange-800 pb-2">
          Activiteiten komende week:
        </span>
      </div>

      <div className="">
        {sortedFilteredDates?.map((act) => (
          <div
            className="flex flex-row mb-2 py-3 px-2 bg-gray-200 items-center"
            key={act.act.itemId}
          >
            <div className="flex items-center">
              {new Date(act.date).toLocaleDateString().slice(0, -5)}
            </div>

            <div className="flex flex-1 text-lg font-semibold mx-auto ml-2 max-xxxsm:text-base">
              {act.act.title}
            </div>

            {/* <div className="mr-4 border border-red-800">{act.act.time}</div> */}
            <Link to={`/aktueel/calendaritem/${act.act.id}`}>
              <button
                type="button"
                className="flex items-center text-orange-800 font-semibold border-2 border-gray-400 rounded-full bg-white px-4 py-1"
              >
                info
              </button>
            </Link>
          </div>
        ))}
      </div>
      <BackButton url={url} />
    </div>
  </div>
);
}

export default Aktueel

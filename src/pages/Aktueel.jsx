import React, { useEffect } from 'react'
import BackButton from '../components/BackButton';
import { filteredDates } from '../utils/filterByDate';
import { Link } from 'react-router-dom';

const Aktueel = () => {

const url = window.location.pathname;

const sortedFilteredDates = filteredDates.toSorted((a, b) => new Date(a.date) - new Date(b.date));

return (
  <div className="w-full h-screen mt-[170px] flex flex-row justify-center items-start px-2">
    <div className="contact_info w-full bg-white px-8 pt-8 pb-12 rounded-xl max-w-[630px]">
      <div className="w-full flex mb-6 border-b border-black pb-2">
        <span className="text-2xl font-semibold  text-black"># Aktueel</span>
      </div>
      <div className="text-lg mb-6">
        <span className="text-xl text-orange-800 font-semibold">
          Activiteiten komende 7 dagen:
        </span>
      </div>
      {sortedFilteredDates?.map((act) => (
        <div className="flex mb-2" key={act.act.itemId}>
          <div className="flex justify-center items-center">
            {new Date(act.date).toLocaleDateString().slice(0, -5)}
          </div>
          <div className="w-[200px] flex justify-start font-semibold items-center mx-auto">
            {act.act.title}
          </div>

          <div className="mr-4">{act.act.time}</div>
          <Link to={`/aktueel/calendaritem/${act.act.id}`}>
            <button
              type="button"
              className="w-[80px] ml-2 text-white rounded-full bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950"
            >
              info
            </button>
          </Link>
        </div>
      ))}
      <BackButton url={url} />
    </div>
  </div>
);
}

export default Aktueel

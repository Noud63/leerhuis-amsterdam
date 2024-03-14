import React from 'react'
import { Link } from 'react-router-dom';

const Aktueel = () => {
  return (
    <div className="w-[full] h-[600px] flex flex-row m-auto px-8 text-black max-xxsm:px-4">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row gap-2 pl-0 mb-6 border-b border-black pb-2 pt-10 max-xxsm:pt-8">
          <span className="text-2xl font-semibold pt-1 text-black">
            # Aktueel
          </span>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center mt-16 gap-10 mb-20">
          <span>Lopende activiteit(en) en andere aktuele zaken</span>
          <Link to="/aktueel">
            <button
              type="button"
              className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2  border-neutral-400 gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
            >
              aktuele zaken
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aktueel

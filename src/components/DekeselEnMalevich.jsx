import React from 'react'
import Activity from "./Activity";

const DekeselEnMalevich = ({act}) => {
  return (
    <div className="w-full flex flex-col justify-between pr-6 mt-4 max-xxsm:pr-0 max-socials:w-full max-socials:pr-0">
      <div className="prose-lg py-4 max-xxsm:w-full ">
        <div
          className="text-xl flex flex-row font-semibold mb-4 gap-2 tracking-wide text-black 
                    py-1 max-xxsm:flex-col max-xxsm:gap-0 border-b border-black "
        >
          <span># Dekesel en Malevich</span>
        </div>
        <p className="my-2 h-auto prose-lg max-xsm:text-[17px]">
          {act.description}
        </p>
        <div className="text-red-700 font-semibold flex flex-col">
          <span>Let op! </span>
          <span>
            De bijeenkomst met Marc Dekesel van 8 juli is komen te vervallen!
          </span>
          <span>
           Deze is verplaatst naar 15 september.
          </span>
        </div>
      </div>
      <div className="w-full max-w-[400px] max-xmd:max-w-full">
        <Activity act={act} />
      </div>
    </div>
  );
}

export default DekeselEnMalevich;

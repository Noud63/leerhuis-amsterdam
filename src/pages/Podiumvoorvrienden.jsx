import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import podium from "../podium.json";
import Activity from "../components/Activity";

const Podiumvoorvrienden = () => {
  const url = useLocation().pathname;

  const data = podium.podium || [];

  const sortedData = useMemo(
    () =>
      data
        .slice()
        .sort((a, b) => new Date(a.starting_date) - new Date(b.starting_date)),
    [data],
  );

  return (
    <div className="w-full flex pt-[180px] flex-row">
      <div className="w-full flex justify-center items-center flex-col mb-40">
        <div className="w-[95%] flex flex-row mb-8 border-b border-black max-xxmd:mb-4">
          <div className="text-[22px] font-semibold pb-2 font-Assistant tracking-wide flex flex-col">
            <span># Podium </span>
            <span className="text-sm font-normal">
              (De activiteiten op deze pagina vallen niet onder het Leerhuis)
            </span>
          </div>
        </div>

        {sortedData === null ||
          (sortedData.length === 0 && (
            <div className="h-full w-[95%] justify-center flex border border-black py-2">
              Geen activiteiten gevonden
            </div>
          ))}

        <div className="w-[75%] grid grid-cols-3 max-maxxl:grid-cols-2  max-socials:w-[95%] max-md:grid-cols-1 gap-8 max-xxxsm:w-[95%]">
          {sortedData?.map((act) => (
            <Activity key={act.id} act={act} />
          ))}
        </div>
        <BackButton url={url} />
      </div>
    </div>
  );
};

export default Podiumvoorvrienden;

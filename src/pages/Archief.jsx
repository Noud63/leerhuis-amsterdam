import { useMemo } from "react";
import BackButton from "../components/BackButton";
import { filteredExpiredActivities } from "../utils/filterByDate";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ActivityArchiefActueel from "../components/ActivityArchiefActueel";
import { ascendingOrder } from "../utils/ascendingOrder";
import archief_24 from "../archief_24.json";
import archief_2425 from "../archief_2425.json";
import archief_2526 from "../archief_2526.json";
import archives from "../utils/getArchiveData";

export const archiveLoader = () => {
  return filteredExpiredActivities;
};

const Archief = () => {
  const data = useLoaderData();
  
  const archive_2627 = useMemo(
    () =>
      (data || [])
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    [data],
  );

  const url = useLocation().pathname;

  return (
    <div className="w-full min-h-screen flex flex-col mt-[180px] items-start px-8 max-xxxsm:px-2 mb-44">
      <div className="w-full  mx-auto ">
        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-8 mb-8">
          <div className="w-full flex flex-row justify-between items-center max-xxsm:flex-col max-xxsm:items-start border-b border-black pb-2 mb-8">
            <span className="text-[20px] font-semibold  text-black tracking-wide">
              # Archief 2026-2027
            </span>
            <span>
              ({archive_2627.length > 0 ? archive_2627.length : 0} activiteiten)
            </span>
          </div>

          <div className="grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8">
            {archive_2627?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>
        </div>

        {archives.map((archive, index) => (
          <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-8 mb-8" key={index}>
            <div className="w-full flex flex-row justify-between items-center max-xxsm:flex-col max-xxsm:items-start border-b border-black pb-2 mb-8">
              <span className="text-[20px] font-semibold  text-black tracking-wide">
                # {archive.title}
              </span>
              <span>
                ({archive.activities.length > 0 ? archive.activities.length : 0}{" "}
                activiteiten)
              </span>
            </div>

            <div className="grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8">
              {archive.activities?.map((act) => (
                <ActivityArchiefActueel key={act.id} act={act} url={url} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <BackButton url={url} />
    </div>
  );
};

export default Archief;

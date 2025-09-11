import { useMemo } from "react";
import BackButton from "../components/BackButton";
import { filteredExpiredActivities } from "../utils/filterByDate";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ActivityArchiefActueel from "../components/ActivityArchiefActueel";
import { ascendingOrder } from "../utils/ascendingOrder";
import archief_24 from "../archief_24.json";
import archief_2425 from "../archief_2425.json";

export const archiveLoader = () => {
  return filteredExpiredActivities;
};

const Archief = () => {
  const data = useLoaderData();

  const archive2526 = data.slice(21, data.length);

  const archive_2526 = useMemo(
    () =>
      (archive2526 || [])
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    [archive2526]
  );

  //const archive24 = data.slice(0, -10); // 10 aantal activiteiten van jan - jun 2024
  const archive24 = ascendingOrder(archief_24.activities || []);
  const archive2425 = ascendingOrder(archief_2425.activities || []);

  const url = useLocation().pathname;

  return (
    <div className="w-full min-h-screen flex flex-col mt-[180px] items-start px-8 max-xxxsm:px-2 mb-44">
      <div className="w-full  mx-auto ">
        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-8 mb-8">
          <div className="w-full flex flex-row justify-between items-center max-xxsm:flex-col max-xxsm:items-start border-b border-black pb-2 mb-8">
            <span className="text-[20px] font-semibold  text-black tracking-wide">
              # Archief 2025-2026
            </span>
            <span>
              ({archive_2526.length > 0 ? archive_2526.length : 0} activiteiten)
            </span>
          </div>

          <div className="grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8">
            {archive_2526?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>
        </div>

        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-8 mb-8">
          <div className="w-full flex flex-row justify-between items-center max-xxsm:flex-col max-xxsm:items-start border-b border-black pb-2 mb-8">
            <span className="text-[20px] font-semibold  text-black tracking-wide">
              # Archief 2024-2025
            </span>
            <span>({archive2425.length} activiteiten)</span>
          </div>

          <div className="grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8">
            {archive2425?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>
        </div>

        <div className="actueel_info h-auto bg-white px-8 pt-8 rounded-xl max-xxxsm:px-4 pb-14 mb-8">
          <div className="w-full flex flex-row justify-between items-center max-xxsm:flex-col max-xxsm:items-start border-b border-black pb-2 mb-8">
            <span className="text-[20px] font-semibold tracking-wide text-black">
              # Archief jan-juni 2024
            </span>
            <span>({archive24.length} activiteiten)</span>
          </div>

          <div className="grid grid-cols-4 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8">
            {archive24?.map((act) => (
              <ActivityArchiefActueel key={act.id} act={act} url={url} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-full flex justify-center mt-16">
        <Link to="/">
          <button
            type="button"
            className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
          >
            Terug
          </button>
        </Link>
      </div> */}
      <BackButton url={url} />
    </div>
  );
};

export default Archief;

// import React from "react";
// import polarisatie from "../polarisatiedb.json";
// import { Link } from "react-router-dom";
// import PolarisatieActiviteit from "./PolarisatieActiviteit";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import activities from "../db.json";
// import DekeselEnMalevich from "./DekeselEnMalevich";

// const HomeUitgelicht = () => {
  
  // const data = polarisatie.polarisatie;
//   const data = activities.activities.slice(22, 25); 
//   console.log("Data:", data);

//   return (
//     <div className="w-full flex flex-col mx-auto pt-[180px] max-xxsm:px-2">
//       <div className="px-8 mx-auto max-xxsm:px-2">
//         <div className="flex flex-row text-[16px] gap-2 text-black border-b border-black pb-4">
//           <div className="w-32 flex flex-row justify-around items-center text-white px-2 py-1 rounded-lg shadow-md  
//           border-yellow-600 bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950">
//             <span className="">Uitgelicht</span>
//             <FaLongArrowAltRight />
//           </div>{" "}
//         </div>

//         <div className="w-[85%] mx-auto flex flex-row mb-8 relative max-socials:flex-col max-xmd:w-full">
//           <DekeselEnMalevich act={activities.activities[21]} />
//         </div>

//         <div className="w-[85%] mx-auto  py-4 max-xxsm:w-full max-xmd:w-full">
//           <div
//             className="text-xl flex flex-row font-semibold mb-4 gap-2 tracking-wide text-black 
//                     py-1 max-xxsm:flex-col max-xxsm:gap-0 border-b border-black"
//           >
//             <span># De (wan)hoop nabij</span>
//           </div>
//           <p className="my-2 prose-lg max-xsm:text-[17px]">
//             In drie interactieve bijeenkomsten, een lezingenreeks en een middagje zingen stellen we wanhoop niet tegenover hoop, 
//             maar proberen we haar te zien als een doorgang. De Bijbel leert ons om niet te vluchten in gemakkelijke antwoorden, 
//             maar om dwars door de afgrond heen te gaan – en daarin een geloof te vinden dat niet draait om succes, zekerheid of troost, maar om waarheid, kwetsbaarheid en bevrijding. 
//             Echte hoop komt ons nabij wanneer we onze schijnbare zekerheden durven loslaten. 
//             Omdat geloof niet betekent: “alles komt goed”, maar: “zelfs als alles uit elkaar valt, ben ik niet alleen”. 
            
//           </p>

          
//         </div>

//         <div className="w-[85%] mx-auto grid grid-cols-3 max-maxxl:grid-cols-3 max-xl:grid-cols-2 max-xmd:grid-cols-1 gap-8 max-xmd:w-full">
//           {data?.map((act) => (
//             <PolarisatieActiviteit key={act.id} act={act} />
//           ))}
//         </div>

//         <div className="w-full flex justify-center mt-16 pb-4 mb-8">
//           <Link to="/allactivities">
//             <button
//               type="button"
//               className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
//             >
//               Alle activiteiten
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeUitgelicht;

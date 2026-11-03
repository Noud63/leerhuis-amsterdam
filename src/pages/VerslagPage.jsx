import React from "react";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import reports from "../reports.json";

const VerslagPage = () => {
    const url = useLocation().pathname;

    console.log(reports.reports);
  return (


    <div className="w-full min-h-screen flex flex-col pt-[180px] px-8 max-xxsm:px-2 mb-20 max-xxsm:pt-[170px]">
      <div className="w-full h-10 border-b border-black mb-6">
        <span className="flex text-xl font-semibold pb-2">
          # Verslagen Leerhuis bijeenkomsten
        </span>
      </div>
      {reports.reports?.map((report) => (
        <Link to={`verslag/${report.id}`} className="flex justify-center max-w-[500px] font-semibold border border-black py-2 bg-white rounded-lg shadow-md cursor-pointer" key={report.id}>
        {report.date}: {report.title}
        </Link>
      ))}
    

    <div className="w-full flex items-center justify-center">
<BackButton url={url} />
    </div>

    </div>
  );
};

export default VerslagPage;

import React from "react";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const VerslagPage = () => {
    const url = useLocation().pathname;
  return (
    <div className="w-full min-h-screen flex flex-col pt-[180px] px-8 max-xxxsm:px-4 mb-20">
      <div className="w-full h-10 border-b border-black mb-8">
        <span className="flex text-xl font-semibold pb-2">
          # Verslagen Leerhuis bijeenkomsten
        </span>
      </div>
    <Link to="Verslag_241026" className="flex justify-center max-w-[500px] font-semibold border border-black py-2 bg-white rounded-lg shadow-md cursor-pointer">
        Verslag 24 oktober: "Mens zijn in tijden van AI"
        </Link>

    <div className="w-full flex items-center justify-center">
<BackButton url={url} />
    </div>

    </div>
  );
};

export default VerslagPage;

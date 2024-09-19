import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

const Contact = ({forwardUrl}) => {
  return (
    <div className="w-full h-auto flex flex-col px-8 text-black max-xxsm:px-4 max-xxxsm:px-2 mt-10">
      <div className="w-full flex gap-2 mb-6 border-b border-black pb-2 pt-10 max-xxsm:pt-8">
        <span className="text-[22px] font-semibold pt-1 text-black">
          # Contact
        </span>
      </div>

      <div className="contact_info w-full flex flex-row px-8 pb-20 pt-12 bg-gradient-to-t from-stone-100 via-white to-white border-b border-stone-400 rounded-xl mb-10 max-socials:flex-col max-xxsm:px-4 max-xxsm:pt-6">
        <div className="flex flex-col w-2/3 max-socials:w-full">
          <div className="flex flex-col text-base mb-4 gap-1">
            <span className="text-lg font-semibold text-orange-700 mb-2">
              Het Leerhuis is gevestigd in de Muiderkerk:
            </span>

            <span>Leerhuis Amsterdam</span>
            <span>Linnaeusstraat 37</span>
            <span>1093EG Amsterdam</span>
          </div>

          <div className=" flex flex-col mt-8 gap-2 max-socials:mb-8">
            <span className="text-lg font-semibold text-orange-700">
              Heeft u vragen, zijn dingen niet helemaal duidelijk of heeft u een
              voorstel?
              <br />
              Laat het ons weten.
            </span>
            <span className="text-lg font-semibold text-orange-700 "></span>
            <span className="">Bel naar: 06 10325127</span>
            <span className="">Mail naar: leerhuisamsterdam@gmail.com</span>
            <span className="mb-2">Of klik op onderstaande link:</span>
            <Link to="/contactform" className="mt-12 max-socials:mt-4">
              <button
                type="button"
                className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
              >
                Mail ons
              </button>
            </Link>
          </div>
        </div>

        <div className="map_box h-[440px] w-1/2 bg-white max-socials:w-full z-10">
          <Map />
          <div className="w-full flex justify-start text-gray-700 bg-stone-100 p-2 border-b border-stone-400">
            * Locatie Leerhuis Amsterdam
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

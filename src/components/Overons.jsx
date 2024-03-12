import React from "react";
import books from "../assets/images/books.png"
import { Link } from "react-router-dom";
import gathering from "../assets/images/gathering.png"

const Overons = () => {
  return (
    <div
      className="w-full flex items-center justify-center px-8 mt-4 z-10 relative max-lg:px-8 max-xmd:mt-12 pb-0 max-xxsm:mt-8 max-bracket:px-4 
   bg-stone-900/50"
    >
      <div className="w-full">
        <div className="overons flex flex-col ">
          <div className="w-full flex flex-row justify-between text-white font-normal gap-12 rounded-lg z-5 max-lg:flex-col ">
            <div className="flex flex-1 flex-col justify-center items-center leading-2 pb-16 text-lg max-lg:w-full border-b border-white mb-24">
              <div className="w-full flex justify-between border-b border-white mb-8">
                <span className="flex text-white text-2xl font-semibold pt-12 pb-4">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full max-w-[1100px] flex flex-col items-end justify-center py-8 relative mt-12 max-xmd:flex-row max-xmd:items-center max-xmd:mt-0 max-xmd:py-0">
                <div className="w-full max-w-[600px] flex justify-center max-xmd:flex-col">
                  <div className="w-full max-w-[600px] mb-12 mt-7 max-xmd:mt-0 max-xmd:mb-0">
                    <div className="overons_text w-full italic max-lg:w-full bg-white rounded-xl text-black px-8 pt-6 pb-8 max-xmd:rounded-b-none">
                      <span className="flex justify-center text-xl font-semibold pb-2 text-amber-600">
                        "Leven in een complexe wereld"
                      </span>
                      Het Leerhuis Amsterdam richt zich op zinvol samen leven in
                      een complexe wereld die ons voor veel vragen stelt.
                      <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie
                      en de hedendaagse wereld van kunst en cultuur zoeken wij
                      hierover het gesprek.
                      <br /> We organiseren daarom bijeenkomsten, dialogen en
                      cursussen, in de Muiderkerk, waarin deze werelden elkaar
                      ontmoeten.
                    </div>
                  </div>

                  <div className="absolute -z-10 top-0 left-0 max-xmd:relative">
                    <img
                      src={gathering}
                      alt=""
                      className="gathering rounded-t-xl rounded-b-xl w-full max-w-[700px] shadow-lg max-xmd:rounded-t-none max-xmd:rounded-b-xl"
                    />
                  </div>
                </div>
              </div>

              <Link
                to="/overonspage"
                className="w-full flex justify-center mt-12"
              >
                <button
                  type="button"
                  className="btn w-[150px] rounded-full justify-center items-center  text-white border-2 border-white gap-2 pb-1 leading-8 pt-1 text-md font-normal"
                >
                  Lees meer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overons;

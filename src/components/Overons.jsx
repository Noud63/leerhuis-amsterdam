import React from "react";
import books from "../assets/images/books.png"
import { Link } from "react-router-dom";


const Overons = () => {
  return (
    <div className="w-full flex items-center px-8 mt-20 z-10 relative max-lg:px-8 max-xmd:mt-12 pb-0 max-xxsm:mt-8 max-bracket:px-4">
      <div className="absolute bottom-0 left-0 w-full flex justify-center -z-[999] dark:hidden">
        <img src="/images/white_circle.png" alt="" className="w-full" />
      </div>
      <div className="w-full">
        <div className="overons flex flex-col">
          <div className="w-full flex flex-row justify-between text-red-900 font-normal gap-12 rounded-lg z-5 max-lg:flex-col">
            <div className="flex flex-1 flex-col leading-2 text-lg max-lg:w-full pb-16 max-lg:pb-4">
              <div className="flex justify-between border-b border-red-900 mb-8">
                <span className="flex text-[#793a2a] text-xl font-semibold pb-2">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center">
                <span className="flex text-xl font-semibold pb-4 italic">
                  "Leven in een complexe wereld"
                </span>
                <div className="w-full max-w-[900px] italic max-lg:w-full px-4">
                  Het Leerhuis Amsterdam richt zich op zinvol samen leven in een
                  complexe wereld die ons voor veel vragen stelt.
                  <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en
                  de hedendaagse wereld van kunst en cultuur zoeken wij hierover
                  het gesprek.
                  <br /> We organiseren daarom bijeenkomsten, dialogen en
                  cursussen, in de Muiderkerk, waarin deze werelden elkaar
                  ontmoeten.
                </div>
              </div>

              <Link
                to=""
                className="w-full flex justify-center mt-12 border-b border-red-900 pb-12"
              >
                <button
                  type="button"
                  className="btn w-[150px] rounded-full bg-gradient-to-t from-amber-950 to-yellow-700 justify-center items-center text-[#ece2d9] gap-2 pb-1 leading-8"
                >
                  Lees meer
                </button>
              </Link>
            </div>
            <div className="globe min-h-full max-w-full flex justify-center items-center text-md">
              <img
                src={books}
                alt="books"
                className="globe object-cover w-[400px] mr-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overons;

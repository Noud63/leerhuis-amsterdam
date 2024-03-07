import React from "react";
import books from "../assets/images/books.png"
import { Link } from "react-router-dom";
import gathering from "../assets/images/gathering.png"

const Overons = () => {
  return (
    <div className="w-full flex items-center px-8 mt-4 z-10 relative max-lg:px-8 max-xmd:mt-12 pb-0 max-xxsm:mt-8 max-bracket:px-4 bg-zinc-800">
      <div className="w-full">
        <div className="overons flex flex-col">
          <div className="w-full flex flex-row justify-between text-white font-normal gap-12 rounded-lg z-5 max-lg:flex-col">
            <div className="flex flex-1 flex-col leading-2 pb-32 text-lg max-lg:w-full">
              <div className="flex justify-between border-b border-white mb-8">
                <span className="flex text-[#fff] text-xl font-semibold pt-20 pb-4">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full h-full flex flex-col items-center justify-center">
                <span className="flex text-xl font-semibold pb-4 italic">
                  "Leven in een complexe wereld"
                </span>
                <div className="w-full max-w-[900px] italic max-lg:w-full px-0 pb-8">
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

              <div className="w-full flex justify-center items-center text-md ">
                <img
                  src={gathering}
                  alt=""
                  className="rounded-xl"
                />
              </div>

              <Link
                to="/overonspage"
                className="w-full flex justify-center mt-12 border-b border-white pb-16"
              >
                <button
                  type="button"
                  className="btn w-[150px] rounded-full justify-center items-center text-[#fff] border-2 border-white gap-2 pb-1 leading-8 pt-1 text-md font-semibold"
                >
                  Lees meer
                </button>
              </Link>
            </div>
            {/* <div className="globe min-h-full max-w-full flex justify-center items-center text-md">
              <img
                src={books}
                alt="books"
                className="globe object-cover w-[400px] mr-16"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overons;

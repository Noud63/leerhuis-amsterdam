import React from "react";
import { Link } from "react-router-dom";
import gathering from "../assets/images/wandelaars2.png"

const Overons = () => {
  return (
    <div className="w-full flex items-center justify-center px-8 z-10 relative max-lg:px-8 max-bracket:px-4 max-xxsm:px-4 max-xxxsm:px-2 ">
      <div className="w-full">
        <div className="overons flex flex-col">
          <div className="flex flex-row justify-between font-normal z-5 max-lg:flex-col ">
            <div className="flex flex-1 flex-col justify-center items-center leading-2 text-lg max-lg:w-full">
              <div className="w-full flex justify-between border-b border-black">
                <span className="flex text-2xl font-semibold pb-4">
                  # Over het Leerhuis
                </span>
              </div>

              <div
                className="w-full max-w-[1220px] flex flex-col items-center justify-center pt-8
                   max-xmd:flex-row max-xmd:items-center  max-xxsm:max-w-full"
              >
                <div className="w-full max-w-[1220px] flex flex-col justify-center max-xmd:flex-col max-xmd:max-w-full">
                  <div className="w-full mb-20">
                    <div
                      className="overons_text flex items-center flex-col max-lg:w-full bg-gradient-to-t from-stone-100 via-white to-white rounded-xl 
                         border-b-2 border-stone-300 text-black px-10 pt-16 pb-12 max-xxxsm:px-4 max-xxxsm:pt-10 relative"
                    >
                      <div className="w-full h-full absolute bottom-0 right-0 bg-[url('./assets/images/map_adam2.png')]  bg-center opacity-30" />
                      <span className="w-full flex justify-center text-2xl font-semibold pb-4 mb-4 text-amber-700 border-b border-black max-mini:text-[22px] ">
                        Leren in een complexe wereld
                      </span>
                      <div className="w-full max-w-[800px] mt-6 mb-16">
                        Het Leerhuis Amsterdam nodigt kerkelijke en
                        niet-kerkelijke Amsterdammers uit om elkaar te ontmoeten
                        rond de belangrijke thema's van deze tijd.
                        <div className="tolman w-full flex justify-center mt-12">
                          <img
                            src={gathering}
                            alt=""
                            className="w-full max-w-[700px] max-xmd:max-w-full"
                          />
                        </div>
                        We organiseren cursussen en inspiratiedagen die gaan
                        over zinvol en verantwoordelijk samenleven.
                        <br />
                        Via ontmoeting en moedige gesprekken zoeken we
                        verdieping en verbreding.
                        <br />
                        <span className="w-full flex justify-center mt-12">
                          Wees welkom!
                        </span>
                      </div>

                      <Link
                        to="/overonspage"
                        className="flex justify-center mb-8 z-10"
                      >
                        <button
                          type="button"
                          className="btn w-[150px] rounded-full justify-center items-center text-black border-2 border-black gap-2 pb-1 leading-8 pt-1 font-semibold"
                        >
                          Lees meer
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overons;

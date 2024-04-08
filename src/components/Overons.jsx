import React from "react";
import { Link } from "react-router-dom";
import gathering from "../assets/images/wandelaars2.png"

const Overons = () => {
  return (
    <div className="w-full flex items-center mt-0 justify-center px-8 z-10 relative max-lg:px-8 max-bracket:px-4 max-xxsm:px-4 bg-neutral-400/40 py-12 max-xxxsm:px-2 ">
      <div className="w-full">
        <div className="overons flex flex-col">
          <div className="flex flex-row justify-between font-normal rounded-lg z-5 max-lg:flex-col ">
            <div className="flex flex-1 flex-col justify-center items-center leading-2 pb-8 text-lg max-lg:w-full">
              <div className="w-full flex justify-between border-b border-black mb-8">
                <span className="flex text-amber-00 text-2xl font-semibold pb-4">
                  # Over het Leerhuis
                </span>
              </div>

              <div
                className="w-full max-w-[1100px] flex flex-col items-center justify-center py-8 mt-10
                   max-xmd:flex-row max-xmd:items-center max-xmd:mt-0 max-xmd:py-0 max-xxsm:max-w-full"
              >
                <div className="w-full max-w-[900px] flex flex-col justify-center max-xmd:flex-col max-xmd:max-w-full">
                  <div className="w-full mb-20">
                    <div className="overons_text w-full max-lg:w-full bg-gradient-to-t from-stone-100 to-white rounded-xl border-b-2 border-stone-400 text-black px-10 pt-8 pb-14 max-xxxsm:px-4">
                      <span className="flex justify-center text-2xl font-semibold pb-4 mb-4 text-amber-600 border-b border-black">
                        Leren in een complexe wereld
                      </span>
                      <span className="">
                        Leerhuis Amsterdam nodigt kerkelijke en niet-kerkelijke
                        Amsterdammers uit om elkaar te ontmoeten rond de
                        belangrijke thema's van deze tijd.
                        <br />
                        We organiseren cursussen en inspiratiedagen die gaan
                        over zinvol en verantwoordelijk samenleven.
                        <br />
                        Via ontmoeting en moedige gesprekken zoeken we
                        verdieping en verbreding.
                        <br />
                        Wees welkom!
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex justify-center">
                    <img
                      src={gathering}
                      alt=""
                      className="w-full max-w-[700px] max-xmd:max-w-full"
                    />
                  </div>
                </div>
              </div>

              <Link
                to="/overonspage"
                className="flex justify-center mt-8 max-xxl:mt-16 mb-8"
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
  );
};

export default Overons;

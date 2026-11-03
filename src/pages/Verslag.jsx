import React from "react";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useParams } from "react-router-dom";
import reports from "../reports.json";

const Verslag = () => {
  const url = useLocation().pathname;
  const { id } = useParams();

  const report = reports.reports.find((report) => report.id === id);

  console.log(report);
  return (
    <div className="w-full min-h-screen pt-[180px] px-8 max-xxsm:px-2 mb-32 max-xxsm:pt-[170px]">
      <div className="w-full max-w-[900px] mx-auto ">
        <SectionTitle className="w-full max-w-[900px] text-lg max-xxmd:text-md flex tracking-wide mb-2 py-1 px-4">
          {report.reporttitle}
        </SectionTitle>
        
        <img
          src={`/images/${report.image}`}
          alt=""
          className="w-full h-auto block mx-auto my-2 rounded-lg mb-2 mt-4"
          loading="lazy"
        />

        <div className="mb-4 italic max-xxxsm:text-sm max-xxxsm:mb-2">{report.subtitle}</div>

       <div className="font-semibold text-lg mb-4 max-xxxsm:text-base">{report.intro}</div>

        {report.paragraphs.map((paragraph, index) => (
          <div key={index} className="text-lg max-xxxsm:text-base">
            <div className="font-semibold ">{paragraph.intro}</div>
            <div className="mb-4">{paragraph.alinea1}</div>
            <div>
              <h3 className="font-semibold">{paragraph.header1}</h3>
              <p>{paragraph.alinea2}</p>
            </div>
            <div>
              <h3 className="font-semibold">{paragraph.header2}</h3>
              <p>{paragraph.alinea3}</p>
            </div>
            <div>
              <h3 className="font-semibold">{paragraph.header3}</h3>
              <p>{paragraph.alinea4}</p>
            </div>
            <div>
              <h3 className="font-semibold">{paragraph.header4}</h3>
              <p>{paragraph.alinea5}</p>
            </div>
            <div>
              <h3 className="font-semibold">{paragraph.header5}</h3>
              <p>{paragraph.alinea6}</p>
            </div>
          </div>
        ))}
      </div>
      <BackButton url={url} />
    </div>
  );
};

export default Verslag;

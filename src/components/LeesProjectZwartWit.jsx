import React from 'react'
import Activity from "./Activity";

const LeesProjectZwartWit = ({act}) => {
  return (
    <div className="w-1/2 flex flex-col justify-between pr-6 mt-4 max-xxsm:pr-0 max-socials:w-full">
      <div className="prose-lg py-4 max-xxsm:w-full ">
        <div
          className="text-xl flex flex-row font-semibold mb-4 gap-2 tracking-wide text-black 
                    py-1 max-xxsm:flex-col max-xxsm:gap-0 border-b border-black "
        >
          <span># Leesproject Zwart/Wit</span>
        </div>
        <p className="my-2 h-auto">
          Eindelijk vrij? Bijdrage aan bezinning op kerken en slavernij.
          <br />
          De Nederlandse Raad van Kerken heeft een Bezinningsboekje uitgegeven
          dat we dit jaar als leidraad gebruiken voor gesprekken tussen mensen
          van kleur en witte mensen.
          <br />
          Aandacht voor de geschiedenis van Creolen en Hindostanen heeft de
          deelnemers aan eerdere bijeenkomsten verrijkt.
          <br />
          Nu zullen we het gesprek stimuleren rond de doorwerking van het
          slavernijverleden in het nu, openlijk en onderhuids.
          <br />
          Wij volgen de inhoud van het boekje: I. Slavernij en de Bijbel; II
          Slavernij in Oost en West, in verleden en heden; III Interviews en
          column; IV Heilzame verwerking.
          <br />
          Eerlijke gesprekken, vanuit een verlangen naar een gezamenlijke
          toekomst, dat is wat we beogen.
        </p>
      </div>
      <div className="w-full max-w-[400px] max-xxsm:max-w-full">
        <Activity act={act} />
      </div>
    </div>
  );
}

export default LeesProjectZwartWit

import React from 'react'
import { useLocation } from "react-router-dom";
import BackButton from '../components/BackButton';
import podium from '../podium.json'
import Activity from "../components/Activity";

const Podiumvoorvrienden = () => {

    const url = useLocation().pathname
  return (
      <div className="flex w-full flex-col min-h-screen items-center justify-start pt-[200px] px-4 max-xsm:pt-[170px] mb-20">
        <div className="flex flex-col min-h-screen">
          {podium.podium?.map((act) => (
            <Activity key={act.id} act={act} />
          ))}
          <BackButton url={url} />
        </div>

     
    </div>
  )
}

export default Podiumvoorvrienden
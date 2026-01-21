import React from 'react'
import { useLocation } from "react-router-dom";
import BackButton from '../components/BackButton';

const PodiumvoorvriendenPage = () => {

    const url = useLocation().pathname
  return (
      <div className="flex w-full flex-col min-h-screen items-center justify-start pt-[200px] px-4 max-xsm:pt-[170px]">
    <div className="max-w-[400px] text-lg">Binnenkort zal hier informatie te vinden zijn over cursussen die niet onder het Leerhuis vallen. </div>
     <BackButton url={url} />
    </div>
  )
}

export default PodiumvoorvriendenPage
import React from 'react'
import BackButton from '../components/BackButton';

const Archief = () => {

const url = window.location.pathname

  return (
    <div className="w-full flex flex-col items-center min-h-screen mt-[190px]">
      Archief hier!
      <div>
        <BackButton url={url} />
      </div>
    </div>
  );
}

export default Archief

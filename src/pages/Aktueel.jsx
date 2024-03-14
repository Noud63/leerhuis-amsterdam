import React from 'react'
import BackButton from '../components/BackButton';

const Aktueel = () => {

    const url = window.location.pathname;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg px-4">
        <span>Eerst volgende en/of lopende activiteit</span>
      </div>

      <BackButton url={url} />
    </div>
  );
}

export default Aktueel

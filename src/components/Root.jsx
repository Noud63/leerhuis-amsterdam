import React from 'react'
import Overons from './Overons'
import Activities from './Activities'
import Contact from './Contact';
import Aktueel from './Aktueel';
import PolarisatieHome from './PolarisatieHome';

const Root = () => {
  return (
    <div className="mb-20">
      <PolarisatieHome />
      <Activities />
      <Overons />
      <Aktueel />
      <Contact />
    </div>
  );
}

export default Root

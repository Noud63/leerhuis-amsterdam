import React from 'react'
import Overons from './Overons'
import Activities from './Activities'
import Contact from './Contact';
import Aktueel from './Aktueel';
import Thematiek from './Thematiek';

const Root = () => {
  return (
    <div className="mb-20">
      <Activities />
      <Overons />
      <Aktueel />
      <Contact />
    </div>
  );
}

export default Root

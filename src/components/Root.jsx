import React from 'react'
import Overons from './Overons'
import Activities from './Activities'
import Contact from './Contact';
import ScrollToTop from '../utils/ScrollToTop';

const Root = () => {
  return (
    <>
      <Activities />
      <Overons />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default Root

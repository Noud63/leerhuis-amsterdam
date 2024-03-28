import React from 'react'
import Overons from './Overons'
import Activities from './Activities'
import Contact from './Contact';
import ScrollToTop from '../utils/ScrollToTop';
import Aktueel from './Aktueel';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
    <Activities />
    <Overons />
    <Aktueel />
    <Contact />
      </>
  );
}

export default Root

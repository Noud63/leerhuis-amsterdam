import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Socials from './Socials'
import Overons from './Overons'



const Layout = () => {
  return (
    <div className="w-full max-w-[2000px]">
      <div className="fixed top-0 w-full min-h-screen bg-[url('./assets/images/map_adam4.jpg')] bg-no-repeat bg-center bg-cover -z-[999] opacity-15" />
      <Header />
      <div className="socials h-[30px] flex flex-row justify-center items-center gap-2 md:hidden max-md:mt-10 max-xxsm:mt-8">
        <Socials />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout

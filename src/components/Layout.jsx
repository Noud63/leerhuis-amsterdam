import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Socials from './Socials'
import Overons from './Overons'



const Layout = () => {
  return (
    <div className="w-full max-w-[2000px] mx-auto">
      <div className="w-full bg-gradient-to-r from-neutral-800/0  to-blue-800/20">
        <div className="fixed top-0 w-full max-w-[2000px] min-h-screen bg-[url('./assets/images/map_adam.jpg')] bg-no-repeat bg-center bg-cover -z-[999] opacity-50" />
        <Header />
        <div className="socials h-[30px] flex-row justify-center items-center gap-2 hidden">
          <Socials />
        </div>

        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout

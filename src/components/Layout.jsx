import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Socials from './Socials'
import ScrollToTop from '../utils/ScrollToTop'
import MenuOverlay from './MenuOverlay'

const Layout = () => {

const [showMenu, setShowMenu] = useState(false);

 const closeMenuOverlay = () => {
   setShowMenu(false);
 };

const showMenuOverlay = () => {
  setShowMenu(true);
};

return (
    <div className="w-full max-w-[2000px] mx-auto relative">
      <div className="w-full">
        <div className="fixed top-0 w-full max-w-[2000px] min-h-screen bg-[url('./assets/images/map_adam2.jpg')] bg-no-repeat bg-top bg-cover -z-[999] opacity-5" />
        <Header showMenuOverlay={showMenuOverlay} />
        <div className="socials h-[30px] flex-row justify-center items-center gap-2 hidden">
          <Socials />
        </div>

        <Outlet />
        <Footer />
     
      </div>

      <MenuOverlay showMenu={showMenu} closeMenuOverlay={closeMenuOverlay} />
     <ScrollToTop />
    </div>
  );
}

export default Layout

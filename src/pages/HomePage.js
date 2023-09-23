import React from 'react'
import Navbarpage from '../components/Navbarpage';
import Homeimg from '../components/Homeimg';
import Buttonpage from '../components/Buttonpage';
import Shopbanner from '../components/Shopbanner';
import CrNews from '../components/CrNews';
import Footerpage from '../components/Footerpage';

const HomePage = () => {
  return (
    <>
      <Navbarpage/>
      <Homeimg/>
      <Buttonpage />
      <Shopbanner/>
      <CrNews />
      <Footerpage />
    </>
  )
}

export default HomePage;

import React from 'react'
import {GrLocation} from "react-icons/gr";
import {BiSearch} from "react-icons/bi";

const Homeimg = () => {
  return (
     <header>
        <div className="head">
          <img className="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
          <h3>Discover the best food & drinks in jaipur</h3>
          <div className="search">
          <GrLocation className='ii'/>
            <p>Ywca, 1, Ashoka Rd, Hanu</p>
            <BiSearch className='iii'/>
            <input type="text" placeholder='Search for retaurant, cuisine or a dish'/>
          </div>
        </div>
        <div className="header-image">
          <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
        </div>
     </header> 
    
  )
}

export default Homeimg;

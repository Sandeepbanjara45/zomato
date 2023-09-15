import React from "react";

const Homeimg = () => {
  return (
    <div className="headimg">
    <div className="logo"><h2><i>zomato</i></h2></div>
      <div className="ti-1">
        <h1>welcome to zomato</h1>
        <p>Discover the best food & drinks in Jaipur Jaipur</p>
        <input type="text" placeholder="  Search your food..."></input>
      </div>
      <div className="img_item">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Homeimg;

import React from "react";

const Shopbanner = () => {
  return (
    <>
      <section className="shop-banner">
        <div className="container-1">
          <h1>December sale is on!<br/> with big{" "}
            <span className="orange-text">Discount...</span></h1>
          <div className="sale-percent">
            <p>Sale!<br/> Upto  50% off</p><span></span>
          </div>
          <a href="shop.html" className="cart-btn btn-lg">
            Shop Now
          </a>
        </div>
        <div className="stimg">
          <img
            src="https://w0.peakpx.com/wallpaper/961/910/HD-wallpaper-love-food-neon-icon-red-background-neon-symbols-love-food-creative-neon-icons-love-food-sign-food-signs-love-food-icon-food-icons-thumbnail.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Shopbanner;

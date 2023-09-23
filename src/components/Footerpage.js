import React from "react";
import {CiFacebook} from "react-icons/ci";
import {SlSocialTwitter} from "react-icons/sl";
import {BiLogoInstagram } from "react-icons/bi";
import {FaLinkedin} from "react-icons/fa";
import {BiLogoDribbble} from "react-icons/bi";

const Footerpage = () => {
  return (
    <div>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
				<hr/>
                <p>
                  Ut enim ad minim veniam perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
				<hr/>
                <ul>
                  <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                  <li>support@fruitkha.com</li>
                  <li>+00 111 222 3333</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Pages</h2>
				<hr/>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Shop</a>
                  </li>
                  <li>
                    <a href="news.html">News</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
				<hr/>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email" />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
	   {/* copyright  */}
	<div className="copyright">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<p>Copyrights &copy; 2023 
						<span className="sam"> @ developed by <span className="or">sandeep banjara.</span></span>
					</p>
				</div>
				<div className="col-lg-6 text-right col-md-12">
					<div className="social-icons">
						<ul>
							<li><a href="#" target="_blank"><CiFacebook className="fa"/></a></li>
							<li><a href="#" target="_blank"><SlSocialTwitter className="tr"/></a></li>
							<li><a href="#" target="_blank"><BiLogoInstagram className="ins"/></a></li>
							<li><a href="#" target="_blank"><FaLinkedin className="lin"/></a></li>
							<li><a href="#" target="_blank"><BiLogoDribbble className="tribble"/></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* end copyright  */}
    </div>
  );
};

export default Footerpage;

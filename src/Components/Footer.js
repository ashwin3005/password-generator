import React from "react";
import img1 from './icons8-facebook-50.png'
import img2 from './icons8-twitter-50.png'
import img3 from './icons8-instagram-50.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <img className="align-self-start mr-3" src={img1} alt="fb"></img>
                    </div>
                    <div className="col-3 mx-auto">
                        <img className="align-self-start mr-3" src={img2} alt="insta"></img>
                    </div>
                    <div className="col-3 mx-auto">
                    <img className="align-self-start mr-3" src={img3} alt="insta"></img>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Password. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
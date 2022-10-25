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
            <div className="col-10 col-lg-3  mx-auto">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-auto col-lg-3 mx-auto">
                    <img className="align-self-start mr-3" src={img1} alt="fb"></img>
                    </div>
                    <div className="col-auto col-lg-3 mx-auto">
                        <img className="align-self-start mr-3" src={img2} alt="insta"></img>
                    </div>
                    <div className="col-auto col-lg-3 mx-auto">
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

      </footer>
    </>
  );
};

export default Footer;
"use client"

import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "/images/root/logo-white.png";
import Image from "next/image";
const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3">
        <a href="#">
          <Image
                      width={1280}
                      height={500}
                      style={{width : '128px' , height: '50px'}} src={logo} alt="logo" loading="lazy" />
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5">
        <p className="ptf-footer-copyright has-3-color">
          ©{new Date().getFullYear()}{" "}
          <span className="has-white-color">
            <a
              href="https://zavolt.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              ZAVOLT (PVT) LTD
            </a>
          </span>
          &ensp;-&ensp;All Rights Reserved.
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightTwo;

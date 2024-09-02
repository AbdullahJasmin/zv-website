"use client";

import React from "react";
import SocialTwo from "../../social/SocialTwo";
import Image from "next/image";
const logo = "/images/root/logo-white.png";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a href="#">
          <Image
            width={950}
            height={370}
            style={{ width: "95px", height: "37px" }}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            ZaVolt by{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              rel="noopener noreferrer"
              target="_blank"
            >
              ib-themes
            </a>
          </span>
          . All Rights Reserved.
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;

"use client";

import React from "react";
import FooterList from "../list/FooterList";

const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul>
              <li>
                <span>Address</span>
                <p>
                  38/12, Huludagoda Rd,
                  Mount Lavinia 10350,
                  Western Province,
                  Sri Lanka
                </p>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:94771281441">(+94) 77 128 1441</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:contact@zavolt.com">
                  contact@zavolt.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;

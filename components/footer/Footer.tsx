"use client";

import React from "react";
import Link from "next/link";

const linkList = [
  {
      itemName: "FAQs",
    link: "/",
  },
    // {
    //   itemName: "Term & Conditions",
    //   link: "/",
    // },
    // {
    //   itemName: "Privacy Policy",
    //   link: "/",
    // },
    // {
    //   itemName: "Help",
    //   link: "/",
    // },
    // {
    //   itemName: "Affiliate",
    //   link: "/",
    // },
  {
    itemName: "Services",
    link: "/",
  },
];

const Product = [
  {
      itemName: "About Us",
      link: "/about-us",
  },
    {
        itemName: "Our Services",
        link: "/our-services",
  },
  {
      itemName: "Contact Us",
      link: "/contact-us",
  },
  {
      itemName: "FAQ",
      link: "/faq",
  },
  {
      itemName: "Blog",
      link: "https://blog.zavolt.com",
  },
];

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
              Craft exceptional digital products!
          </div>

          <div className="ptf-footer-heading has-black-color">
              Start by&nbsp;
            <Link
              className="has-accent-1 text-decoration-underline"
              href="/contact"
            >
              Saying Hi!
            </Link>
          </div>

            <a href="tel:+94771281441" className="fz-36">(+94) 77 128 1441</a>
            <br/>
            <a className="fz-36 has-black-color" href="mailto:contact@zavolt.com">
            contact@zavolt.com
          </a>
        </div>
      </div>
        {/*<div className="col-12 col-md-6 col-xl-3">*/}
        {/*  /!* <!--Animated Block--> *!/*/}
        {/*  <div*/}
        {/*    className="ptf-animated-block"*/}
        {/*    data-aos="fade"*/}
        {/*    data-aos-delay="100"*/}
        {/*  >*/}
        {/*    <div className="ptf-widget ptf-widget-links has-black-color">*/}
        {/*      <h4 className="ptf-widget-title">Links</h4>*/}
        {/*      <ul>*/}
        {/*        {linkList.map((val, i) => (*/}
        {/*          <li key={i}>*/}
        {/*            <a href={val.link}>{val.itemName}</a>*/}
        {/*          </li>*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
              <h4 className="ptf-widget-title">Links</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {Product.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

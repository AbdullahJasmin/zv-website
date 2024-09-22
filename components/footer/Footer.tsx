"use client";

import React from "react";
import Link from "next/link";

const siteLinks = [
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
];

const externalLinks = [
    {
        itemName: "Blog",
        link: "https://blog.zavolt.com",
    },
    {
        itemName: "Careers",
        link: "https://careers.zavolt.com",
    },
    {
        itemName: "ZV | Digital",
        link: "https://zavolt.digital",
    },
];

const Footer = () => {
    return (
        <div className="row px-3 px-xxl-0">
            <div className="col-12 col-xl-6">
                {/* <!--Animated Block--> */}
                <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <div
                        className="ptf-footer-heading has-black-color"
                        style={{maxWidth: "37.5rem"}}
                    >
                        Craft exceptional digital products!
                    </div>

                    <div className="ptf-footer-heading has-black-color">
                        Start by&nbsp;
                        <Link
                            className="has-accent-1 text-decoration-underline"
                            href="/contact-us"
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
            <div className="col-12 col-md-6 col-xl-3">
                {/* <!--Animated Block--> */}
                <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                >
                    <div className="ptf-widget ptf-widget-links has-black-color">
                        <h4 className="ptf-widget-title">Site Links</h4>
                        <ul>
                            {siteLinks.map((val, i) => (
                                <li key={i} className="lh-1p5">
                                    <Link href={val.link}>{val.itemName}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
                {/* <!--Animated Block--> */}
                <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="200"
                >
                    <div className="ptf-widget ptf-widget-text">
                        <h4 className="ptf-widget-title">External Links</h4>
                        <div className="ptf-widget ptf-widget-links has-black-color">
                            <ul>
                                {externalLinks.map((val, i) => (
                                    <li key={i} className="lh-1p6">
                                        <Link href={val.link} target={'_blank'}>{val.itemName}</Link>
                                        <div className="text-end d-inline-block mx-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                style={{height: "0.6em"}}
                                                viewBox="0 0 17 17"
                                            >
                                                <path
                                                    d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"/>
                                            </svg>
                                        </div>
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

"use client"

import React from "react";

const Address = () => {
    return (
        <>
            {/* <!--Animated Block--> */}
            <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                <h5 className="fz-16 text-uppercase has-accent-1 fw-semibold">Address</h5>
                {/* <!--Spacer--> */}
                {/*  @ts-ignore */}
                <div className="ptf-spacer" style={{"--ptf-xxl": "1rem"}}></div>
                <p className="fz-20 lh-1p5 has-black-color">
                    38/12, Huludagoda Rd,
                    <br/>
                    Mount Lavinia 10350,
                    <br/>
                    Western Province, Sri Lanka
                </p>
            </div>

            {/* <!--Spacer--> */}
            {/*  @ts-ignore */}
            <div className="ptf-spacer" style={{"--ptf-xxl": "3rem"}}></div>

            {/* <!--Animated Block--> */}
            <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
                <h5 className="fz-16 text-uppercase has-accent-1 fw-semibold">Phone</h5>
                {/* <!--Spacer--> */}
                {/*  @ts-ignore */}
                <div className="ptf-spacer" style={{"--ptf-xxl": "1rem"}}></div>
                <p className="fz-20 lh-1p5 has-black-color">
                    <a href="tel:+94771281441">+94 77 128 1441</a>
                </p>
            </div>

            {/* <!--Spacer--> */}
            {/*  @ts-ignore */}
            <div className="ptf-spacer" style={{"--ptf-xxl": "3rem"}}></div>

            {/* <!--Animated Block--> */}
            <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
                <h5 className="fz-16 text-uppercase has-accent-1 fw-semibold">Email</h5>
                {/* <!--Spacer--> */}
                {/*  @ts-ignore */}
                <div className="ptf-spacer" style={{"--ptf-xxl": "1rem"}}></div>
                <p className="fz-20 lh-1 has-black-color">
                    <a href="mailto:contact@zavolt.com">
                        contact@zavolt.com
                        <br/>
                    </a>
                </p>
            </div>

            {/* <!--Spacer--> */}
            <div
                className="ptf-spacer"
                // @ts-ignore
                style={{"--ptf-lg": "4.375rem", "--ptf-md": "2.1875rem"}}
            ></div>
        </>
    );
};

export default Address;

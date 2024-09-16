"use client";

import React, {useState} from "react";
import Link from "next/link";

const HeroAgency = () => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
      <div className="ptf-showcase-image px-3 px-lg-0" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${"" + "/images/home/agency/team-pic.webp"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-70 fz-100--lg lh-1p1 has-white-color">
                <span className="has-accent-1">
                  Electrifying <br />
                </span>
                Your Brand
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <p
                className="fz-20 has-white-color"
                style={{ maxWidth: "34.375rem" }}
              >
                At ZaVolt, we fuse creativity with technology to spark unique
                digital experiences that drive results. Your vision, our
                expertise—together, we light the path to your brand&apos;s success.
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

              <div className="d-flex">
                {/* <!--Button--> */}
                <Link
                    className="ptf-btn ptf-btn--primary"
                    href="#get-started"
                >
                  Get Started
                </Link>
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--secondary"
                  href="/contact-us"
                  style={{ marginLeft: "2rem" }}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        {/*<div className="ptf-showcase-image image-2">*/}
        {/*  <div className="ptf-showcase-slide">*/}
        {/*    <div className="container">*/}
        {/*      <h1 className="fz-100 fz-90--lg lh-1 has-white-color">*/}
        {/*        <span className="has-accent-1">Swiss</span> Style <br />*/}
        {/*        Interface*/}
        {/*      </h1>*/}
        {/*      /!* <!--Spacer--> *!/*/}
        {/*      <div*/}
        {/*        className="ptf-spacer"*/}
        {/*        // @ts-ignore*/}
        {/*        style={{ "--ptf-xxl": "2.125rem" }}*/}
        {/*      ></div>*/}
        {/*      <p*/}
        {/*        className="fz-24 has-white-color"*/}
        {/*        style={{ maxWidth: "34.375rem" }}*/}
        {/*      >*/}
        {/*        Like any great agency, we are only as good as the result we*/}
        {/*        deliver of our recent work.*/}
        {/*      </p>*/}
        {/*      <div*/}
        {/*        className="ptf-spacer"*/}
        {/*        // @ts-ignore*/}
        {/*        style={{ "--ptf-xxl": "3.625rem" }}*/}
        {/*      ></div>*/}
        {/*      <div className="d-flex">*/}
        {/*        /!* <!--Button--> *!/*/}
        {/*        <a className="ptf-btn ptf-btn--primary" href="" target="_self">*/}
        {/*          Get Started*/}
        {/*        </a>*/}
        {/*        /!* <!--Button--> *!/*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* End .ptf-showcase-image */}

        {/*<div className="ptf-showcase-image image-3">*/}
        {/*  <div className="ptf-showcase-slide">*/}
        {/*    <div className="container">*/}
        {/*      <h1 className="fz-100 fz-90--lg lh-1 has-white-color">*/}
        {/*        <span className="has-accent-1">Crafting</span> Digital*/}
        {/*        Experience*/}
        {/*      </h1>*/}
        {/*      /!* <!--Spacer--> *!/*/}
        {/*      <div*/}
        {/*        className="ptf-spacer"*/}
        {/*        // @ts-ignore*/}
        {/*        style={{ "--ptf-xxl": "3.125rem" }}*/}
        {/*      ></div>*/}
        {/*      <p*/}
        {/*        className="fz-24 has-white-color"*/}
        {/*        style={{ maxWidth: "34.375rem" }}*/}
        {/*      >*/}
        {/*        Like any great agency, we are only as good as the result we*/}
        {/*        deliver of our recent work.*/}
        {/*      </p>*/}
        {/*      /!* <!--Spacer--> *!/*/}
        {/*      <div*/}
        {/*        className="ptf-spacer"*/}
        {/*        // @ts-ignore*/}
        {/*        style={{ "--ptf-xxl": "3.625rem" }}*/}
        {/*      ></div>*/}
        {/*      <div className="d-flex">*/}
        {/*        /!* <!--Button--> *!/*/}
        {/*        <a className="ptf-btn ptf-btn--primary" href="" target="_self">*/}
        {/*          Get Started*/}
        {/*        </a>*/}
        {/*        /!* <!--Video Button--> *!/*/}
        {/*        <div*/}
        {/*          className="ptf-video-button"*/}
        {/*          onClick={() => setOpen(true)}*/}
        {/*          style={{*/}
        {/*            // @ts-ignore*/}
        {/*            "--ptf-title-color": "var(--ptf-color-white)",*/}
        {/*            marginLeft: "2rem",*/}
        {/*          }}*/}
        {/*        >*/}
        {/*          <a href="#" rel="nofollow">*/}
        {/*            <i className="lnil lnil-play"></i>*/}
        {/*          </a>*/}
        {/*          <div className="ptf-video-button__title">*/}
        {/*            View our <br />*/}
        {/*            story*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* End .ptf-showcase-image */}
      {/*<ModalVideo*/}
      {/*  channel="youtube"*/}
      {/*  autoplay*/}
      {/*  isOpen={isOpen}*/}
      {/*  videoId="1gyTUHP6ne8"*/}
      {/*  onClose={() => setOpen(false)}*/}
      {/*/>*/}
      {/* End Youtube Modal video */}
    </>
  );
};

export default HeroAgency;

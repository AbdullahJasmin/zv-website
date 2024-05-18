"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceListTwo from "../list/ServiceListTwo";
import SocialThree from "../social/SocialThree";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const portfolioMenu = [
  { name: "All Projects", number: "11" },
  { name: "Branding", number: "4" },
  { name: "UI/UX Interaction", number: "4" },
  { name: "Motion Video", number: "3" },
  { name: "Illustration", number: "4" },
];

import { portfolioContentfour } from '../../data/works'

const PortfolioFour = () => {
  const [pageItems, setPageItems] = useState([]);
  const [tabActive, setTabActive] = useState("All Projects");
  useEffect(() => {
    if (tabActive == "All Projects") {
      setPageItems(portfolioContentfour);
    } else {
      const fiteredItems = portfolioContentfour.filter(elm => elm
        .meta
        .toLowerCase()
        .split(',')
        .map(elm => elm
          .trim())
        .includes(tabActive
          .toLowerCase()
          .trim()))
      setPageItems(fiteredItems);
    }
  }, [tabActive]);
  return (
    <div>
      <div className="row">
        <div className="col-xl-4">
          <div className="sticky-parent">
            <div className="sticky-column">
              <h1 className="fw-light">
                An Award <br />
                Winning Digital <br />
                Studio
              </h1>
              {/* <!--Spacer--> */}

              <div
                className="ptf-spacer"
                style={{
                  // @ts-ignore
                  "--ptf-xxl": "3.75rem",
                  "--ptf-md": "1.875rem",
                }}
              ></div>

              <div className="ptf-filters ptf-filters--style-3">
                {portfolioMenu.map((item, i) => (
                  <div
                    onClick={() => setTabActive(item.name)}
                    className={
                      tabActive == item.name
                        ? "filter-item active-page"
                        : "filter-item"
                    }
                    key={i}
                  >
                    {item.name}
                    <span className="filter-counter">{item.number}</span>
                  </div>
                ))}
              </div>

              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              {/* <!--Spacer--> */}

              <p className="fz-20">
                We’re expert in <ServiceListTwo />
              </p>

              {/* End .ptf-filters */}

              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="has-black-color">
                <SocialThree />
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-7 offset-xl-1">
          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            // @ts-ignore
            style={{ "--ptf-xl": "5.625rem", "--ptf-md": "2.8125rem" }}
          ></div>
          <div className="ptf-isotope-grid">
            <div>
              {pageItems.map((val, i) => (
                <div className=" grid-item" key={i}>
                  {/* <!--Portfolio Item--> */}
                  <article
                    className="ptf-work ptf-work--style-5"
                    // data-tooltip-content=""
                    data-tooltip-id={val.dataId}
                    key={i}
                  >
                    <Link
                      href={`/works/${val.id}`}
                      className="ptf-work__link"
                    >
                      {" "}
                    </Link>
                    <ReactTooltip
                      float
                      id={val.dataId}
                      place="right"
                      variant="dark"
                      style={{zIndex: 1000}}
                    >
                      <div className="poup-link">
                        <Image
                          width={1200}
                          height={1200}
                          style={{ width: '100%', height: '100%' }}
                          src={val.imgPopup}
                          alt="popup"
                        />
                      </div>
                    </ReactTooltip>
                    <div className="ptf-work__date">{val.date}</div>
                    <h4 className="ptf-work__title">{val.title}</h4>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default PortfolioFour;

"use client";

import React from "react";
import dynamic from "next/dynamic";
// const ReactTooltip = dynamic(async () => {
//   const { Tooltip } = await import("react-tooltip")
//   return Tooltip
// }, { ssr: false });
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";
import Image from "next/image";

import { portfolioContenttwo } from '../../data/works'
const PortfolioTwo = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContenttwo.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            // data-tip
            data-tooltip-id={val.dataId}
            key={i}
          >
            <Link
              className="ptf-work__link"
              href={`/works/${val.id}`}
            ></Link>
            <ReactTooltip
              float
              id={val.dataId}
              place="right"
              variant="dark"
              style={{ zIndex: 1000 }}
            >
              <div className="poup-link">
                <Image
                  width={240}
                  height={240}
                  style={{ width: '100%', height: '100%' }}
                  src={val.imgPopup}
                  alt="popup"
                />
              </div>
            </ReactTooltip>
            <div className="ptf-work__category">{val.cat}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            <div className="ptf-work__date">{val.date}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default PortfolioTwo;

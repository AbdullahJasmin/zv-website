"use client";

import Image from "next/image";
import React from "react";

const awardContent = [
  {
    date: "2024",
    img: "dic.jpg",
    delayAnimation: "0",
    awardList: [
      {
        title: "BODO - Finalists",
        subTitle: "Dialog Innovation Challenge",
      },
    ],
  },
  {
    date: "2023",
    img: "insl.jpg",
    delayAnimation: "100",
    awardList: [
      {
        title: "BODO - 2nd Runners Up",
        subTitle: "IEEE INSL 2023 National Round",
      },
    ],
  },
  {
    date: "2023",
    img: "hackx.jpg",
    delayAnimation: "100",
    awardList: [
      {
        title: "BODO - Finalists",
        subTitle: "HackX 8.0 - Inter University Startup Challenge",
      },
    ],
  },
];

const Award = () => {
  return (
      <ul
          className="ptf-rewards-list ptf-rewards-list--small"
          style={{
            // @ts-ignore
            "--ptf-border-width": "2px",
            "--ptf-border-color": "var(--ptf-color-black)",
          }}
      >
        {awardContent.map((val, i) => (
            <li
                className="ptf-rewards-item"
                data-aos="fade"
                data-aos-delay={val.delayAnimation}
                key={i}
            >
              <div className="ptf-rewards-item__date">{val.date}</div>
              <div className="ptf-rewards-item__logo">
                <Image
                    width={1200}
                    height={1200}
                    style={{width: "55%"}}
                    // layout="fill"
                    src={`/images/root/rewards/${val.img}`}
                    alt="brand"
                    loading="lazy"
                />
              </div>
              {/* End .ptf-rewards-item__logo */}

              <div className="ptf-rewards-item__content">
                {val.awardList.map((list, i) => (
                    <div className="ptf-rewards-project" key={i}>
                      <div className="ptf-rewards-project__content">
                        <h5>
                          <a href="#">{list.title}</a>
                        </h5>
                        <span>{list.subTitle}</span>
                      </div>
                      {/*<div className="ptf-rewards-project__link">*/}
                      {/*  <a*/}
                      {/*    className="ptf-link-with-arrow text-uppercase fz-14"*/}
                      {/*    href="#"*/}
                      {/*  >*/}
                      {/*    See project*/}
                      {/*  </a>*/}
                      {/*</div>*/}
                    </div>
                ))}
                {/* End .ptf-rewards-project */}
              </div>
            </li>
        ))}
      </ul>
  );
};

export default Award;

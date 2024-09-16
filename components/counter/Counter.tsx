"use client";

import React from "react";
import CountUp from "react-countup";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "30",
    metaText1: "Happy",
    metaText2: "Clients",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "10",
    metaText1: "Countries",
    metaText2: "",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "40",
    metaText1: "Projects",
    metaText2: "Completed",
    animationDelay: "200",
  },
  {
    startCount: "0",
    endCount: "10",
    metaText1: "Team",
    metaText2: "Members",
    animationDelay: "300",
  },
];

const Counter = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div
      className="row"
      //  @ts-ignore
      style={{ "--bs-gutter-y": "2rem" }}>
      {counterUpContent.map((val, i) => (
          <div className="col-6 col-lg-3 text-center" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-1">
              <div className="ptf-counter-up__value">
                <CountUp
                  start={focus ? Number(val.startCount) : null}
                  end={Number(val.endCount)}
                  duration={1}
                  redraw={true}
                >
                </CountUp>
                {"+"}
              </div>
              <h5 className="ptf-counter-up__title fw-medium has-accent-2">
                {val.metaText1} <br />
                {val.metaText2}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;

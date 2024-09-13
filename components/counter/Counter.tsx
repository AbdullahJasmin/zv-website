"use client";

import React from "react";
import CountUp from "react-countup";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "2",
    metaText1: "YEARS OF",
    metaText2: "EXPERIENCE",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "25",
    metaText1: "SATISFIED",
    metaText2: "CLIENTS",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "10",
    metaText1: "TEAM",
    metaText2: "MEMBERS",
    animationDelay: "200",
  },
  {
    startCount: "0",
    endCount: "35",
    metaText1: "PROJECTS COMPLETED",
    metaText2: "WITH GLOBAL CLIENTELE",
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
        <div className="col-6 col-lg-3" key={i}>
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
              </div>
              <h5 className="ptf-counter-up__title">
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

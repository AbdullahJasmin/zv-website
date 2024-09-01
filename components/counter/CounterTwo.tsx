"use client";

import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "20",
    metaText1: "HAPPY CLIENTS",
    metaText2: "IN 1.5 YEARS",
    animationDelay: "100",
    colClass: "",
  },
  {
    startCount: "0",
    endCount: "30",
    metaText1: "PROJECTS COMPLETED",
    metaText2: "WITH WORLDWIDE CLIENTELE",
    animationDelay: "200",
    colClass: "text-xl-end",
  },
];

const CounterTwo = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div className={`col-12 col-xl ${val.colClass}`} key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-2">
              <div className="ptf-counter-up__value">
                {" "}
                <CountUp
                  start={focus ? Number(val.startCount) : null}
                  end={Number(val.endCount)}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
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
    </>
  );
};

export default CounterTwo;

"use client"

import React from "react";
import Image from "next/image";
const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1-m",
    title: "Abdullah Jasmin",
    designation: "Founder/Director",
  },
  {
    delayAnimation: "100",
    img: "team-2-m",
    title: "Sandul Renuja",
    designation: "Co-Founder/CEO",
  },
  {
    delayAnimation: "200",
    img: "team-3-m",
    title: "Nethsara Sandeepa",
    designation: "Co-Founder/CTO",
  },
  {
    delayAnimation: "300",
    img: "team-4-m",
    title: "Suraif Muhammad",
    designation: "Co-Founder/CBDO",
  },

];

const TeamTwo = () => {
  return (
      <>
        {teamContent.map((val, i) => (
            <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay={val.delayAnimation}
                key={i}
            >
              {/* <!--Team Member--> */}
              <div className="ptf-team-member">
                <div className="ptf-team-member__avatar">
                  <div className="shadow-effect"></div>
                  <a href="#">
                    {" "}
                    <Image
                        width={1200}
                        height={1200}
                        style={{width : '100%' , height: '100%'}}
                        src={`/images/root/team/${val.img}.png`}
                        alt={val.title}
                        loading="lazy"
                    />
                  </a>
                </div>
                <div className="ptf-team-member__content">
                  <h6 className="ptf-team-member__name">
                    <a href="#">{val.title}</a>
                  </h6>
                  <p className="ptf-team-member__function">{val.designation}</p>
                </div>
              </div>
            </div>
        ))}
      </>
  );
};

export default TeamTwo;

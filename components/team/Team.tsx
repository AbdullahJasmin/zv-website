"use client"

import React from "react";
import Image from "next/image";
const teamContent = [
  {
    delayAnimation: "0",
    img: "aj",
    title: "Abdullah Jasmin",
    designation: "Co-Founder / UI/UX Designer / Web Developer",
  },
  {
    delayAnimation: "100",
    img: "ns",
    title: "Nethsara Sandeepa",
    designation: "Co-Founder / Software Engineer",
  },
  {
    delayAnimation: "200",
    img: "sr",
    title: "Sandul Renuja",
    designation: "Co-Founder / Software Engineer",
  },
    {
    delayAnimation: "300",
    img: "sm",
    title: "Suraif Muhammad",
    designation: "Co-Founder / Web Developer",
  },
  {
    delayAnimation: "100",
    img: "dh",
    title: "Dilanga Harshani",
    designation: "Project Manager",
  },
  {
    delayAnimation: "200",
    img: "wp",
    title: "Waruna Parakckrama",
    designation: "Digital Media Artist / UI/UX Designer",
  },
  {
    delayAnimation: "300",
    img: "nm",
    title: "Neethamadhu Madurasinghe",
    designation: "Software Engineer",
  },
  {
    delayAnimation: "400",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const Team = () => {
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
          <div className="ptf-team-member ptf-team-member--has-effect">
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

export default Team;

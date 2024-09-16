"use client"

import React from "react";

const socialList = [
    {
        iconName: "socicon-facebook",
        link: "https://www.facebook.com/zavoltcom",
    },
    {
        iconName: "socicon-instagram",
        link: "https://www.instagram.com/zavolt_com",
    },
    {
        iconName: "socicon-linkedin",
        link: "https://www.linkedin.com/company/zavolt",
    },
    {
        iconName: "socicon-behance",
        link: "https://www.behance.net/ZaVolt",
    },
    {
        iconName: "socicon-github",
        link: "https://github.com/ZaVolt",
    },
];

const SocialTwo = () => {
    return (
        <>
            {socialList.map((val, i) => (
                <a
                    className="ptf-social-icon ptf-social-icon--style-1 mx-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={val.link}
                    key={i}
                >
                    <i className={val.iconName}></i>
                </a>
            ))}
        </>
    );
};

export default SocialTwo;

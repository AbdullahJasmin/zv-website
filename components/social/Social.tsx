"use client"

import React from "react";

const SocialShare = [
    {
        iconName: "socicon-linkedin",
        link: "https://www.linkedin.com/company/zavolt",
        iconClass: "linkedin",
    },
    {
        iconName: "socicon-facebook",
        link: "https://www.facebook.com/zavoltcom",
        iconClass: "facebook",
    },
    {
        iconName: "socicon-instagram",
        link: "https://www.instagram.com/zavolt_com",
        iconClass: "instagram",
    },
];
const Social = () => {
    return (
        <div className="ptf-offcanvas-menu__socials">
            {/* <!--Social Icon--> */}
            {SocialShare.map((icon, i) => (
                <a
                    className={`ptf-social-icon ptf-social-icon--style-3 facebook  ${icon.iconClass}`}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                >
                    <i className={icon.iconName}></i>
                </a>
            ))}
        </div>
    );
};

export default Social;

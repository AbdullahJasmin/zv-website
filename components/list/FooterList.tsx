"use client";

import React from "react";
import Link from "next/link";

const footerItems = [
  {itemName: "About Us", link: "/about-us"},
  {itemName: "Our Services", link: "/our-services"},
  {itemName: "Contact Us", link: "/contact-us"},
  {itemName: "FAQ", link: "/faq"},
  { itemName: "Blog", link: "https://blog.zavolt.com" },
  {itemName: "Careers", link: "https://careers.zavolt.com"},
  {itemName: "ZV | Digital", link: "https://zavolt.digital"},
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
          <li key={i}>
            <Link href={item.link} target={item.link.includes('https://') ? '_blank' : '_self'}>{item.itemName}</Link>
            {item.link.includes('https://') && <div className="text-end d-inline-block mx-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  style={{height: "1em"}}
                  viewBox="0 0 17 17"
              >
                <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"/>
              </svg>
            </div>}
          </li>
      ))}
    </ul>
  );
};

export default FooterList;

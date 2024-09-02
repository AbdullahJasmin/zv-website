"use client";

import React from "react";
import Link from "next/link";

const footerItems = [
  { itemName: "FAQs", link: "" },
  { itemName: "Term & Conditions", link: "" },
  { itemName: "Privacy Policy", link: "" },
  { itemName: "Contact Us", link: "" },
  { itemName: "ZV Digital", link: "https://zavolt.digital" },
  { itemName: "Blog", link: "https://blog.zavolt.com" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;

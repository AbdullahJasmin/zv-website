"use client";
import React from "react";

const serviceContent = [
  { imagePath: "../../public/assets/img/root/services/img-1.webp", name: "Brand Consultant" },
  { imagePath: "../../public/assets/img/root/services/img-1.webp", name: "UI/UX Solution" },
  { imagePath: "../../public/assets/img/root/services/img-1.webp", name: "Packaging" },
  { imagePath: "../../public/assets/img/root/services/img-1.webp", name: "Motion Video & TVC" },
];

const ServiceListThree = () => {
  return (
    <>
      <ul>
        {serviceContent.map((val, i) => (
          <li key={i}>
            <a href="#">
            <img src={val.imagePath} alt={val.name} style={{ width: '24px', height: '24px', marginRight: '8px' }} /> {val.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceListThree;

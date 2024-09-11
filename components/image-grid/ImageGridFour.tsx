import React from "react";
import Image from "next/image";

interface ImageGridFourProps {
  url: string;
}

const ImageGridFour = ({ url }: ImageGridFourProps) => {
  return (
    <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
      <div className="ptf-simple-image">
        <Image
          width={1200}
          height={1200}
          style={{ width: "100%", height: "100%" }}
          src={url}
          alt="service"
          role="button"
        />
      </div>
    </div>
  );
};

export default ImageGridFour;

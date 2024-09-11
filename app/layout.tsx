"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import 'react-tooltip/dist/react-tooltip.css'
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});


import "../styles/main.scss";
import "../styles/fonts/1.css";
import "../styles/fonts/2.css";
import "../styles/fonts/3.css";
import "../styles/fonts/4.css";

const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  const [showCursor, setShowCursor] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    if (typeof window !== "undefined") {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouchDevice) {
        setShowCursor(true);
      }
    }
  }, []);
  return (
    <html suppressHydrationWarning={false} className="html" lang="en">
      <body>
        {children}
        {showCursor && (
          <AnimatedCursor
            innerSize={8}
            outerSize={44}
            color="220, 53, 69"
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={1.2}
          />
        )}
        <ScrollToTop />
      </body>
    </html>
  );
}

"use client";
import {useEffect, useState} from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import "react-tooltip/dist/react-tooltip.css";
import dynamic from "next/dynamic";
import "../styles/main.scss";
import "../styles/preloader.css";
import "../styles/fonts/1.css";
import "../styles/fonts/2.css";
import "../styles/fonts/3.css";
import "../styles/fonts/4.css";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});

const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), {
    ssr: false,
});

export default function RootLayout({children}) {
    const [loading, setLoading] = useState(true);
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        AOS.init({
            delay: -200,
            duration: 800,
        });

        if (typeof window !== "undefined") {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            if (!isTouchDevice) {
                setShowCursor(true);
            }
        }

        setTimeout(() => setLoading(false), 200);

    }, []);
    return (
        <html suppressHydrationWarning={false} className="html" lang="en">
        <head>
            <link rel="icon" href="/images/favicon-dark-mode.ico" id="favicon"/>
            <meta name="description" content="ZaVolt - Premier UI/UX, Development & Digital Marketing Agency"/>
            <meta property="og:title" content="ZaVolt"/>
            <meta property="og:description" content="ZaVolt - Premier UI/UX, Development & Digital Marketing Agency"/>
            <meta property="og:image" content="/images/og-img.jpg"/>
            <meta property="og:url" content="https://zavolt.com"/>
            <meta property="og:type" content="website"/>
            <link rel="icon" href="/images/favicon-light-mode.ico" id="favicon"/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            function updateFavicon() {
              document.getElementById('favicon').href = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? '/images/favicon-dark-mode.ico'
                : '/images/favicon-light-mode.ico';
            }
            updateFavicon();
            window.matchMedia('(prefers-color-scheme: dark)').addListener(updateFavicon);
          `,
                }}
            />
        </head>
        <body>
        {loading ? (
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        ) : (
            <></>
        )}
        <div className={`all-content ${!loading ? "fade-in" : ""}`}>
            {children}
        </div>
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
        <ScrollToTop/>
        </body>
        </html>
    )
        ;
}

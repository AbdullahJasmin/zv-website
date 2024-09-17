// 'use client'
// const ClutchWidget = () => {
//     return (
//         <>
//             <script async defer type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
//             <div className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="14"
//                  data-height="72" data-nofollow="true" data-expandifr="true" data-scale="100"
//                  data-clutchcompany-id="2369861"></div>
//         </>
//     );
// };
//
// export default ClutchWidget;
"use client";

import React, {useEffect, useState} from "react";

export function ClutchWidget() {
    const [showWidget, setShowWidget] = useState(false);

    useEffect(() => {
        // alert(showWidget);
        const script = document.createElement("script");
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.src = "https://widget.clutch.co/static/js/widget.js";

        script.async = true;
        document.body.appendChild(script);

        // Set showWidget to true after component mounts

        setShowWidget(true);

        // Clean up

        return () => {
            document.body.removeChild(script);
        };
    }, [showWidget, setShowWidget]);

    return (

        <div>
            {showWidget && (
                <div
                    className="clutch-widget"
                    data-url="https://widget.clutch.co"
                    data-widget-type="14"
                    data-height="72"
                    data-nofollow="true"
                    data-expandifr="true"
                    data-scale="100"
                    data-clutchcompany-id="2369861"
                />
            )}
        </div>
    );
}

export default ClutchWidget;
"use client"


import React from "react";
import Slider from "react-slick";

const testimonialContent = [
    {
        descriptions: `Abdullah and the team at ZaVolt brings a wealth of knowledge and skills to the table. Their relentless attitude and attention to detail is what I admire the most, when it comes to their ways of working...`,
        name: "Sabith Mazahir",
        designation: "Head of Sales & Marketing - Stag Technologies",
    },
    {
        descriptions: `I had the pleasure of working with ZaVolt on a recent project, and they truly exceeded expectations... ”`,
        name: "Akash Moonesinghe",
        designation: "Marketing & Operations Manager - Fitness First Sri Lanka",
    },
];

const Testimonial = () => {
    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <Slider {...settings} className="arrow-none">
                {testimonialContent.map((val, i) => (
                    <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="100"
                        key={i}
                    >
                        <div
                            className="ptf-testimonial ptf-testimonial--style-2"
                            style={{
                                "--ptf-text-align": "left",
                                "--ptf-content-color": "var(--ptf-color-white)",
                                "--ptf-author-color": "var(--ptf-color-white)",
                                "--ptf-info-color": "var(--ptf-color-white)",
                            }}
                        >
                            <div className="ptf-testimonial__content">
                                <p>{val.descriptions}</p>
                            </div>
                            <div className="ptf-testimonial__meta">
                                <h6 className="ptf-testimonial__author">{val.name}</h6>
                                <div className="ptf-testimonial__info">{val.designation}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Testimonial;

"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonialContent = [
    {
        avatar: "avatar-sabith.webp",
        name: "Sabith Mazahir",
        email: "Head of Sales & Marketing - Stag Technologies",
        hightlightText: "",
        date: "",
        description: `"Abdullah and the team at ZaVolt brings a wealth of knowledge and skills to the table. Their relentless attitude and attention to detail is what I admire the most, when it comes to their ways of working. I felt as if we had our own development team backing us up. I have my complete trust and fullest confidence in this young and upcoming team, and I wish them all the success in the years to come."`,
    },
    {
        avatar: "avatar-akash.webp",
        name: "Akash Moonesinghe",
        email: "Marketing & Operations Manager - Fitness First Sri Lanka",
        hightlightText: "",
        date: "",
        description: `"I had the pleasure of working with ZaVolt on a recent project, and they truly exceeded expectations. Their software development work was exceptional, turning our vision into a high-quality, user-friendly application. What stood out was their remarkable efficiency, delivering on time and within budget without compromising quality.

Their exemplary work, efficiency, friendly service, and responsive problem-solving make them an outstanding software development partner."`,
    },
    {
        avatar: "avatar-gianluca.jpg",
        name: "Gianluca Iacopini ",
        email: "Senses Sri Lanka",
        hightlightText: "",
        date: "",
        description: `“ZaVolt (PVT) Ltd successfully delivered the project within the agreed-upon schedule. They maintained stellar communication and ensured constant availability throughout the engagement. Their responsiveness was a trademark of their work.”`,
    },
];

const TestimonialTwo = () => {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings} className="arrow-none">
                {testimonialContent.map((val, i) => (
                    <div className="swiper-slide" key={i}>
                        <div
                            className="ptf-twitter-review ptf-twitter-review--style-1"
                            key={i}
                        >
                            <div className="ptf-twitter-review__header">
                                <div className="ptf-twitter-review__avatar">
                                    <Image
                                        width={360}
                                        height={360}
                                        style={{width: '100%', height: '100%'}}
                                        src={`/images/root/${val.avatar}`}
                                        alt="avatar"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="ptf-twitter-review__meta">
                                    <h6 className="ptf-twitter-review__author">{val.name}</h6>
                                    <div className="ptf-twitter-review__info">
                                        {val.email}
                                    </div>
                                </div>
                                {/*<div className="ptf-twitter-review__icon">*/}
                                {/*  <i className="socicon-twitter"></i>*/}
                                {/*</div>*/}
                            </div>
                            <div className="ptf-twitter-review__content">
                                <p>
                                    {/*<a*/}
                                    {/*  href="https://twitter.com/"*/}
                                    {/*  target="_blank"*/}
                                    {/*  rel="noopener noreferrer"*/}
                                    {/*>*/}
                                    {/*  {val.hightlightText}*/}
                                    {/*</a>{" "}*/}
                                    {/*- */}
                                    {val.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default TestimonialTwo;

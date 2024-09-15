"use client";

import React from "react";
import Link from "next/link";

const faqContent = [
    {
        title: "Projects",
        faqInner: [
            {
                title: "What kind of projects do you specialize in?",
                descriptions: `We specialize in custom software development, mobile application development, and AI-driven solutions. Our team is experienced in building scalable software tailored to your business needs.`,
            },
            {
                title: "Do you take on full project development or just upgrades and fixes to existing systems?",
                descriptions: `Yes, we handle both. Whether you need a full project built from scratch or upgrades and fixes to your existing systems, our team is equipped to manage both efficiently..`,
            },
            {
                title: "Do you work on your own products as well as client projects?",
                descriptions: `Yes, while we are dedicated to delivering exceptional service to our clients, we also invest in developing our own in-house products. One of our flagship products is BODO, an innovative property rental and management ecosystem.`,
            },
        ],
    },
    {
        title: "Payments",
        faqInner: [
            {
                title: "How is payment handled for your services?",
                descriptions: `We offer flexible payment plans tailored to each project. Typically, payments are divided into milestones, with an initial deposit required to start the project. Additional payments are made upon completion of key project phases.`,
            },
            {
                title: "Are there any hidden fees?",
                descriptions: `No, we provide a transparent pricing structure. All costs are clearly outlined in the contract, and any additional services or changes are discussed and agreed upon before implementation.`,
            },
        ],
    },
    {
        title: "Support",
        faqInner: [
            {
                title: "How long will I receive support after the project is completed?",
                descriptions: `We offer a standard support period of 3-6 months after project delivery for most software development projects. Extended support and maintenance plans are also available, ensuring your system continues to run smoothly.`,
            },
            {
                title: "Do you offer ongoing maintenance?",
                descriptions: `Yes, we offer maintenance services to keep your software updated and running optimally. Whether you need periodic updates or continuous support, we’ve got you covered.`,
            },
        ],
    },
    {
        title: "Satisfaction & Refunds",
        faqInner: [
            {
                title: "What if I’m not satisfied with the service? Can I get a refund?",
                descriptions: `Client satisfaction is our top priority. While we do not offer refunds, we work closely with you throughout the project to ensure the final product meets or exceeds your expectations. We encourage open communication to avoid any issues before completion.`,
            },
            {
                title: "Can I make changes to the project once it’s started?",
                descriptions: `Yes, we understand that project requirements can evolve. We offer flexibility to accommodate changes, and we’ll discuss any necessary adjustments to timelines and costs transparently.`,
            },
        ],
    },
];

const FaqTwo = () => {
    return (
        <section>
            {/* <!--Spacer--> */}

            <div className="container-xxl">
                {faqContent.map((item, i) => (
                    <div key={i}>
                        <div className="ptf-animated-block" data-aos="fade">
                            {/* <!--FAQ--> */}
                            <div className="ptf-faq">
                                <div className="ptf-faq__category">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="ptf-faq__content">
                                    {item.faqInner.map((val, i) => (
                                        <div className="ptf-faq__item" key={i}>
                                            <div className="ptf-faq__question">
                                                <h6 className={'fw-semibold'}>{val.title}</h6>
                                            </div>
                                            <div className="ptf-faq__answer">
                                                <p>{val.descriptions}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {/* End .ptf-faq__item */}
                                </div>
                            </div>
                        </div>
                        <div
                            className="ptf-spacer"
                            // @ts-ignore
                            style={{"--ptf-xxl": "4rem"}}
                        ></div>
                    </div>
                ))}

                {/* <!--Spacer--> */}
                {/* @ts-ignore */}
                <div className="ptf-spacer" style={{"--ptf-xxl": "3rem"}}></div>
                {/* <!--Animated Block--> */}
                <div className="ptf-animated-block" data-aos="fade">
                    <p className="fz-24">
                        Don’t find your question?{" "}
                        <Link
                            className="has-accent-4 text-decoration-underline"
                            href="/contact-us"
                        >
                            Contact us{" "}
                        </Link>
                        now, we are always willing to help you :)
                    </p>
                </div>
            </div>
            {/* <!--Spacer--> */}
            <div
                className="ptf-spacer"
                // @ts-ignore
                style={{"--ptf-xxl": "10rem", "--ptf-md": "5rem"}}
            ></div>
        </section>
    );
};

export default FaqTwo;

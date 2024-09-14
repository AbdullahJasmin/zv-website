interface WhyUsFact {
    id: number;
    subTitle: string;
    title: string;
    descriptions: string;
    delayAnimation: string;
}

const whyUsFacts: WhyUsFact[] = [
    {
        id: 1,
        subTitle: "",
        title: "Quality Centric",
        descriptions: `At ZaVolt, we are unwaveringly committed to delivering quality-centric solutions. Our rigorous processes and attention to detail ensure that every project meets the highest standards of excellence`,
        delayAnimation: "0",
    },

    {
        id: 2,
        subTitle: "",
        title: "Best Practices",
        descriptions: `With ZaVolt, you can trust that we follow industry best practices. Our experienced team stays up-to-date with the latest trends and innovations, ensuring that we provide you with cutting-edge solutions.`,
        delayAnimation: "100",
    },
    {
        id: 3,
        subTitle: "",
        title: "Reasonable Pricing",
        descriptions: `At ZaVolt, we believe in transparency and fairness. Our pricing is reasonable, providing you with cost-effective solutions without compromising on quality or service.`,
        delayAnimation: "200",
    },
    {
        id: 4,
        subTitle: "",
        title: "Expert Team",
        descriptions: `Our team consists of skilled experts who are passionate about their craft. With a diverse range of expertise, we tackle every project with proficiency and dedication.`,
        delayAnimation: "300",
    },
    {
        id: 5,
        subTitle: "",
        title: "One Stop Solution",
        descriptions: `ZaVolt is your one-stop solution for all your digital needs. From design to development, marketing, and support, we offer a comprehensive suite of services to streamline your business.`,
        delayAnimation: "400",
    },
    {
        id: 6,
        subTitle: "",
        title: "After Sales Service",
        descriptions: `We value our clients beyond project completion. With ZaVolt's after-sales service, you can rely on us for ongoing support, maintenance, and assistance to ensure your continued success.`,
        delayAnimation: "500",
    },
];

const WhyUs = () => {
    return (
        <div
            className="row"
            style={{
                "--bs-gutter-x": "3.75rem",
                "--bs-gutter-y": "6.5rem",
            }}
        >
            {whyUsFacts.map((val, i) => (
                <div className="col-xl-4 col-lg-6" key={i}>
                    {/* <!--Animated Block--> */}
                    <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay={val.delayAnimation}
                    >
                        {/* <!--Approach Box--> */}
                        <div
                            className="ptf-approach-box"
                            style={{
                                "--ptf-title-color": "var(--ptf-color-white)",
                            }}
                        >
                            <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
                            <h3 className="ptf-approach-box__title h1">{val.title}</h3>
                            <div className="ptf-approach-box__content">
                                <p>{val.descriptions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhyUs;

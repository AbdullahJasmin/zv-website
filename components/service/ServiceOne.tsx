interface OurServiceItem {
  id: number;
  icon: string;
  titlePart1: string;
  titlePart2: string;
  descriptions: string;
}

const services: OurServiceItem[] = [
  {
    id: 11,
      icon: "lnil lnil-3d",
    titlePart1: "CUSTOM SOFTWARE",
    titlePart2: "DEVELOPMENT",
    description: `Streamline your business operations with our custom software solutions. We create tailor-made applications that address your unique challenges, boost efficiency, and support your business growth.`,
  },
  {
    id: 12,
      icon: "lnil lnil-Mobile",
    titlePart1: "MOBILE APPLICATION",
    titlePart2: "DEVELOPMENT",
    description: `Bring your app ideas to life with our mobile development expertise. We design and develop user-friendly, feature-rich mobile applications that connect with your audience across all devices.`,
  },
  {
    id: 13,
      icon: "lnil lnil-bulb-alt",
    titlePart1: "CUSTOM AI",
    titlePart2: "SOLUTIONS",
    description: `Harness the power of AI to drive innovation in your business. Our custom AI solutions are designed to optimize processes, provide insightful analytics, and enhance decision-making, tailored to your specific needs.`,
  },
];

const ServiceOne = () => {
  return (
    <>
      {services.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
              {/*<Link*/}
              {/*  href={`/service/${val.id}`}*/}
              {/*  className="ptf-service-box__link"*/}
              {/*></Link>*/}
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
              {/*<div className="ptf-service-box__arrow">*/}
              {/*  <i className="lnil lnil-chevron-right"></i>*/}
              {/*</div>*/}
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;

interface ApproachItem {
  id: number;
  subTitle: string;
  title: string;
  descriptions: string;
  delayAnimation: string;
}

const approaches: ApproachItem[] = [
  {
    id: 1,
    subTitle: "ONE",
    title: "Research",
    descriptions: `Our process begins with thorough research and analysis. 
      We dive deep into understanding your business needs, market trends, and technological landscape. 
      This phase is crucial for gathering insights that will guide the entire project, 
      ensuring that our solutions are not only innovative but also relevant and aligned with your goals.`,
    delayAnimation: "0",
  },

  {
    id: 2,
    subTitle: "TWO",
    title: "Concept",
    descriptions: `In this stage, we transform insights into actionable concepts. 
      We brainstorm ideas, develop initial wireframes, and outline the core functionalities that will drive your project forward. 
      Our focus is on creating a concept that is both user-centric and technically feasible, 
      setting a strong foundation for development.`,
    delayAnimation: "100",
  },
  {
    id: 3,
    subTitle: "THREE",
    title: "Strategy",
    descriptions: `With a solid concept in place, we craft a comprehensive strategy that includes project timelines, 
      resource allocation, and technology stack selection. Our strategy phase ensures that every aspect of 
      the project is planned with precision, minimizing risks and optimizing efficiency from start to finish.`,
    delayAnimation: "200",
  },
  {
    id: 4,
    subTitle: "FOUR",
    title: "Development",
    descriptions: `This is where ideas come to life. Our development team takes the detailed plans and strategies 
    and turns them into a fully functional product. We use the latest technologies and best practices to 
    ensure that the final solution is robust, scalable, and future-proof.`,
    delayAnimation: "300",
  },
  {
    id: 5,
    subTitle: "FIVE",
    title: "Test",
    descriptions: `Quality assurance is integral to our process. We rigorously test the product at every stage of 
    development to identify and resolve issues early. Our testing phase includes functional, 
    performance, and security testing to ensure that the solution meets the highest standards and is ready for deployment.`,
    delayAnimation: "400",
  },
  {
    id: 6,
    subTitle: "SIX",
    title: "Hand Over",
    descriptions: `Once development and testing are complete, we prepare for a seamless handover. 
    This phase includes deployment, user training, and documentation.
     We ensure that you have everything you need to manage and maintain the solution effectively, 
     with ongoing support available as needed.`,
    delayAnimation: "500",
  },
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approaches.map((val, i) => (
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

export default Approach;

export interface OurServiceItem {
  id: number;
  handle: string;
  icon: string;
  titlePart1: string;
  titlePart2: string;
  description1: string;
  description2: string;
  specialization: string;
  coverImage?: string;
}

export const services: OurServiceItem[] = [
  {
    id: 11,
    handle: "custom-software-development",
    icon: "lnil lnil-3d",
    titlePart1: "WEB APPLICATION",
    titlePart2: "DEVELOPMENT",
    description1: `Our development team brings excellence in crafting custom software solutions. 
    We understand that each business is unique, and we tailor our software to meet your specific needs.`,
    description2: `Whether you're looking to streamline operations, enhance customer engagement, 
    or drive innovation, our custom software is designed to empower your business and adapt as you grow.`,
    specialization: `We specialize in delivering custom software that is as unique as your business. 
    Our solutions are built to scale, ensuring they grow with your organization while maintaining 
    high performance. By leveraging cutting-edge technologies and our deep industry knowledge, 
    we develop software that not only solves your current challenges but also anticipates future needs.`,
    coverImage: "/images/custom-software-development.jpg",
  },
  {
    id: 12,
    handle: "mobile-application-development",
    icon: "lnil lnil-Mobile",
    titlePart1: "MOBILE APPLICATION",
    titlePart2: "DEVELOPMENT",
    specialization: `Our expertise lies in crafting mobile applications that combine functionality with 
    an exceptional user experience. We specialize in developing apps that are intuitive, responsive, 
    and tailored to meet the needs of your audience. Whether for iOS or Android, our applications are 
    built to enhance engagement and deliver consistent performance across all devices.`,
    description1: `ZaVolt specializes in creating mobile applications that provide seamless, 
    user-friendly experiences. Our expert developers work closely with you to design and build apps 
    that resonate with your audience, offering intuitive navigation and powerful functionality.`,
    description2: `Whether you need a consumer-facing app or an enterprise solution, our mobile 
    apps are engineered for performance, scalability, and success.`,
    coverImage: "/images/custom-software-development.jpg",
  },
  {
    id: 13,
    handle: "custom-ai-solutions",
    icon: "lnil lnil-bulb-alt",
    titlePart1: "CUSTOM AI",
    titlePart2: "SOLUTIONS",
    specialization: `ZaVolt's specialization in AI allows us to create intelligent solutions 
    that automate processes, analyze data, and deliver insights that drive smarter decisions. 
    We focus on integrating AI into your existing systems to optimize operations and create a 
    competitive advantage. Our AI solutions are tailored to your specific requirements, ensuring 
    they align perfectly with your business objectives.`,
    description1: `Harness the power of artificial intelligence with ZaVolt's custom AI solutions. 
    We develop AI-driven systems that transform the way you do business, from automating routine 
    tasks to providing deep insights through data analysis.`,
    description2: `Our AI solutions are designed to integrate smoothly with your existing infrastructure, 
    enhancing efficiency, accuracy, and decision-making across your organization.`,
    coverImage: "/images/custom-software-development.jpg",
  },
];

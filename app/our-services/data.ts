export interface OurServiceItem {
  id: number;
  handle: string;
  icon: string;
  titlePart1: string;
  titlePart2: string;
  descriptions: string;
}

export const services: OurServiceItem[] = [
  {
    id: 11,
    handle: "custom-software-development",
    icon: "lnil lnil-cup",
    titlePart1: "CUSTOM SOFTWARE",
    titlePart2: "DEVELOPMENT",
    descriptions: `Streamline your business operations with our custom software solutions. We create tailor-made applications that address your unique challenges, boost efficiency, and support your business growth.`,
  },
  {
    id: 12,
    handle: "mobile-application-development",
    icon: "lnil lnil-website-rank",
    titlePart1: "MOBILE APPLICATION",
    titlePart2: "DEVELOPMENT",
    descriptions: ` We build and activate brands throung cultural insight &amp;
            strategic vision.`,
  },
  {
    id: 13,
    handle: "custom-ai-solutions",
    icon: "lnil lnil-3d",
    titlePart1: "CUSTOM AI",
    titlePart2: "SOLUTIONS",
    descriptions: ` We build and activate brands throung cultural insight &amp;
            strategic vision.`,
  },
];

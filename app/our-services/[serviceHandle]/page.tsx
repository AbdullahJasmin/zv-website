import DefaultHeader from "@/components/headers/DefaultHeader";
import {services} from "../data";
import ImageGridFour from "@/components/image-grid/ImageGridFour";
import Skills from "@/components/skill/Skills";
import Approach2 from "@/components/service/Approach2";
import ServiceListThree from "@/components/list/ServiceListThree";
import Faq from "app/(others-pages)/faq/page";
import CopyRight from "@/components/footer/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import {Metadata, ResolvingMetadata} from "next";

interface OurServiceDetailsPageProps {
  params: {
    serviceHandle: string;
  };
}

function uppercaseToCapitalize(str: string) {
  const words = str.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords.join(" ");
}

function getServiceDetails(serviceHandle: string) {
  const service = services.find((elm) => elm.handle == serviceHandle);
  const title = uppercaseToCapitalize(
    service?.titlePart1 + " " + service?.titlePart2
  );
  return {
    service,
    title,
  };
}

export async function generateMetadata(
  { params }: OurServiceDetailsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = getServiceDetails(params.serviceHandle);
  return {
    title: title + " - ZaVolt",
  };
}

const OurServiceDetails = ({ params }: OurServiceDetailsPageProps) => {
  const { title, service } = getServiceDetails(params.serviceHandle);

  return (
    <>
      <Head>
        <title>{title + " | " + "ZaVolt"}</title>
      </Head>
      <DefaultHeader />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--service-detail">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-9">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      {title ? title.toUpperCase() : "UI/UX SOLUTION"}
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">{service?.description1}</p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
                <div className="col-lg-12">
                  {/* <!--Animated Block--> */}
                  <ImageGridFour url={service?.coverImage} />
                </div>
              </div>
            </div>
          </section>
          {/* Top Portion */}

          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <p className="fz-18">{service?.description2}</p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Specialization</h3>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">{service?.specialization}</p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "3.125rem" }}
                  ></div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Skills</h3>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "3.75rem" }}
                  ></div>
                  <div className="ptf-skill-box-grid">
                    <Skills />
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Approach</h3>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                      Encouraging the use of natural systems and processes in
                      design allows for exposure to nature, and in turn, these
                      design approaches improve health and wellbeing.
                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    // @ts-ignore
                    style={{ "--ptf-xxl": "5.625rem" }}
                  ></div>
                  {/* <!--Process Steps--> */}
                  <Approach2 />
                </div>
                <div className="col-xl-4">
                  <div className="ptf-sidebar ptf-sidebar--right">
                    {/* <!--Widget--> */}
                    <div className="ptf-widget ptf-widget-services-list">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">Services List</h4>
                        <ServiceListThree />
                      </div>
                    </div>
                    {/* <!--Widget--> */}
                    <div className="ptf-widget ptf-widget-faq">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">FAQs</h4>
                        <Faq />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End .main content with sidebar */}
        </div>
        {/* End .ptf-page */}
      </div>
      {/* End ptf-main */}

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </>
  );
};

export default OurServiceDetails;

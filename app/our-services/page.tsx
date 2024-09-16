import CopyRight from "@/components/footer/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import ContactJarallax from "@/components/jarallax/ContactJarallax";
import Approach from "./components/Approach";
import DefaultHeader from "@/components/headers/DefaultHeader";
import ServiceCatalog from "./components/ServiceCatalog";


export const metadata = {
  title: "Our Services - ZaVolt",
};

const OurServicesPage = () => {
  return (
    <>
      <DefaultHeader />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--services">
          {/*=============================================
        Service Section
      ============================================== */}
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{"--ptf-xxl": "7rem", "--ptf-md": "3.5rem"}}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-3">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h2 className="h1 large-heading">
                      Our <br />
                      Services
                    </h2>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      We specialize in custom software development, mobile app creation, and
                      AI-driven solutions. At ZaVolt, we deliver tailored technology to meet
                      your unique business challenges and drive growth. For design services,
                      our <strong>ZV | Digital</strong> team crafts impactful branding and
                      digital experiences.
                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{
                      // @ts-ignore
                      "--ptf-lg": "4.375rem",
                      "--ptf-md": "2.1875rem",
                    }}
                  ></div>
                </div>
                <div className="col-lg-8 offset-lg-1">
                  <ServiceCatalog />
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              //  @ts-ignore
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/*=============================================
            Our Approach Section
        ============================================== */}
          <section
              className="has-gray-color-background"
              // style={{
              //   backgroundImage: `url(${
              //     "" + "/images/root/service-bubble.png"
              //   })`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "100% calc(100% + 120px)",
              // }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{"--ptf-xxl": "9rem", "--ptf-md": "4.5rem"}}
            ></div>
            <div className="container-xxl">
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h1 large-heading has-accent-1">Our Approach</h2>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
              ></div>
              <Approach />
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/*=============================================
          Start Contact Section 
          ============================================== */}
          <section
            className="jarallax jarallax-img"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${"" + "/images/services-cta-bg.webp"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
            ></div>
            <ContactJarallax />
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1 px-3 px-lg-0">
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

export default OurServicesPage;

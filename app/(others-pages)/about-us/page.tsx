import Head from "next/head";
import Award from "../../../components/award/Award";
import Brand from "../../../components/brand/Brand";
import Counter from "../../../components/counter/Counter";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import ImageGrid from "../../../components/image-grid/ImageGrid";
import ServiceOne from "../../../components/service/ServiceOne";
import Testimonial from "../../../components/testimonial/Testimonial";
import Image from "next/image";
import DefaultHeader from "@/components/headers/DefaultHeader";

export const metadata = {
  title: "About Us | ZaVolt",
};

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
      <div className="ptf-site-wrapper__inner">
        <DefaultHeader />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            {/*=============================================
                Start About Us Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">ZaVolt</h1>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "2.8125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-30 fw-bold text-uppercase has-3-color">
                        Electrifying <br />
                        your business
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                    ></div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          {/* <!--Animated Block--> */}
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            {/* <!--Divider--> */}
                            <div className="ptf-divider"></div>
                            {/* <!--Spacer--> */}

                            <div
                              className="ptf-spacer"
                              style={{
                                // @ts-ignore
                                "--ptf-xxl": "4.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                            <p className="fz-24">
                            Welcome to ZaVolt, where we electrify your business to greatness! 
                            We take immense pride in being a premier company that offers top-tier design, 
                            marketing, and development solutions, all aimed at powering the unparalleled success of your brand. 
                            Our passionate team of digital wizards is committed to illuminating your true potential, igniting innovation, 
                            and crafting remarkable digital experiences. 
                            Join us on this electrifying journey, and together we&apos;ll make your business shine like never before!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image">
                          <img
                            width={1200}
                            height={1200}
                            src="/images/root/about-us/about-us-main-image-mask.png"
                            alt="layer"
                            loading="lazy"
                            className="lay2"
                            style={{
                              zIndex: "1",
                            }}
                            srcSet="/images/about-us-main-image.jpg"
                          />
                          <img
                            src="/images/root/about-us/about-us-main-image-layer-1.png"
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          />
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
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
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
                        We help ambitious businesses like yours generate more
                        profits by building awareness, driving web traffic,
                        connecting with customers and growing overall sales.
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
                    <ServiceOne />
                  </div>
                </div>
                {/* End .row */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  // @ts-ignore
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                <ImageGrid />
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End service */}

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">ZaVolt’s Partners</h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      //  @ts-ignore
                      style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                    ></div>
                  </div>
                </div>
                {/* End .row */}
                <Brand />
                <div className="row">
                  <div className="col-12">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    {/* <!--Divider--> */}
                    <div className="ptf-divider"></div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                </div>
                {/* End .row */}

                <Counter />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Jaralax Testimonial Section
              ============================================== */}
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${"" + "/images/about-us-testimonial-background.png"
                  })`,
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <Image
                        width={1200}
                        height={1200}
                        style={{ width: "100%", height: "100%" }}
                        src="/images/root/quote.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xl": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-8">
                    <Testimonial />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Award Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "11.875rem", "--ptf-md": "5.9375rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        Our
                        <br />
                        Awards
                      </h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-lg": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-8">
                    <Award />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
        </div>
        {/* End ptf-main */}

        {/* <!--Footer--> */}
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
      </div>
    </div>
  );
};

export default AboutUs;

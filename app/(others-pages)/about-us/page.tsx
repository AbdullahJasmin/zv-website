import Award from "../../../components/award/Award";
import Brand from "../../../components/brand/Brand";
import Counter from "../../../components/counter/Counter";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Testimonial from "../../../components/testimonial/Testimonial";
import Image from "next/image";
import DefaultHeader from "@/components/headers/DefaultHeader";
import WhyUs from "../../our-services/components/WhyUs";

export const metadata = {
    title: "About Us - ZaVolt",
};

const AboutUs = () => {
    return (
        <div className="ptf-site-wrapper animsition  ptf-is--about-us">
            <div className="ptf-site-wrapper__inner">
                <DefaultHeader/>
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
                                style={{"--ptf-xxl": "7rem", "--ptf-md": "3.5rem"}}
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
                                            style={{"--ptf-xxl": "2.8125rem"}}
                                        ></div>
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="100"
                                        >
                                            <p className="fz-30 fw-bold text-uppercase has-3-color">
                                                Electrifying <br/>
                                                your business
                                            </p>
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-xxl": "5rem", "--ptf-md": "2.5rem"}}
                                        ></div>
                                        <div className="row">
                                            <div className="col-xl-11">
                                                <div style={{maxWidth: "40rem"}}>
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
                                                        <p className="fz-24" style={{textAlign: "justify"}}>
                                                            Our journey began in 2023 when a group of enthusiastic
                                                            undergraduates from UCSC Sri Lanka, came together to bring
                                                            their entrepreneurial dreams to life by
                                                            founding <strong>ZaVolt</strong>.
                                                            Leveraging our collective skills in design, development, and
                                                            marketing, we aimed to brighten the digital world for
                                                            businesses big and small.
                                                            <br/><br/>Following a triumphant inaugural
                                                            year, we saw the potential for ZaVolt to achieve even more.
                                                            Thus, in 2024, <strong>ZV | Digital</strong> was born,
                                                            marking the next step
                                                            in our mission and allowing us to broaden our scope to
                                                            deliver all-encompassing solutions that drive brands
                                                            forward, no matter their size or stage.
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
                                            style={{"--ptf-xl": "5.625rem"}}
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
                                                        srcSet="/images/about-us-img.webp"
                                                    />
                                                    <img
                                                        src="/images/root/about-us/about-us-main-image-layer-1.png"
                                                        alt="layer"
                                                        loading="lazy"
                                                        style={{zIndex: "2"}}
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
                                style={{"--ptf-xxl": "10rem", "--ptf-md": "5rem"}}
                            ></div>
                        </section>

                        {/*<section>*/}
                        {/*    <div className="container-xxl">*/}
                        {/*        /!* <!--Divider--> *!/*/}
                        {/*        <div className="ptf-divider"></div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}

                        {/*=============================================
            Why Us Section
        ============================================== */}
                        <section
                            className="has-gray-color-background"
                            style={{
                                backgroundImage: `url(${
                                    "" + "/images/root/service-bubble.png"
                                })`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "100% calc(100% + 120px)",
                            }}
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
                                    <h2 className="h1 large-heading has-accent-1">Why ZaVolt?</h2>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    // @ts-ignore
                                    style={{"--ptf-xxl": "7rem", "--ptf-md": " 3.5rem"}}
                                ></div>
                                <WhyUs/>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "10rem", "--ptf-md": "5rem"}}
                            ></div>
                        </section>

                        {/*          /!*=============================================*/}
                        {/*  Start Service Section*/}
                        {/*============================================== *!/*/}
                        {/*          <section>*/}
                        {/*              /!* <!--Spacer--> *!/*/}
                        {/*              <div*/}
                        {/*                  className="ptf-spacer"*/}
                        {/*                  // @ts-ignore*/}
                        {/*                  style={{"--ptf-xxl": "10rem", "--ptf-md": "5rem"}}*/}
                        {/*              ></div>*/}
                        {/*              <div className="container-xxl">*/}
                        {/*                  <div className="row">*/}
                        {/*                      <div className="col-lg-3">*/}
                        {/*                          /!* <!--Animated Block--> *!/*/}
                        {/*                          <div*/}
                        {/*                              className="ptf-animated-block"*/}
                        {/*                              data-aos="fade"*/}
                        {/*                              data-aos-delay="0"*/}
                        {/*                          >*/}
                        {/*                              <h2 className="h1 large-heading">*/}
                        {/*                                  Our <br/>*/}
                        {/*                                  Services*/}
                        {/*                              </h2>*/}
                        {/*                              /!* <!--Spacer--> *!/*/}
                        {/*                              <div*/}
                        {/*                                  className="ptf-spacer"*/}
                        {/*                                  // @ts-ignore*/}
                        {/*                                  style={{"--ptf-xxl": "2.5rem"}}*/}
                        {/*                              ></div>*/}
                        {/*                              <p className="fz-18">*/}
                        {/*                                  We specialize in custom software development, mobile app creation, and*/}
                        {/*                                  AI-driven solutions. At ZaVolt, we deliver tailored technology to meet*/}
                        {/*                                  your unique business challenges and drive growth. For design services,*/}
                        {/*                                  our <strong>ZV | Digital</strong> team crafts impactful branding and*/}
                        {/*                                  digital experiences.*/}
                        {/*                              </p>*/}
                        {/*                          </div>*/}
                        {/*                          /!* <!--Spacer--> *!/*/}
                        {/*                          <div*/}
                        {/*                              className="ptf-spacer"*/}
                        {/*                              style={{*/}
                        {/*                                  // @ts-ignore*/}
                        {/*                                  "--ptf-lg": "4.375rem",*/}
                        {/*                                  "--ptf-md": "2.1875rem",*/}
                        {/*                              }}*/}
                        {/*                          ></div>*/}
                        {/*                      </div>*/}
                        {/*                      <div className="col-lg-8 offset-lg-1">*/}
                        {/*                          <ServiceCatalog/>*/}
                        {/*                      </div>*/}
                        {/*                  </div>*/}
                        {/*                  /!* End .row *!/*/}

                        {/*                  /!* <!--Spacer--> *!/*/}
                        {/*                  /!*<div*!/*/}
                        {/*                  /!*  className="ptf-spacer"*!/*/}
                        {/*                  /!*  // @ts-ignore*!/*/}
                        {/*                  /!*  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}*!/*/}
                        {/*                  /!*></div>*!/*/}
                        {/*                  /!*<ImageGrid />*!/*/}
                        {/*              </div>*/}
                        {/*              /!* End .container-xxl *!/*/}
                        {/*          </section>*/}
                        {/*          /!* End service *!/*/}

                        {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "6rem", "--ptf-md": "4rem"}}
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
                                            <h2 className="h2 large-heading">Latest Happy Clients</h2>
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            //  @ts-ignore
                                            style={{"--ptf-xxl": "5rem", "--ptf-md": "1.5rem"}}
                                        ></div>
                                    </div>
                                </div>
                                {/* End .row */}
                                <Brand/>
                                <div className="row">
                                    <div className="col-12">
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem"}}
                                        ></div>
                                        {/* <!--Divider--> */}
                                        <div className="ptf-divider"></div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem"}}
                                        ></div>
                                    </div>
                                </div>
                                {/* End .row */}

                                <Counter/>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "7rem", "--ptf-md": "5rem"}}
                            ></div>
                        </section>

                        {/*=============================================
                Start Jaralax Testimonial Section
              ============================================== */}
                        <section
                            className="jarallax jarallax-img"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${"" + "/images/about-us-testimonial-background.webp"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem"}}
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
                                                style={{width: "80%", height: "80%"}}
                                                src="/images/root/quote.png"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-xl": "3.75rem"}}
                                        ></div>
                                    </div>
                                    <div className="col-xl-8">
                                        <Testimonial/>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem"}}
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
                                style={{"--ptf-xxl": "10rem", "--ptf-md": "5rem"}}
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
                                                <br/>
                                                Awards
                                            </h2>
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-lg": "3rem"}}
                                        ></div>
                                    </div>
                                    <div className="col-lg-8">
                                        <Award/>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "10rem", "--ptf-md": "5rem"}}
                            ></div>
                        </section>
                    </div>
                </div>
                {/* End ptf-main */}

                {/* <!--Footer--> */}
                <footer className="ptf-footer ptf-footer--style-1 px-3 px-lg-0">
                    <div className="container-xxl">
                        <div className="ptf-footer__top">
                            <Footer/>
                        </div>
                        <div className="ptf-footer__bottom">
                            <CopyRight/>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AboutUs;

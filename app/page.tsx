import CounterTwo from "@/components/counter/CounterTwo";
import HeroAgency from "@/components/hero/HeroAgency";
import ListOne from "@/components/list/ListOne";
import ListTwo from "@/components/list/ListTwo";
import PortfolioTw from "@/components/portfolio/PortfolioTwo";
import Team from "@/components/team/Team";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import HomeHeader from "@/components/headers/HomeHeader";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import CopyRight from "@/components/footer/copyright/CopyRight";
import ClutchWidget from "@/components/testimonial/Clutch";

export const metadata = {
    title: "ZaVolt - Premier UI/UX, Development & Digital Marketing Agency",
};

const HomeAgency = () => {
    return (
        <div className="ptf-site-wrapper animsition ptf-is--home-agency">
            <div className="ptf-site-wrapper__inner">
                <HomeHeader/>
                {/* End Header Agency */}

                <div className="ptf-main">
                    <div className="ptf-page ptf-page--home-agency">
                        {/*=============================================
          Start Our Hero Section howcase 3
          ============================================== */}
                        <div className="ptf-showcase-3 swiper-container">
                            <div className="swiper-wrapper">
                                <HeroAgency/>
                            </div>
                        </div>

                        {/*=============================================
          Start Call to Counter section
          ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "4.25rem"}}
                            ></div>
                            <div className="container">
                                <div
                                    className="row align-items-center"
                                    // @ts-ignore
                                    style={{"--bs-gutter-y": "2rem"}}
                                >
                                    <div className="col-12 col-xl-6">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            {/* <!--Phone Block--> */}
                                            <div className="ptf-phone-block">
                                                <div className="ptf-phone-block__icon">
                                                    <i className="lnil lnil-phone"></i>
                                                </div>
                                                <div className="ptf-phone-block__caption">
                                                    Call Us
                                                    <br/>
                                                    Directly
                                                </div>
                                                <div className="ptf-phone-block__phone">
                                                    <a href="tel:+94771281441">(+94) 77 128 1441</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End .col */}
                                    <CounterTwo/>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "3.75rem"}}
                            ></div>
                        </section>

                        <section>
                            <div className="container px-3 px-lg-0">
                                {/* <!--Divider--> */}
                                <div className="ptf-divider"></div>
                            </div>
                        </section>
                        {/* End .ptf-devider */}

                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "3rem", "--ptf-md": "2rem"}}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block h-100"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2 className="h2 large-heading has-accent-1 d-flex align-items-center h-100">
                                                Creative Design & Development
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 d-none d-xl-flex justify-content-end">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="100"
                                        >
                                            <div className="has-black-color fz-90 lh-0p6 text-end">
                                                <svg width="81" height="82" viewBox="0 0 81 82" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M80.5547 25.8887L59.4952 67.2987L54.6314 57.9983L70.9903 25.8887H80.5547Z"
                                                        fill="#E50914"/>
                                                    <path
                                                        d="M57.341 71.7139L33.9948 25.8887H24.4297L52.4728 81.0077H52.6055L57.341 71.7139Z"
                                                        fill="#E50914"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M39.297 55.1078L34.5586 45.7942H20.3332L29.1205 35.1252L24.4356 25.917L0.570312 55.1189H39.2912L39.297 55.1078Z"
                                                          fill="#141414"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M39.6541 22.9773L58.6018 0H14.2644L9.55469 9.32467H38.6966L27.4518 22.9773H39.6541Z"
                                                          fill="#141414"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                //  @ts-ignore
                                style={{"--ptf-xxl": "4.25rem", "--ptf-md": "3rem"}}
                            ></div>
                        </section>
                        {/* End  Advertising Big Title */}

                        <section className="ptf-custom--3993 jarallax" id="get-started" style={{scrollMarginTop: 140}}>
                            <div className="-fluid px-3 px-lg-0">
                                <div className="row">
                                    <div className="col-lg-5 custom-about-section px-0 px-sm-3 ps-md-4 ps-lg-5" style={{
                                        backgroundColor: 'rgba(255,255,255,0.93)'
                                    }}>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-xxl": "6rem", "--ptf-lg": "0"}}
                                        ></div>
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block px-2 text-align-justify"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h6 className="fz-16 has-accent-1 text-uppercase">
                                                WHO ARE WE?
                                            </h6>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                // @ts-ignore
                                                style={{"--ptf-xxl": "1.875rem"}}
                                            ></div>
                                            <h3 style={{maxWidth: "36rem"}}>
                                                We Empower Your Business with Innovative Digital Solutions
                                            </h3>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                // @ts-ignore
                                                style={{"--ptf-xxl": "2.5rem", "--ptf-md": "1.5rem"}}
                                            ></div>
                                            <p className="fz-20" style={{maxWidth: "36rem",}}>
                                                Welcome to <strong>ZaVolt</strong>, where we electrify your business to
                                                greatness!
                                                We take immense pride in being a premier company that offers
                                                top-tier design,
                                                marketing, and development solutions, all aimed at powering
                                                the unparalleled success of
                                                your brand.

                                            </p>
                                            <p className="fz-20" style={{maxWidth: "36rem"}}>
                                                Our passionate team of digital wizards is committed to
                                                illuminating your true potential,
                                                igniting innovation,
                                                and crafting remarkable digital experiences.
                                                Join us on this electrifying journey, and together
                                                we&apos;ll make your business shine
                                                like never before!
                                            </p>
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            // @ts-ignore
                                            style={{"--ptf-xxl": "5rem", "--ptf-lg": "0"}}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End  Advertising Banner */}

                        {/*=============================================
          Start Service section
          ============================================== */}

                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer px-3 px-lg-0"
                                // @ts-ignore
                                style={{"--ptf-xxl": "8rem", "--ptf-md": "4rem"}}
                            ></div>
                            <div className="container">
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h2 className="h1 large-heading has-accent-1">What We Do</h2>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    // @ts-ignore
                                    style={{"--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem"}}
                                ></div>
                                <div
                                    className="row"
                                    style={{
                                        // @ts-ignore
                                        "--bs-gutter-x": "10.625rem",
                                        "--bs-gutter-y": " 5.3125rem",
                                    }}
                                >
                                    <div className="col-12 col-md-6">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2>ZaVolt</h2>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                // @ts-ignore
                                                style={{"--ptf-xxl": "1.5625rem"}}
                                            ></div>
                                            {/* <!--Divider--> */}
                                            <div className="ptf-divider"></div>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                // @ts-ignore
                                                style={{"--ptf-xxl": "3.125rem"}}
                                            ></div>
                                            {/* <!--Services List--> */}
                                            <ListOne/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="100"
                                        >
                                            <Link href={'https://zavolt.digital'} target={'_blank'}
                                                  rel="noopener noreferrer"
                                                  className="has-black-color">
                                                <h2 style={{color: "inherit"}}>ZV Digital
                                                    <div className="text-end d-inline-block mx-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            style={{height: "1em"}}
                                                            viewBox="0 0 17 17"
                                                        >
                                                            <path
                                                                d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"/>
                                                        </svg>
                                                    </div></h2>
                                            </Link>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                // @ts-ignore
                                                style={{"--ptf-xxl": "1.5625rem"}}
                                            ></div>
                                            {/* <!--Divider--> */}
                                            <div className="ptf-divider"></div>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                // @ts-ignore
                                                style={{"--ptf-xxl": "3.125rem"}}
                                            ></div>
                                            {/* <!--Services List--> */}
                                            <ListTwo/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "9rem", "--ptf-md": "4rem"}}
                            ></div>
                        </section>

                        {/*=============================================
          Start Latest Works section
          ============================================== */}
                        <section>
                            <div className="container px-3 px-lg-0">
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                                        Latest Works
                                    </h2>
                                    {/*<Link*/}
                                    {/*  className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"*/}
                                    {/*  href="/works-masonry"*/}
                                    {/*  style={{ marginLeft: "5.625rem" }}*/}
                                    {/*>*/}
                                    {/*  All Projects{" "}*/}
                                    {/*  <svg*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    fill="currentColor"*/}
                                    {/*    style={{ height: "1em" }}*/}
                                    {/*    viewBox="0 0 17 17"*/}
                                    {/*  >*/}
                                    {/*    <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />*/}
                                    {/*  </svg>*/}
                                    {/*</Link>*/}
                                </div>
                                {/* End .ptf-animated-block */}

                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    // @ts-ignore
                                    style={{"--ptf-xxl": "5rem"}}
                                ></div>

                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <div className="ptf-isotope-grid">
                                        <PortfolioTw/>
                                    </div>
                                    {/* End .ptf-isotope-grid */}
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "8rem", "--ptf-md": "4rem"}}
                            ></div>
                        </section>

                        {/*=============================================
          Start Our Crew/Team section
          ============================================== */}
                        <section className="ptf-custom--1569">
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer px-"
                                // @ts-ignore
                                style={{"--ptf-xxl": "7rem", "--ptf-md": "3.5rem"}}
                            ></div>
                            <div className="container">
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h2 className="h1 large-heading has-accent-1">Board of Directors</h2>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    // @ts-ignore
                                    style={{"--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem"}}
                                ></div>
                            </div>
                            <div className="container">
                                <div className="ptf-team-member-grid ptf-team-member-grid--4-columns">
                                    <Team/>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "9rem", "--ptf-md": "4rem"}}
                            ></div>
                        </section>

                        {/*=============================================
            Start Pricing section
            ============================================== */}
                        {/*<section>*/}
                        {/*  /!* <!--Spacer--> *!/*/}
                        {/*  <div*/}
                        {/*    className="ptf-spacer"*/}
                        {/*    // @ts-ignore*/}
                        {/*    style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}*/}
                        {/*  ></div>*/}
                        {/*  <div className="container">*/}
                        {/*    /!* <!--Animated Block--> *!/*/}
                        {/*    <div*/}
                        {/*      className="ptf-animated-block"*/}
                        {/*      data-aos="fade"*/}
                        {/*      data-aos-delay="0"*/}
                        {/*    >*/}
                        {/*      <h2 className="h1 large-heading has-accent-1">*/}
                        {/*        Pricing & Plan*/}
                        {/*      </h2>*/}
                        {/*    </div>*/}
                        {/*    /!* <!--Spacer--> *!/*/}
                        {/*    <div*/}
                        {/*      className="ptf-spacer"*/}
                        {/*      // @ts-ignore*/}
                        {/*      style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" }}*/}
                        {/*    ></div>*/}
                        {/*  </div>*/}
                        {/*  <div className="container">*/}
                        {/*    <div*/}
                        {/*      className="row"*/}
                        {/*      // @ts-ignore*/}
                        {/*      style={{ "--bs-gutter-x": "2rem" }}*/}
                        {/*    >*/}
                        {/*      <Pricing />*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*  /!* <!--Spacer--> *!/*/}
                        {/*  <div*/}
                        {/*    className="ptf-spacer"*/}
                        {/*    // @ts-ignore*/}
                        {/*    style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}*/}
                        {/*  ></div>*/}
                        {/*</section>*/}

                        {/*<section>*/}
                        {/*  <div className="container">*/}
                        {/*    /!* <!--Divider--> *!/*/}
                        {/*    <div className="ptf-divider"></div>*/}
                        {/*  </div>*/}
                        {/*</section>*/}

                        {/*=============================================
          Start Testimonial section
          ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                // @ts-ignore
                                style={{"--ptf-xxl": "7rem", "--ptf-md": "4rem"}}
                            ></div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block justify-content-between d-flex align-items-center mb-1 flex-wrap gap-5 flex-md-nowrap"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2 className="h1 large-heading has-accent-1">
                                                Trusted By Clients
                                            </h2>
                                            <ClutchWidget/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    // @ts-ignore
                                    style={{"--ptf-xxl": " 4.375rem"}}
                                ></div>
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    {/* <!--Content Slider--> */}
                                    <div className="ptf-content-slider swiper-container ">
                                        <div className="swiper-wrapper testimonial-100-spacer">
                                            <TestimonialTwo/>
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

                        {/*=============================================
          Start Footer section
          ============================================== */}
                        {/*<footer className="ptf-footer ptf-footer--style-3">*/}
                        {/*  <div className="container">*/}
                        {/*    <div className="row">*/}
                        {/*      <div className="col-xl-10 offset-xl-2">*/}
                        {/*        <div className="ptf-footer__top">*/}
                        {/*          <FooterTwo />*/}
                        {/*        </div>*/}
                        {/*        /!* End .ptf-footer__top *!/*/}

                        {/*        <div className="ptf-footer__bottom">*/}
                        {/*          <CopyRightTwo />*/}
                        {/*        </div>*/}
                        {/*        /!* End .ptf-footer__bottom *!/*/}
                        {/*      </div>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</footer>*/}
                        {/* <!--Footer--> */}
                        <footer className="ptf-footer ptf-footer--style-1">
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
                    {/* End .ptf-page */}
                </div>
                {/* End .ptf-main */}
            </div>
            {/* End .ptf-site-wrapper__inner */}
        </div>
    );
};

export default HomeAgency;

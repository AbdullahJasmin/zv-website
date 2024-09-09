import Link from "next/link";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Portfolio from "../../../components/portfolio/Portfolio";
import DefaultHeader from "@/components/headers/DefaultHeader";

export const metadata = {
  title: "Work Carousel || ZaVolt Portfolio and Agency NextJS Template",
};

const WorksCarousel = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-carousel">
      <div className="ptf-site-wrapper__inner">
        <DefaultHeader />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-carousel">
            {/*=============================================
                End Portfolio Section
              ============================================== */}
            <section>
              {/* spacer */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading d-inline-flex">
                        Latest Portfolio
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 text-md-end">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-md": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <Link
                      className="
                          ptf-link-with-arrow
                          fz-18
                          text-uppercase
                          fw-semibold
                          has-black-color
                          d-none d-lg-inline-flex
                        "
                      href="/projects-portfolio"
                      style={{ marginLeft: "5.625rem" }}
                    >
                      All Projects <i className="lnil lnil-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  // @ts-ignore
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <Portfolio />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                // @ts-ignore
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

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
    // End .ptf-is--blog-grid
  );
};

export default WorksCarousel;

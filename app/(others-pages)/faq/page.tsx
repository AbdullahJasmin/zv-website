import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import FaqTwo from "../../../components/faq/FaqTwo";
import DefaultHeader from "@/components/headers/DefaultHeader";

export const metadata = {
  title: "FAQ - ZaVolt",
};

const Faq = () => {
  return (
    <>
      <DefaultHeader />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--faq">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">FAQs</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      Here are the frequently asked questions that we have
                      compiled to help you find the answers to the problems you
                      are wondering.
                    </p>
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
          <FaqTwo />
        </div>
      </div>

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

export default Faq;

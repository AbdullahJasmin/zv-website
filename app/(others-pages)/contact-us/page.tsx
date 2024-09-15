import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import ContactForm from "../../../components/ContactForm";
import Address from "../../../components/Address";
import DefaultHeader from "@/components/headers/DefaultHeader";
import {ToastContainer} from "react-toastify";
import React from "react";

export const metadata = {
  title: "Contact Us - ZaVolt",
};

const Contact = () => {
  return (
    <>
      <DefaultHeader />
      {/* End Header */}
      <ToastContainer position={"top-center"}/>

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{"--ptf-xxl": "7rem", "--ptf-md": "3.5rem"}}
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
                    <h1 className="large-heading">
                      Get in touch!
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{"--ptf-xxl": "1.75rem", "--ptf-md": "1.25rem"}}
                    ></div>

                    <Social />
                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              // @ts-ignore
              style={{"--ptf-xxl": "4.25rem", "--ptf-md": "2.125rem"}}
            ></div>
          </section>
          {/* End section contact-us header */}

          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <Address />
                </div>
                {/* End .col */}

                <div className="col-lg-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-24 text-uppercase has-dark-color fw-semibold">
                      Ready to Start?
                      Let’s Talk!
                    </h5>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      // @ts-ignore
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <ContactForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
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

export default Contact;

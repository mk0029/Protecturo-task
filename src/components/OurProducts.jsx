import React from "react";
import ESIM from "../assets/img/svg/MobileQR.svg";
import ECard from "../assets/img/svg/Ecard.svg";
import Box__3 from "../assets/img/svg/Maskgroup.svg";
import Alow_SideLOgo from "../assets/img/svg/Alow_Side_logo.svg";
function OurProducts() {
  return (
    <>
      <section
        className="py-5 my-lg-4 my-xl-5  position-relative"
        id="Products">
        <div className="Layer_red_Common layer_red_Prod"></div>
        <img
          className="position-absolute About_Side_img"
          src={Alow_SideLOgo}
          alt="Err"
        />
        <div className="container position-relative z_index1">
          <div className="col-xxl-11 mx-auto">
            <div className="col-xl-8 col-lg-10 mx-auto ">
              <h3 className="text_red_grident text-center">Our products</h3>

              <h2
                style={{ color: "#e1e1e1" }}
                className="ff_gilroy_bold fw-bold fs_6x5l text-center pb-md-5 mb-xxl-4 pb-2 mt-2">
                Allow us to secure your data with Protecturo’s products
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="p-lg-5 px-3 py-4 bg_light_black text-center h-100">
                  <div className="d-flex justify-content-center">
                    <img className="img_esim" src={ESIM} alt="Err" />
                  </div>

                  <div className="h-100 ">
                    <h4 className="mt-3 ff_gilroy_semibold mt-xl-3 fw-semibold fs_2x4l clr_slate_grey">
                      eSIM
                    </h4>
                    <p className="py-2 ff_gilroy_medium fs_sm clr_grey">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                    <span className="d-inline-block mt-md-4">
                      <a className="btn_common d-inline-block" href="#">
                        Learn more
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="p-lg-5 px-3 py-4 bg_light_black text-center h-100">
                  <div className="d-flex justify-content-center">
                    <img className="img_esim" src={ECard} alt="Err" />
                  </div>

                  <h4 className="mt-3 ff_gilroy_semibold mt-xl-3 fw-semibold fs_2x4l clr_slate_grey">
                    SIM card
                  </h4>
                  <p className="py-2 ff_gilroy_medium fs_sm clr_grey">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <span className="d-inline-block mt-md-4">
                    <a className="btn_common d-inline-block" href="#">
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="p-lg-5 px-3 py-4 bg_light_black text-center h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <img className="img_esim" src={Box__3} alt="Err" />
                  </div>

                  <div>
                    <h4 className="mt-3 ff_gilroy_semibold mt-xl-3 fw-semibold fs_2x4l clr_slate_grey">
                      Mobile Wifi Hotspot
                    </h4>
                    <p className="py-2 ff_gilroy_medium fs_sm clr_grey">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                    <span className="d-inline-block mt-md-4 ">
                      <a className="btn_common d-inline-block" href="#">
                        Learn more
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurProducts;

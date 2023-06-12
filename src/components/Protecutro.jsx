import React from "react";
import ryden from "../assets/img/webp/ryden.webp";
import dots from "../assets/img/png/dots.png";
import Proticutro1 from "../assets/img/svg/Proricutro1.svg";
import Proticutro2 from "../assets/img/svg/Proricutro2.svg";
import Proticutro3 from "../assets/img/svg/Proricutro3.svg";
import Proticutro4 from "../assets/img/svg/Proricutro4.svg";

function Protecutro() {
  return (
    <>
      <section className="py-md-5 py-4 my-5 position-relative">
        <div className="Layer_red_Common  Layer_Protocutro position-absolute z_index0"></div>
        <div className="container position-relative z_index1">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="d-flex flex-column justify-content-center h-100">
                <p className="text_red_grident">Our product benefits</p>
                <h2 className="fs_6x5l ff_gilroy_semibold  text-white mb-0">
                  What you will
                  <span className="d-lg-block">get with Protecturo</span>
                </h2>
                <p className=" ff_gilroy_medium fs_2x2 clr_grey pt-md-4 pt-2 mb-0 pe-lg-4">
                  Your creativity is endless. Your IoT project shouldn't be held
                  back by cellular connectivity. Let's build a new unicorn
                  together.
                </p>
                <div className="row justify-content-between">
                  <div className="col-md-5 col-sm-6 mt-md-5 Animate_hover_Parent p-xxl-3 p-2 mt-3">
                    <img
                      className="mb-3 Img_Aimate_hover"
                      src={Proticutro1}
                      alt=""
                    />
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Stay connected
                    </h3>

                    <p className="ff_gilroy_medium fs_s clr_grey pe-xl-4 pt-2 mb-0">
                      Travel and stay connected without roaming or surprise
                      bills.
                    </p>
                  </div>

                  <div className="col-md-5 col-sm-6 mt-md-5 Animate_hover_Parent p-xxl-3 p-2 mt-3">
                    <img
                      className="mb-3 Img_Aimate_hover"
                      src={Proticutro2}
                      alt=""
                    />
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      International
                    </h3>

                    <p className="ff_gilroy_medium fs_s clr_grey pe-xl-4 pt-2 mb-0">
                      Keep your local SIM card to receive all phone calls
                      everywhere.
                    </p>
                  </div>

                  <div className="col-md-5 col-sm-6 mt-md-5 Animate_hover_Parent p-xxl-3 p-2 mt-3">
                    <img
                      className="mb-3 Img_Aimate_hover"
                      src={Proticutro3}
                      alt=""
                    />
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Ease to get
                    </h3>

                    <p className="ff_gilroy_medium fs_s clr_grey pe-xl-4 pt-2 mb-0">
                      Purchase and install your eSIM in just one minute.
                    </p>
                  </div>

                  <div className="col-md-5 col-sm-6 mt-md-5 Animate_hover_Parent p-xxl-3 p-2 mt-3">
                    <img
                      className="mb-3 Img_Aimate_hover"
                      src={Proticutro4}
                      alt=""
                    />
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Data plans
                    </h3>

                    <p className="ff_gilroy_medium fs_s clr_grey pe-xl-4 pt-2 mb-0">
                      Get unlimited data plans in according to destinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ps-lg-4 mt-5 mt-lg-0">
              <div className="position-relative">
                <img
                  className="position-absolute dots d-md-flex d-none"
                  src={dots}
                  alt="dots"
                />
                <img className="w-100" src={ryden} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Protecutro;

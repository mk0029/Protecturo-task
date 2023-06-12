import React, { useRef, useState } from "react";
import Slider from "react-slick";
import mobileImg from "../assets/img/png/second-mobile.png";

function TakeControl() {
  const settingSlide1 = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const myBtn = useRef();
  return (
    <>
      <section className="py-md-5 py-4 my-xxl-5" id="benefits">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row justify-content-lg-between justify-content-center align-items-center z_index1 position-relative">
            <div className="col-lg-4 col-sm-8 mt-5 mt-lg-0">
              <div className="mobile_header z_index_5 d-flex justify-content-end flex-column align-items-center text-center position-relative">
                <img
                  className="width_custom_mobile_img"
                  src={mobileImg}
                  alt="img"
                />
                <Slider
                  ref={myBtn}
                  className="w-100 position-absolute"
                  {...settingSlide1}
                  style={{ margin: "0 0 130px 0" }}>
                  <div className="d-flex flex-column justify-content-center text-center z_index-1">
                    <div className="mb_custom">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="ff_gilroy_semibold fs_2x4l text-white text-center mb-4 px-3 px-xl-0">
                        Single platform to
                        <span className="d-block">
                          secure your all digital assets.
                        </span>
                      </h4>

                      <div className="d-flex justify-content-center mx-3">
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            50K
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Valued <span className="d-block">customers</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            100+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Trusted <span className="d-block">partners</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            150+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Corporate <span className="d-block"> clients</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center z_index-1">
                    <div className="mb_custom">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="ff_gilroy_semibold fs_2x4l text-white text-center mb-4 px-3 px-xl-0">
                        Single platform to
                        <span className="d-block">
                          secure your all digital assets.
                        </span>
                      </h4>

                      <div className="d-flex justify-content-center mx-3">
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            50K
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Valued <span className="d-block">customers</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            100+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Trusted <span className="d-block">partners</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            150+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Corporate <span className="d-block"> clients</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center z_index-1">
                    <div className="mb_custom">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="ff_gilroy_semibold fs_2x4l text-white text-center mb-4 px-3 px-xl-0">
                        Single platform to
                        <span className="d-block">
                          secure your all digital assets.
                        </span>
                      </h4>

                      <div className="d-flex justify-content-center mx-3">
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            50K
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Valued <span className="d-block">customers</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            100+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Trusted <span className="d-block">partners</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            150+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Corporate <span className="d-block"> clients</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center z_index-1">
                    <div className="mb_custom">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="ff_gilroy_semibold fs_2x4l text-white text-center mb-4 px-3 px-xl-0">
                        Single platform to
                        <span className="d-block">
                          secure your all digital assets.
                        </span>
                      </h4>

                      <div className="d-flex justify-content-center mx-3">
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            50K
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Valued <span className="d-block">customers</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            100+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Trusted <span className="d-block">partners</span>
                          </p>
                        </div>
                        <div className="px-xxl-4 px-2  ">
                          <h2 className="ff_gilroy_bold fs_4x5l text_red_grident text-start">
                            150+
                          </h2>
                          <p className="ff_gilroy_medium fs_sm clr_grey text-start">
                            Corporate <span className="d-block"> clients</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="d-flex flex-column justify-content-center h-100">
                <p className="text_red_grident">Our benefits</p>
                <h2 className="ff_gilroy_bold fs_5x6l  text-white mb-0">
                  Take control of
                  <span className="d-lg-block">your cellular connectivity</span>
                </h2>
                <p className=" ff_gilroy_medium fs_2x2l clr_grey pt-md-4 pt-2 mb-0">
                  Your creativity is endless. Your IoT project shouldn't be held
                  back by cellular connectivity. Let's build a new unicorn
                  together.
                </p>
                <div className="row justify-content-between">
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                      Get started with IoT
                    </h3>
                    <p className="ff_gilroy_medium fs_md clr_grey pe-xl-4 pt-2 mb-0">
                      Our experts helps you find the most suitable carrier
                      profile for your deployment.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                      Manage connectivity
                    </h3>
                    <p className="ff_gilroy_medium fs_md clr_grey pe-xl-4 pt-2 mb-0">
                      Control all of your IoT SIM cards on a single platform.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                      One global solution
                    </h3>
                    <p className="ff_gilroy_medium fs_md clr_grey pe-xl-4 pt-2 mb-0">
                      You will receive 1 invoice and have a single point of
                      contact for support no matter where the SIMs are deployed.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                      Scale infinitely with ease
                    </h3>
                    <p className="ff_gilroy_medium fs_md clr_grey pe-xl-4 pt-2 mb-0">
                      Reach all business goals with a single connectivity
                      partner.
                    </p>
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

export default TakeControl;

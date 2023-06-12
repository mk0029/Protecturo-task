import React, { useRef, useState } from "react";
import Slider from "react-slick";
import mobileImg from "../assets/img/png/second-mobile.png";
import scanner from "../assets/img/png/scanner.png";
import check from "../assets/img/svg/phone.svg";
import buy from "../assets/img/svg/buy.svg";
import squar from "../assets/img/svg/squares.svg";
import line from "../assets/img/svg/Line 2.svg";
import posLogo from "../assets/img/png/How__Works.png";

function HowItWorks() {
  return (
    <>
      <section id="control" className="py-md-5 py-4 my-md-5 position-relative">
        <img
          className=" pos_how_work_bottom position-absolute end-0 bottom-0 z_index0"
          src={posLogo}
          alt=""
        />
        <div className="container position-relative z_index1">
          <div className="row flex-column-reverse flex-lg-row justify-content-lg-between justify-content-center align-items-center z_index1 position-relative">
            <div className="col-lg-4 col-sm-8 mt-5 mt-lg-0">
              <div className="mobile_header position-relative z_index_5 d-flex justify-content-end flex-column align-items-center text-center position-relative">
                <img className="w-100" src={mobileImg} alt="img" />

                <div className="d-flex flex-column justify-content-center text-center z_index1 position-absolute w-100 h-100 top-0 start-0">
                  <div className="mt-5">
                    <img className="w-50" src={scanner} alt="img" />
                    <h4
                      style={{ letterSpacing: "-0.03em" }}
                      className="ff_gilroy_semibold fs_2x4l mt-5 text-white text-center mb-4">
                      Scan the QR code to
                      <span className="d-block">activate eSIM</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="d-flex flex-column justify-content-center h-100">
                <p className="ff_gilroy_bold fs_2x4l text_red_grident">
                  How it works
                </p>
                <h2 className="common_heading text-white mb-0">
                  Learn how does
                  <span className="d-lg-block">international eSIM work</span>
                </h2>
                <div className="row justify-content-between mt-4 mt-sm-0 Animate_hover_Parent_Second">
                  <div className="col-sm-3 custom_margin_110 position-relative">
                    <img
                      className="position-absolute  ImageZpos Img_Aimate_hover d-none d-sm-flex"
                      src={line}
                      alt="img"
                    />

                    <img className="mb-sm-4 mb-2" src={check} alt="img" />
                    <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                      Check
                    </h3>
                    <p className="ff_gilroy_medium fs_sm clr_grey pe-xl-4 pt-sm-2 mb-0">
                      that your smartphone supports eSIM
                    </p>
                  </div>
                  <div className="col-sm-3 mt-md-5 mt-4 position-relative">
                    <img
                      className="position-absolute  ImageZpos2 Img_Aimate_hover d-none d-sm-flex"
                      src={line}
                      alt="img"
                    />
                    <img className="mb-sm-4 mb-2" src={buy} alt="img" />
                    <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                      Buy
                    </h3>
                    <p className="ff_gilroy_medium fs_sm clr_grey pe-xl-4 pt-sm-2 mb-0">
                      Your eSIM card to travel
                    </p>
                  </div>
                  <div className="col-sm-3 custom_margin_110 mt-4 mt-sm-0 d-flex  ">
                    <div className="d-flex flex-column justify-content-end h-100">
                      <span>
                        <img
                          className="mb-sm-4 mb-2 Img_Aimate_hover"
                          src={squar}
                          alt="img"
                        />
                      </span>
                      <h3 className="ff_gilroy_semibold fs_2x4l text-white mb-0">
                        Install the QR
                      </h3>
                      <p className="ff_gilroy_medium fs_sm clr_grey pe-xl-4 pt-sm-2 mb-0">
                        and configure it. Activate it just before your leave
                      </p>
                    </div>
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

export default HowItWorks;

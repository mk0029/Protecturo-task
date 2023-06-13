import React, { useRef, useState } from "react";
import Slidewrbtn from "../assets/img/svg/Slider_Backbtn.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";

import Slider from "react-slick";
import { SliderHero } from "../Pagejs/DataMAp";
import { SliderSecondHero } from "../Pagejs/DataMAp";
import Game__logo from "../assets/img/png/GameLogo__Hero.png";
function Hero() {
  const [sliderBg, setSliderBg] = useState("1");

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settingSlide2 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const myref = useRef();
  return (
    <>
      <section className="py-md-5 py-4 my-xl-5 position-relative mb-4">
        <div className="Layer_red_Common Hero_layer_red_pos z_index-1"></div>
        <div className="Layer_red_Common Hero_layer_red_pos2 z_index-1 position-absolute"></div>
        <img
          src={Game__logo}
          alt="Err"
          className="game__logo position-absolute opacity-50"></img>

        <div className="container position-relative z_index1 mb-5">
          <div className="box_mob z_index3 d-flex justify-content-end flex-column align-items-center text-center py-5 position-absolute d-xl-flex d-none">
            <Slider ref={myref} className="w-100 mb-5" {...settingSlide2}>
              {SliderSecondHero.map((data) => {
                return (
                  <div className="d-flex flex-column justify-content-center text-center ">
                    <div className="slidersec mb-5 pb-5">
                      <h4 className="text_head_slidersec">{data.heading}</h4>
                      <p
                        className="fs_xl fw-semibold ff_gilroy_semibold clr_slate_grey mx-auto fs_2x2l "
                        style={{ maxWidth: "286px", letterSpacing: "-4%" }}>
                        {data.peraGraph}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="pt-xxl-5 pt-md-4 d-flex flex-column justify-content-between h-100 position-relative z_index0">
            <div className="d-flex ">
              <div className="col-xxl-8 col-xl-7">
                <h1 className="fs_8x5l fw-semibold ff_gilroy_semibold clr_light_grey mb-0">
                  A platform to secure your all digital assets.
                </h1>{" "}
                <p
                  style={{ maxWidth: "648px", lineHeight: "175%" }}
                  className="peragraph_common mt-lg-5 mt-sm-4 pe-lg-5 pe-xxl-0 ">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="mt_Custom">
              <div>
                <div className="box_mob box_mob_Small mx-auto ms-md-auto me-md-0 z_index3_sm position-relative d-flex justify-content-center px-sm-0 px-1 justify-content-sm-end flex-column align-items-center text-center py-5 d-xl-none">
                  <Slider ref={myref} className="w-100" {...settingSlide2}>
                    {SliderSecondHero.map((data) => {
                      return (
                        <div className="d-flex flex-column justify-content-center text-center ">
                          <div className="slidersec mb-5 pb-5">
                            <h4 className="text_head_slidersec">
                              {data.heading}
                            </h4>
                            <p
                              className="custom_p_width_slider_secondfs_xl fw-semibold ff_gilroy_semibold clr_slate_grey mx-auto fs_2x2l px-5 px-md-4 "
                              style={{
                                letterSpacing: "-4%",
                              }}>
                              {data.peraGraph}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
                <div className="Slider_mt_nagitive pt-5 pt-md-0">
                  <div className="btnbox mb-3 d-flex position-relative z_index5 justify-content-center justify-content-sm-start gap-3">
                    <img
                      className="transition300"
                      onClick={() => {
                        myref?.current?.slickPrev();
                      }}
                      src={Slidewrbtn}
                      alt="Err"
                    />
                    <img
                      onClick={() => myref?.current?.slickNext()}
                      style={{ transform: "rotate(180deg)" }}
                      className="transition300"
                      src={Slidewrbtn}
                      alt="Err"
                    />
                  </div>
                  <Slider
                    className="position-relative z_index0"
                    ref={myref}
                    {...settings}>
                    {SliderHero.map((data) => {
                      return (
                        <div className="Slider pe-1 d-flex justify-content-center">
                          <div
                            onClick={() => {
                              setSliderBg(data.slidecount);
                            }}
                            className={`box_slider_hero ${
                              sliderBg === data.slidecount
                                ? "SliderBoxActive"
                                : ""
                            } `}>
                            <div className="d-flex flex-column h-100 justify-content-between p-4 ">
                              <h2
                                style={{ maxWidth: "109px" }}
                                className={`text-wrap fs_xl fw-semibold ff_gilroy_semibold ${
                                  sliderBg === data.slidecount
                                    ? "clr_white"
                                    : "clr_grey"
                                }`}>
                                {data.heading}
                              </h2>
                              <div className="d-flex justify-content-end">
                                <img
                                  style={{ width: "18px", height: "18px" }}
                                  src={data.ArrowImg}
                                  alt="Err"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

import React from "react";
import Slider from "react-slick";
import { SliderSecondHero } from "../Pagejs/DataMAp";

function TakeControl() {
  const settingSlide2 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <>
      <section>
        {" "}
        <div className=" container">
          <div className="row">
            {" "}
            <div className="col-5">
              <div className="box_mobile_second_TakeControl d-flex flex-column justify-content-end py-5 ">
                <div className="mb-5 pb-5">
                  <Slider className=" mb-5" {...settingSlide2}>
                    {/* {SliderSecondHero.map((data) => {
                      return (
                        <div className="d-flex flex-column justify-content-center text-center   ">
                          {" "}
                          <div className="slidersec mb-5 pb-5">
                            <h4 className=" text_head_slidersec">
                              {data.heading}
                            </h4>
                            <p
                              className=" ff_Gilroy fs_xl npmsemibold clr_slate_grey mx-auto "
                              style={{
                                maxWidth: "286px",
                                letterSpacing: "-4%",
                              }}>
                              {data.peraGraph}
                            </p>
                          </div>
                        </div>
                      );
                    })} */}
                    <div className="w-100">
                      <div className="h3">
                        Single platform to secure your all digital assets.
                      </div>
                      <div className="row w-100">
                        <div className="col-4">
                          <h4 className="">50K</h4>
                          <p>Valued customers</p>
                        </div>
                        <div className="col-4">
                          <h4 className="">100+</h4>
                          <p>Trusted partners</p>
                        </div>
                        <div className="col-4">
                          <h4 className="">150+</h4>
                          <p>Corporate clients</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default TakeControl;

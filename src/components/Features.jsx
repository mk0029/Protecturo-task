import React from "react";
import protuct_img from "../assets/img/svg/protuct-img.svg";
import { best } from "../Pagejs/DataMAp";

function Features() {
  return (
    <>
      <section className="py-md-5 py-4 position-relative mb-xl-5 mb-4">
        <div className="Layer_red_Common position-absolute pos_layer_red_Feature z_index0"></div>
        <div className="container z_index2 position-relative mb-xx-5 mb-lg-4 mt-xxl-5">
          <h6 className="text_red_grident">Features</h6>
          <h2 className="ff_gilroy_bold fw-bold fs_6x5l mb-0 clr_light_grey mt-3 mb-5 pb-2">
            Best-in-class Cyber safety
            <span className="d-lg-block ">for commercial and personal.</span>
          </h2>
          <div className="row">
            {best.map((data) => {
              return (
                <div className="col-xl-3 col-lg-4 col-sm-6 mt-4 Animate_hover_Parent_Second">
                  <div className="bg_light_black px-xxl-5 px-4 py-xxl-5 py-4 features_box_shadow transition300 h-100">
                    <img
                      className="Img_Aimate_hover"
                      src={data.dataImg}
                      alt="protuct_img"
                    />
                    <h4 className="ff_gilroy_semibold fs_2x4l fw-semibold mb-0 clr_slate_grey mt-4 pt-2">
                      {data.heading}
                    </h4>
                    <p className="mb-0 ff_gilroy_medium fw-medium fs_sm clr_grey mt-2">
                      {data.lorem}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

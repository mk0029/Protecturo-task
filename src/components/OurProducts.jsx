import React from "react";
import ESIM from "../assets/img/svg/MobileQR.svg";
import Box__3 from "../assets/img/svg/Maskgroup.svg";
function OurProducts() {
  return (
    <>
      <section className=" py-5 my-lg-4 my-xl-5">
        <div className=" container">
          <div className=" ">
            <div className="col-8 mx-auto ">
              {" "}
              <h3 className="text_red_grident text-center">
                Our products
              </h3>{" "}
              <h2
                style={{ color: "#e1e1e1" }}
                className=" ff_gilroy_bold fw-bold fs_6x5l text-center pb-4 mt-2">
                Allow us to secure your data with Protecturo’s products{" "}
              </h2>
            </div>
            <div className="row">
              <div className="col-4">
                <div className=" p-5 bg_light_black text-center h-100">
                  <div className=" d-flex justify-content-center">
                    <img className=" img_esim" src={ESIM} alt="" />
                  </div>{" "}
                  <h4 className=" mt-3 ff_gilroy_semibold fw-semibold fs_2x4l clr_slate_grey">
                    eSIM
                  </h4>
                  <p className=" py-2 ff_gilroy_medium fw- medium fs_sm clr_grey">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <span className=" d-inline-block mt-4">
                    <a className=" btn_common d-inline-block" href="">
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className=" p-5 bg_light_black text-center h-100">
                  <div className=" d-flex justify-content-center">
                    <img className=" img_esim" src={ESIM} alt="" />
                  </div>{" "}
                  <h4 className=" mt-3 ff_gilroy_semibold fw-semibold fs_2x4l clr_slate_grey">
                    eSIM
                  </h4>
                  <p className=" py-2 ff_gilroy_medium fw- medium fs_sm clr_grey">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <span className=" d-inline-block mt-4">
                    <a className=" btn_common d-inline-block" href="">
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className=" p-5 bg_light_black text-center h-100">
                  <div className=" d-flex justify-content-center">
                    <img className=" img_esim" src={Box__3} alt="" />
                  </div>{" "}
                  <h4 className=" mt-3 ff_gilroy_semibold fw-semibold fs_2x4l clr_slate_grey">
                    eSIM
                  </h4>
                  <p className=" py-2 ff_gilroy_medium fw- medium fs_sm clr_grey">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <span className=" d-inline-block mt-4">
                    <a className=" btn_common d-inline-block" href="">
                      Learn more
                    </a>
                  </span>
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

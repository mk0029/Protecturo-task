import React from "react";
import Pos_MobileImg_Instant from "../assets/img/png/GlobleLot.png";

function GloableLot() {
  return (
    <>
      <section
        className="position-relative"
        style={{ backgroundColor: "#121212" }}>
        <div className="Layer_red_Common layerred_commn_globerlot"></div>
        <div className="container">
          <div className=" pt-xxl-5 pt-4 -xl-4 px-xl-5 px-md-4 px-3 position-relative">
            <img
              src={Pos_MobileImg_Instant}
              alt="Err"
              className="Pos_MobileImg_GLoblelot d-lg-flex d-none position-absolute bottom-0 end-0 "
            />
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="pt-0 pb-4 py-md-4">
                  <h2
                    style={{ color: "#e1e1e1" }}
                    className="Heading_main ff_gilroy_bold mb-2">
                    Global IoT connectivity to deploy and scale your solutions
                  </h2>
                  <p className="peragraph_common mb-3">
                    If you're serious about getting your IoT build off the
                    ground - Protecturo is ready to make it quick, frictionless
                    and smart. Get started today with a free SIM & data, or
                    explore enterprise options with our team of IoT experts.
                  </p>
                  <span className="d-inline-block">
                    <a href="#" className="d-inline-block btn_common">
                      Get started
                    </a>
                  </span>
                </div>
              </div>
              <div className="d-lg-none">
                <img
                  style={{ width: "90%" }}
                  src={Pos_MobileImg_Instant}
                  alt="Err"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GloableLot;

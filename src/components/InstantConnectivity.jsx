import React from "react";
import BtnPlayStore from "../assets/img/svg/PlayStoreBtn.svg";
import BtnAppStore from "../assets/img/svg/AppStore.svg";
import Pos_MobileImg_Instant from "../assets/img/png/A__boy_with_ssmartphone.png";

function InstantConnectivity() {
  return (
    <>
      <section className="py-md-5 py-4 my-lg-5 position-relative" id="app">
        <img
          src=""
          alt=""
          className="layer_Instent_red Layer_red_Common position-absolute z_index0"
        />
        <div className="container position-relative z_index1">
          <div
            style={{ backgroundColor: "#121212" }}
            className=" pt-5 pb-xl-5 px-xxl-5 px-md-4 px-3  position-relative">
            <img
              src={Pos_MobileImg_Instant}
              alt=""
              className="Pos_MobileImg_Instant d-xl-flex d-none position-absolute bottom-0 end-0 "
            />
            <div className="row">
              <div className="col-xl-7 col-lg-10">
                <div className="pt-0 pb-4 py-md-4">
                  <h2
                    style={{ color: "#e1e1e1" }}
                    className="Heading_main ff_gilroy_bold mb-2">
                    Instant connectivity with the Protecturo app
                  </h2>
                  <p className="peragraph_common mb-3">
                    The ideal for the 21st century roadwarrior. The Protecturo
                    app lets you to grab a single data plan where and when you
                    want - at home or in any of our 190+ destinations. Select a
                    plan from the app, download an
                    <span className=" fw-bold ff_gilroy_bold fs_2x2l text_red_grident">
                      eSIM
                    </span>
                    , and you'll connect on the spot, on physical SIM card
                    required.
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-start gap-3 gap-md-4 mt-xl-5 mt-4  ">
                    <img
                      className="btn_store_Play__app_store d-inline-block transition300"
                      src={BtnPlayStore}
                      alt=""
                    />
                    <img
                      className="btn_store_Play__app_store d-inline-block transition300"
                      src={BtnAppStore}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="d-lg-none">
                <img className="w-100" src={Pos_MobileImg_Instant} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InstantConnectivity;

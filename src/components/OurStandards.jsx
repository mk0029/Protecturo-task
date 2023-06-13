import React from "react";
import Standerd from "../assets/img/png/OurStandred.png";
import dotz from "../assets/img/svg/OurStandredDotz.svg";

function OurStandards() {
  return (
    <>
      <section className="py-5 my-xxl-5  position-relative z_index3">
        <div className="container">
          <div className="col-xxl-7 col-md-9 mb-5 ">
            <h4 className="text_red_grident">Our standards</h4>
            <h2 style={{ color: "#E1E1E1" }} className="Heading_main">
              <span className="d-md-block"> Privacy standards</span> not seen
              before in telecom
            </h2>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-6 pe-xxl-4 ">
              <img
                className="w-100"
                // style={{ width: "771px" }}
                src={Standerd}
                alt="Err"
              />
            </div>
            <div className="col-lg-6 position-relative">
              <img
                src={dotz}
                alt="Err"
                className="DOtz__standred d-none d-lg-flex position-absolute z_index0 "
              />
              <div className="d-flex justify-content-end flex-column h-100 py-1 z_index2 position-relative mt-4 mt-lg-0 ps-xxl-3 ps-2">
                <h3
                  className="ff_gilroy_bold fw-bold fs_5x6l "
                  style={{ maxWidth: "411px", color: " #E1E1E1" }}>
                  Get started with Protecturo
                </h3>
                <p className="ff_gilroy_medium fw-medium fs_md clr_grey lh_24 mb-lg-4">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </p>
                <p className="ff_gilroy_medium fw-medium fs_md clr_grey lh_24">
                  Your personal information is 100% safe with us, because we do
                  not require any personal information besides email. Of course
                  no contracts, no credit checks and no fine prints. To protect
                  your privacy online, our data plans come with a Privacy IP
                  address.
                </p>
                <span className="d-inline-block mt-xxl-5 mt-md-4 mt-2">
                  <a className="btn_common d-inline-block" href="#">
                    Get started
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStandards;

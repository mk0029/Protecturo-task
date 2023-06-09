import React from "react";
import ryden from "../webp/ryden.webp";
import dots from "../png/dots.png";

function Product() {
  return (
    <>
      <section className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="d-flex flex-column justify-content-center h-100">
                <p className="ff_gilroy-bold fs_2x4l text_gradient_red">
                  Our benefits
                </p>
                <h2 className="common_heading text-white mb-0">
                  What you will
                  <span className="d-lg-block">get with Protecturo</span>
                </h2>
                <p className="ff_gilroy-medium fs_2x2l text_gray pt-md-4 pt-2 mb-0 pe-lg-4">
                  Your creativity is endless. Your IoT project shouldn't be held
                  back by cellular connectivity. Let's build a new unicorn
                  together.
                </p>
                <div className="row justify-content-between">
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Stay connected
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Travel and stay connected without roaming or surprise
                      bills.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      International
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Keep your local SIM card to receive all phone calls
                      everywhere.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Ease to get
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Purchase and install your eSIM in just one minute.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <h3 className="ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Data plans
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Get unlimited data plans in according to destinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4 mt-5 mt-lg-0">
              <div className="position-relative">
                <img className="position-absolute dots" src={dots} alt="dots" />
                <img className="w-100" src={ryden} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;

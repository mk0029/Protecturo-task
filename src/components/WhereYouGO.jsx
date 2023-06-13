import React from "react";
import vector from "../assets/img/svg/overlay.png";

function WhereYouGO() {
  return (
    <>
      <section className="py-md-5 py-4 mb-xxl-5 mb-lg-4 ">
        <div className="container ">
          <div
            style={{
              backgroundImage: `url(${vector})`,
              backgroundSize: "cover",
            }}
            className="red_box py-lg-5 py-4 px-4 d-flex flex-column align-items-center position-relative overflow-hidden">
            <h2 className="z_index3 ff_gilroy_bold fs_6x5l text-white text-center mt-4">
              Stay connect wherever you go
            </h2>
            <p className="z_index3 ff_gilroy_medium fs_2x2l clr_light_grey text-center pt-2">
              Buy an international eSIM card, stay connected wherever you go,
              <span className="d-lg-block">
                and avoid expensive phone bills.
              </span>
            </p>
            <button
              style={{ background: "#000" }}
              className="btn_common mt-4 mb-3 z_index3 border-0 ">
              Get started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhereYouGO;

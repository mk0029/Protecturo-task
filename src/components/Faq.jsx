import { Accordion } from "react-bootstrap";
import React, { useState } from "react";
import hand from "../assets/img/webp/hand.webp";
import redVector from "../assets/img/svg/red-vector.svg";

function Faq() {
  return (
    <>
      <section
        className="py-md-5 py-4 position-relative overflow- hidden "
        id="FAQ">
        <span
          style={{ left: "75%", top: "70%" }}
          className="red_shadow position-absolute end-0 z_index0"></span>
        <span
          style={{ left: "-20%", top: "-25%" }}
          className="red_shadow position-absolute z_index0"></span>
        <img className="red_vector_img" src={redVector} alt="vector" />

        <div className="container py-lg-5 my-xl-5">
          <div className="row justify-content-end mb-lg-5 pb-sm-5">
            <div className="col-lg-6">
              <img
                className="faq_img position-absolute start-0 top-50 translate-middle-y"
                src={hand}
                alt="img"
              />
            </div>
            <div className="col-xl-6 col-lg-8 z_index2">
              <div className="ps-xl-4">
                <p className="text_red_grident mb-0">FAQs</p>
                <h3 className="ff_gilroy_bold fs_6x5l clr_light_grey mb-0 pt-sm-3">
                  Some useful answers
                </h3>
                <div className="mt-lg-5 mt-4">
                  <Accordion
                    className="Faq_accordion rounded-3 d-flex flex-column gap-4"
                    defaultActiveKey="0"
                    flush>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items rounded-4  position-relative"
                      eventKey="0">
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_gilroy-bold fs_2x4l  mb-0">
                          what are the main objectives of cyber security?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="rounded-4 ff_gilroy-medium fs_md text-white mb-0 mt-1">
                          At vero eos et accusamus et iusto odio dign era sue
                          issimos ducimus qui
                          <span className="d-lg-block">
                            blanditiis praesentium vol uptatum deleniti atque
                            corrupti.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items rounded-4 position-relative"
                      eventKey="1">
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_gilroy-bold fs_2x4l  mb-0">
                          What are the three types of cyber threats?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_gilroy-medium fs_md text-white mb-0 mt-1">
                          At vero eos et accusamus et iusto odio dign era sue
                          issimos ducimus qui
                          <span className="d-lg-block">
                            blanditiis praesentium vol uptatum deleniti atque
                            corrupti.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items rounded-4 position-relative"
                      eventKey="2">
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_gilroy-bold fs_2x4l  mb-0">
                          How can you protect yourself from cyber security?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_gilroy-medium fs_md text-white mb-0 mt-1">
                          At vero eos et accusamus et iusto odio dign era sue
                          issimos ducimus qui
                          <span className="d-lg-block">
                            blanditiis praesentium vol uptatum deleniti atque
                            corrupti.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items rounded-4 position-relative"
                      eventKey="3">
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_gilroy-bold fs_2x4l  mb-0">
                          What would happen without cyber security?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_gilroy-medium fs_md text-white mb-0 mt-1">
                          At vero eos et accusamus et iusto odio dign era sue
                          issimos ducimus qui
                          <span className="d-lg-block">
                            blanditiis praesentium vol uptatum deleniti atque
                            corrupti.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items rounded-4 position-relative"
                      eventKey="4">
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_gilroy-bold fs_2x4l  mb-0">
                          Is cyber security a social or governance issue?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_gilroy-medium fs_md text-white mb-0 mt-1">
                          At vero eos et accusamus et iusto odio dign era sue
                          issimos ducimus qui
                          <span className="d-lg-block">
                            blanditiis praesentium vol uptatum deleniti atque
                            corrupti.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

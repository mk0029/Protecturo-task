import React, { useState } from "react";
import logo from "../assets/img/svg/Logo-Page.svg";
function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <section className=" container">
        <nav className=" d-flex justify-content-between align-items-center pt-4 mt-lg-3">
          <span>
            <img src={logo} alt="err" className="logopage" />
          </span>
          <div className="d-flex">
            {" "}
            <ul className=" d-flex align-items-center gap-xxl-5 gap-4 mb-0 d-none d-xl-flex pe-xxl-5 me-xl-3">
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Benefits
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  App
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  FAQs
                </a>
              </li>
            </ul>{" "}
            <div className=" d-lg-flex d-none">
              <a className="  d-inline-block btn_common " href="#">
                Get started
              </a>
            </div>
          </div>{" "}
          <div
            style={{ zIndex: "1234567" }}
            onClick={() => setNav(!nav)}
            className="d-xl-none Hamburger h-100 d-flex flex-column justify-content-center gap-1 position-relative ">
            <div
              className={`Ham_child ${
                nav ? " position-relative HamChild-true" : ""
              }`}></div>
            <div
              className={`Ham_child ${
                nav ? " position-relative HamChild-true" : ""
              }`}></div>{" "}
            <div
              className={`Ham_child ${
                nav ? " position-relative HamChild-true" : ""
              }`}></div>
          </div>
          <div
            style={{ zIndex: "1234555" }}
            className={`d-xl-none position-fixed h-100 w-100 Nav_mobile d-flex flex-column align-items-center justify-content-center ${
              nav ? "ShowNav" : "HideNav"
            }`}>
            <ul className=" d-flex flex-column align-items-center justify-content-center gap-xxl-5 gap-4 mb-0 ">
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Benefits
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  App
                </a>
              </li>
              <li>
                <a className=" Nav_links_common d-inline-block" href="#">
                  Features
                </a>
              </li>
              <li>
                <a
                  className="me-xxl-4 Nav_links_common d-inline-block"
                  href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="  d-inline-block btn_common " href="#">
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavBar;

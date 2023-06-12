import React, { useState } from "react";
import logo from "../assets/img/svg/Logo-Page.svg";
function NavBar() {
  const [nav, setNav] = useState(false);
  {
    if (nav === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <>
      <section className="container position-relative z_index4">
        <nav className="d-flex justify-content-between align-items-center pt-4 mt-lg-3">
          <span>
            <img src={logo} alt="err" className="logopage" />
          </span>
          <div className="d-flex">
            <ul className="d-flex align-items-center gap-xxl-5 gap-4 mb-0 d-none d-xl-flex pe-xxl-5 me-xl-3">
              <li>
                <a className="Nav_links_common d-inline-block" href="#benefits">
                  Benefits
                </a>
              </li>
              <li>
                <a className="Nav_links_common d-inline-block" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="Nav_links_common d-inline-block" href="#Products">
                  Products
                </a>
              </li>
              <li>
                <a className="Nav_links_common d-inline-block" href="#app">
                  App
                </a>
              </li>
              <li>
                <a className="Nav_links_common d-inline-block" href="#Features">
                  Features
                </a>
              </li>
              <li>
                <a className="Nav_links_common d-inline-block" href="#FAQ">
                  FAQs
                </a>
              </li>
            </ul>

            <div className="d-lg-flex d-none">
              <a className=" d-inline-block btn_common " href="#">
                Get started
              </a>
            </div>
          </div>

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
              }`}></div>

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
            <ul className="d-flex flex-column align-items-center justify-content-center gap-xxl-5 gap-4 mb-0 ">
              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className="Nav_links_common d-inline-block"
                  href="#benefits">
                  Benefits
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className="Nav_links_common d-inline-block"
                  href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className="Nav_links_common d-inline-block"
                  href="#Products">
                  Products
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className="Nav_links_common d-inline-block"
                  href="#app">
                  App
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className="Nav_links_common d-inline-block"
                  href="#Features">
                  Features
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className="Nav_links_common d-inline-block"
                  href="#FAQ">
                  FAQs
                </a>
              </li>

              <li>
                <a
                  onClick={() => setNav(!nav)}
                  className=" d-inline-block btn_common "
                  href="#">
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

import React from "react";
import logo from "../assets/img/svg/logo.svg";

function Footer() {
  return (
    <>
      <section
        id="footer"
        className="pt-md-5 py-4 position-relative overflow-hidden">
        <span className="Layer_red_Common Footer_layer_1 position-absolute top-100 start-0 translate-middle ms-5 z_index0"></span>
        <span className="Layer_red_Common Footer_layer_2 position-absolute bottom-100 start-100 translate-middle-x mb-5 ms-5 z_index0"></span>

        <div className="container pt-5 z_index2 position-relative">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <a href="#">
                  <img src={logo} alt="img" />
                </a>
                <p className="ff_gilroy-medium fs_sm clr_grey mb-0 mt-4 pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nis commodo consequat.
                </p>
                <span className="mt-lg-5 mt-4 pt-md-3 d-flex gap-4">
                  <a href="#">
                    <svg
                      className="footer_svg position-relative"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#232323" />
                      <path
                        d="M23.1412 10.0355L20.379 21.1731C20.249 21.6977 19.6478 21.9679 19.1549 21.7189L15.6615 19.9544L14.0096 22.5984C13.5601 23.319 12.4227 23.0064 12.4227 22.1639V19.2179C12.4227 18.9901 12.5202 18.7729 12.6881 18.6139L19.4961 12.2556C19.4907 12.1762 19.4041 12.1073 19.3174 12.1656L11.1932 17.6973L8.46349 16.3196C7.82439 15.9964 7.85147 15.0904 8.51224 14.8095L21.9713 9.07121C22.6158 8.79568 23.3091 9.36263 23.1412 10.0355Z"
                        fill="#AB1D1D"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="footer_svg position-relative"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#232323" />
                      <path
                        d="M18.3319 11.3246H19.61V9.09858C19.3895 9.06825 18.6311 9 17.748 9C15.9052 9 14.6429 10.1591 14.6429 12.2894V14.25H12.6094V16.7385H14.6429V23H17.136V16.7391H19.0873L19.397 14.2506H17.1355V12.5362C17.136 11.8169 17.3297 11.3246 18.3319 11.3246Z"
                        fill="#AB1D1D"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="footer_svg position-relative"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#232323" />
                      <g clip-path="url(#clip0_55_4184)">
                        <path
                          d="M22.9871 13.116C22.9543 12.3722 22.834 11.8608 22.6617 11.4176C22.4839 10.9472 22.2104 10.5261 21.8521 10.176C21.502 9.82047 21.0781 9.5442 20.6132 9.36921C20.1675 9.19689 19.6587 9.0766 18.9149 9.0438C18.1654 9.00823 17.9275 9 16.0267 9C14.126 9 13.8881 9.00823 13.1414 9.04102C12.3976 9.07382 11.8861 9.19422 11.4431 9.36644C10.9726 9.5442 10.5515 9.8177 10.2014 10.176C9.84586 10.5261 9.5697 10.95 9.3946 11.4149C9.22228 11.8608 9.10199 12.3694 9.06919 13.1133C9.03362 13.8627 9.02539 14.1006 9.02539 16.0014C9.02539 17.9021 9.03362 18.14 9.06641 18.8867C9.09921 19.6306 9.21961 20.142 9.39193 20.5851C9.5697 21.0555 9.84586 21.4766 10.2014 21.8267C10.5515 22.1823 10.9754 22.4585 11.4403 22.6335C11.8861 22.8058 12.3948 22.9261 13.1388 22.9589C13.8853 22.9918 14.1233 23 16.0241 23C17.9248 23 18.1628 22.9918 18.9094 22.9589C19.6533 22.9261 20.1647 22.8058 20.6077 22.6335C21.5486 22.2698 22.2925 21.5259 22.6562 20.5851C22.8284 20.1393 22.9488 19.6306 22.9816 18.8867C23.0144 18.14 23.0227 17.9021 23.0227 16.0014C23.0227 14.1006 23.0199 13.8627 22.9871 13.116ZM21.7264 18.832C21.6962 19.5157 21.5814 19.8849 21.4857 20.1311C21.2504 20.741 20.7664 21.225 20.1565 21.4603C19.9103 21.556 19.5384 21.6709 18.8574 21.7009C18.119 21.7338 17.8975 21.7419 16.0295 21.7419C14.1616 21.7419 13.9373 21.7338 13.2016 21.7009C12.5178 21.6709 12.1486 21.556 11.9025 21.4603C11.599 21.3481 11.3227 21.1703 11.0985 20.9379C10.866 20.7109 10.6882 20.4374 10.5761 20.1339C10.4803 19.8877 10.3655 19.5157 10.3355 18.8348C10.3026 18.0964 10.2945 17.8748 10.2945 16.0068C10.2945 14.1389 10.3026 13.9146 10.3355 13.179C10.3655 12.4952 10.4803 12.126 10.5761 11.8799C10.6882 11.5763 10.866 11.3001 11.1012 11.0758C11.3282 10.8433 11.6017 10.6655 11.9053 10.5534C12.1514 10.4577 12.5234 10.3429 13.2043 10.3128C13.9428 10.28 14.1643 10.2717 16.0322 10.2717C17.9029 10.2717 18.1244 10.28 18.8602 10.3128C19.5439 10.3429 19.9131 10.4577 20.1592 10.5534C20.4627 10.6655 20.739 10.8433 20.9633 11.0758C21.1957 11.3028 21.3735 11.5763 21.4857 11.8799C21.5814 12.126 21.6962 12.4979 21.7264 13.179C21.7592 13.9174 21.7674 14.1389 21.7674 16.0068C21.7674 17.8748 21.7592 18.0936 21.7264 18.832Z"
                          fill="#AB1D1D"
                        />
                        <path
                          d="M16.0261 12.4053C14.0406 12.4053 12.4297 14.0161 12.4297 16.0017C12.4297 17.9873 14.0406 19.5981 16.0261 19.5981C18.0117 19.5981 19.6225 17.9873 19.6225 16.0017C19.6225 14.0161 18.0117 12.4053 16.0261 12.4053ZM16.0261 18.3346C14.738 18.3346 13.6932 17.2899 13.6932 16.0017C13.6932 14.7135 14.738 13.6688 16.0261 13.6688C17.3143 13.6688 18.359 14.7135 18.359 16.0017C18.359 17.2899 17.3143 18.3346 16.0261 18.3346Z"
                          fill="#AB1D1D"
                        />
                        <path
                          d="M20.6051 12.2624C20.6051 12.7261 20.2291 13.102 19.7654 13.102C19.3017 13.102 18.9258 12.7261 18.9258 12.2624C18.9258 11.7987 19.3017 11.4229 19.7654 11.4229C20.2291 11.4229 20.6051 11.7987 20.6051 12.2624Z"
                          fill="#AB1D1D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_55_4184">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(9 9)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="footer_svg position-relative"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#232323" />
                      <g clip-path="url(#clip0_55_4190)">
                        <path
                          d="M23 11.6591C22.4794 11.8875 21.9246 12.0389 21.3462 12.1124C21.9412 11.7571 22.3954 11.1989 22.6089 10.526C22.0541 10.8567 21.4416 11.0904 20.7889 11.2208C20.2621 10.6599 19.5114 10.3125 18.6924 10.3125C17.1034 10.3125 15.8241 11.6023 15.8241 13.1834C15.8241 13.4109 15.8434 13.6296 15.8906 13.8379C13.5045 13.7215 11.3931 12.5779 9.97475 10.8358C9.72712 11.2654 9.58188 11.7571 9.58188 12.2865C9.58188 13.2805 10.0938 14.1616 10.8568 14.6718C10.3956 14.663 9.94325 14.5291 9.56 14.3183C9.56 14.327 9.56 14.3384 9.56 14.3498C9.56 15.7445 10.5549 16.903 11.8595 17.1699C11.6259 17.2337 11.3712 17.2644 11.107 17.2644C10.9232 17.2644 10.7377 17.2539 10.5636 17.2154C10.9355 18.352 11.9908 19.1876 13.2455 19.2148C12.269 19.9786 11.0291 20.4389 9.68688 20.4389C9.4515 20.4389 9.22575 20.4284 9 20.3995C10.2714 21.2194 11.7781 21.6875 13.403 21.6875C18.6845 21.6875 21.572 17.3125 21.572 13.5202C21.572 13.3934 21.5676 13.2709 21.5615 13.1493C22.1311 12.745 22.6097 12.2401 23 11.6591Z"
                          fill="#AB1D1D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_55_4190">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(9 9)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
              <div className="row justify-content-between">
                <div className="col-sm-3 col-6">
                  <h2 className="ff_gilroy-bold fs_2x4l text-white">
                    Products
                  </h2>
                  <div className="d-flex flex-column gap-3 mt-4">
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        eSIM SIM
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Card Wifi
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Wifi HotSopt
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-3 col-5">
                  <h2 className="ff_gilroy-bold fs_2x4l text-white">Company</h2>
                  <div className="d-flex flex-column gap-3 mt-4">
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        About
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Careers
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Ventures
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Grants
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Docs
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-3 col-6 mt-5 mt-sm-0">
                  <h2 className="ff_gilroy-bold fs_2x4l text-white">
                    Resources
                  </h2>
                  <div className="d-flex flex-column gap-3 mt-4">
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Support Center
                      </a>
                    </span>

                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        FAQs
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Partners
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Blogs
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Updates & News
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-3 col-5 mt-5 mt-sm-0">
                  <h2 className="ff_gilroy-bold fs_2x4l text-white">
                    My Account
                  </h2>
                  <div className="d-flex flex-column gap-3 mt-4">
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Profile
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Favorites
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Watchlist
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        My Collections
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_gilroy_semibold footer_common fs_sm clr_grey"
                        href="#">
                        Settings
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column flex-md-row justify-content-between mt-5 pt-xl-5">
            <p className=" ff_gilroy_medium fs_sm clr_grey">
              © 2022 Protecturo, All rights reserved.{" "}
            </p>
            <p className="d-flex gap-3 cursor_pointer">
              {" "}
              <p className=" ff_gilroy_medium fs_sm clr_grey cursor_pointer">
                Privacy Policy{" "}
              </p>
              <p className=" ff_gilroy_medium fs_sm clr_grey cursor_pointer">
                {" "}
                Terms & Conditions
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

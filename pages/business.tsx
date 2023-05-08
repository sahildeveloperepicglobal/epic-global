/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Style from "@/styles/business.module.scss";
import React from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const Business = () => {
  return (
    <div className="containers">
      <div className={Style.sectdiv}>
        <div className={Style.img1div}>
          <img src="/Images/expert process.jpg" />
        </div>
        <div className={Style.sectdiv1}>
          <div className={Style.awesome2}>
            <p>What we can do?</p>
            <h6>12+ Years Of Experience in Providing Top-Notch IT Service</h6>
          </div>
          <div className={Style.keepyour}>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="80"
                  height="80"
                >
                  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 17C11.355 17 10.7386 16.8779 10.1725 16.6555L7.93604 18.8923C9.12707 19.5961 10.5164 20 12 20C13.4836 20 14.8729 19.5961 16.064 18.8923L13.8275 16.6555C13.2614 16.8779 12.645 17 12 17ZM4 12C4 13.4836 4.40386 14.8729 5.10765 16.064L7.34451 13.8275C7.12213 13.2614 7 12.645 7 12C7 11.355 7.12213 10.7386 7.34451 10.1725L5.10765 7.93604C4.40386 9.12707 4 10.5164 4 12ZM18.8923 7.93604L16.6555 10.1725C16.8779 10.7386 17 11.355 17 12C17 12.645 16.8779 13.2614 16.6555 13.8275L18.8923 16.064C19.5961 14.8729 20 13.4836 20 12C20 10.5164 19.5961 9.12707 18.8923 7.93604ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM12 4C10.5164 4 9.12707 4.40386 7.93604 5.10765L10.1725 7.34451C10.7386 7.12213 11.355 7 12 7C12.645 7 13.2614 7.12213 13.8275 7.34451L16.064 5.10765C14.8729 4.40386 13.4836 4 12 4Z"></path>
                </svg>
                <p>Innovative solutions</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="80"
                  height="80"
                >
                  <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                </svg>
                <p>Client-focused</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="80"
                  height="80"
                >
                  <path d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.68514 8.26026 7.33499 8.77131 8H15.2287C15.7397 7.33499 16 6.68514 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C9.09008 15.6116 8.92007 15.8064 8.77131 16H15.2287C15.0799 15.8064 14.9099 15.6116 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"></path>
                </svg>
                <p> Extensive expertise</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="80"
                  height="80"
                >
                  <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
                </svg>
                <p>High-quality designs</p>
              </li>
            </ul>
            <p>
              We are providing exceptional IT service for over 12 years, with a
              proven track record of delivering results the grows business.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className={Style.mpcdiv}>
          <section>
            <div className={Style.picmain}>
              <div className={Style.photodiv}>
                <img src="/Images/we understand your need.jpg" />
              </div>
              <div className={Style.cont11div}>
                <h2>How We Understand Your Needs?</h2>
                <p>
                  At Epic Global, we understand the complexities of business
                  processes and the challenges that companies face when trying
                  to manage them. That's why we offer a comprehensive suite of
                  services that are tailored to meet our clients' unique needs
                  and objectives. Our team of experienced professionals have the
                  expertise to create custom solutions that are tailored to the
                  specific requirements of each client.
                </p>
                <div className={Style.contactdiv}>
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={Style.pic1main}>
              <div className={Style.cont12div}>
                <h2>
                  Expert Process Engineering, Automation, and Delivery Assurance
                  Services
                </h2>
                <p>
                  We have extensive experience in process engineering,
                  automation, and delivery assurance. Our process engineering
                  services involve the design, implementation and optimization
                  of business processes. We use our expertise to identify areas
                  for improvement, create efficient processes, and develop
                  strategies for greater efficiency. Our automation services
                  include the use of robotic process automation (RPA)
                  {/* to
                  automate repetitive processes and tasks. This allows
                  organizations to eliminate manual labour and reduce
                  operational costs. */}
                </p>
                <div className={Style.contactdiv}>
                  <button>Contact Us</button>
                </div>
              </div>
              <div className={Style.photodiv}>
                <img src="/Images/expert process.jpg" />
              </div>
            </div>
          </section>
          <section>
            <div className={Style.picmain}>
              <div className={Style.photodiv}>
                <img src="/Images/delivery assurance.jpg" />
              </div>
              <div className={Style.cont11div}>
                <h2>
                  Delivery Assurance with Data-Driven Analytics and Optimization
                </h2>
                <p>
                  For delivery assurance, we use data-driven analytics to
                  monitor and measure the performance of business processes. Our
                  analytics team can provide invaluable insights into the
                  effectiveness of processes and help to identify areas for
                  improvement. We also provide optimization services to help
                  clients maximize the efficiency of their processes.
                </p>
                <div className={Style.contactdiv}>
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={Style.pic1main}>
              <div className={Style.cont12div}>
                <h2>
                  Business Process Services with Innovative Solutions at Epic
                  Global
                </h2>
                <p>
                  At Epic Global, we are committed to providing the best
                  services for business process services. We strive to provide
                  our clients with innovative solutions that are tailored to
                  their specific needs. Our team of experienced professionals
                  are dedicated to delivering top-notch solutions that help our
                  clients run more efficiently and maximize their profitability.
                  With our comprehensive suite of services.
                  {/* we can help you
                  create a more efficient and profitable business. */}
                </p>
                <div className={Style.contactdiv}>
                  <button>Contact Us</button>
                </div>
              </div>
              <div className={Style.photodiv}>
                <img src="/Images/BPS.jpg" />
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className={Style.workdiv}>
        <p>We are Specialists</p>
        <h6>Work Features</h6>
      </div>
      <div className={Style.specdiv}>
        <div className={Style.imagediv}>
          <img src="/Images/BANNER.png" />
        </div>
        <div className={Style.financialdiv}>
          <ul>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 15V19H20V15H4ZM11 11V13H13V11H11ZM9 3V5H15V3H9Z"
                    fill="#ff6c6c"
                  ></path>
                </svg>
                <h3> Comprehensive solutions</h3>
              </a>
              <p>
                We provide comprehensive solutions tailored to meet the unique
                needs of our clients.
              </p>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    d="M12 0.585938L18 6.58594V9.00024H22V19.0002H23V21.0002H1V19.0002H2V9.00024H6V6.58594L12 0.585938ZM18 19.0002H20V11.0002H18V19.0002ZM6 11.0002H4V19.0002H6V11.0002ZM8 7.41436V19.0002H11V12.0002H13V19.0002H16V7.41436L12 3.41436L8 7.41436Z"
                    fill="#ff6c6c"
                  ></path>
                </svg>
                <h3>Customer-centric</h3>
              </a>
              <p>
                Our team of experts works closely with clients to fully
                understand their objectives and goals.
              </p>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    d="M2.04932 13.0001H7.52725C7.70624 16.2689 8.7574 19.3054 10.452 21.881C5.98761 21.1872 2.5001 17.5403 2.04932 13.0001ZM2.04932 11.0001C2.5001 6.4598 5.98761 2.81288 10.452 2.11914C8.7574 4.69468 7.70624 7.73123 7.52725 11.0001H2.04932ZM21.9506 11.0001H16.4726C16.2936 7.73123 15.2425 4.69468 13.5479 2.11914C18.0123 2.81288 21.4998 6.4598 21.9506 11.0001ZM21.9506 13.0001C21.4998 17.5403 18.0123 21.1872 13.5479 21.881C15.2425 19.3054 16.2936 16.2689 16.4726 13.0001H21.9506ZM9.53068 13.0001H14.4692C14.2976 15.7829 13.4146 18.3733 11.9999 20.5916C10.5852 18.3733 9.70229 15.7829 9.53068 13.0001ZM9.53068 11.0001C9.70229 8.21722 10.5852 5.62684 11.9999 3.40853C13.4146 5.62684 14.2976 8.21722 14.4692 11.0001H9.53068Z"
                    fill="#ff6c6c"
                  ></path>
                </svg>
                <h3> Industry expertise</h3>
              </a>
              <p>
                Our team of experts has experience in a wide range of
                industries, allowing us to provide specialized insights and
                knowledge.
              </p>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    d="M12.9993 3L12.9991 10.267L19.2935 6.63397L20.2935 8.36602L14.0001 11.999L20.2935 15.634L19.2935 17.366L12.9991 13.732L12.9993 21H10.9993L10.9991 13.732L4.70508 17.366L3.70508 15.634L9.99808 12L3.70508 8.36602L4.70508 6.63397L10.9991 10.267L10.9993 3H12.9993Z"
                    fill="#ff6c6c"
                  ></path>
                </svg>
                <h3>Collaborative approach</h3>
              </a>
              <p>
                We ensure to provide ongoing support and assistance long after
                the project is completed.
              </p>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001Z"
                    fill="#ff6c6c"
                  ></path>
                </svg>
                <h3>Strategic planningr</h3>
              </a>
              <p>
                We can ensure that we deliver solutions that are not only
                effective but also sustainable and scalable.
              </p>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"
                    fill="#ff6c6c"
                  ></path>
                </svg>
                <h3>Timely delivery</h3>
              </a>
              <p>
                Our team is highly skilled and efficient, enabling us to deliver
                high-quality solutions without sacrificing speed or accuracy.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className={Style.servdiv}>
          <div className={Style.procdiv}>
            <h2>Why Business Process Services?</h2>
            <p>
              Business process services can be used to manage a variety of
              processes, including:
            </p>
            <ul>
              <li>Back office services</li>
              <li>Sales process</li>
              <li>Order Processing</li>
              <li>Supply chain management</li>
              <li>Document Management</li>
              <li>E-Commerce Support Services</li>
              <li>Underwriting processes</li>
              <li>Inside sales processes</li>
              <li>Verification processes</li>
              <li>Lead generation processes</li>
              <li>Mobile entertainment content delivery</li>
              <li>Platform Development (IT development)</li>
              <li>The Benefits of Business Process Services</li>
            </ul>
          </div>
          <div className={Style.whyimg}>
            <img src="/Images/WHY BPS.jpg" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className={Style.offer}>
          <h3>
            Business process services offer a number of benefits to the
            organizations, including:
          </h3>
          <div className={Style.quadiv}>
            <div className={Style.improdiv}>
              <div className={Style.teamdiv}>
                <img src="/Images/Improved efficiency.png" />
                <div className={Style.creativ}>
                  <h2>Improved efficiency</h2>
                  <p>
                    BPS helps organizations reduce the time and effort required
                    to complete routine tasks, allowing them to focus on more
                    strategic initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.improdiv}>
              <div className={Style.teamdiv}>
                <img src="/Images/Reduced costs.png" />
                <div className={Style.creativ}>
                  <h2>Reduced costs</h2>
                  <p>
                    By outsourcing mundane, repetitive tasks, organizations can
                    reduce staffing costs and free up resources to focus on
                    other areas.
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.improdiv}>
              <div className={Style.teamdiv}>
                <img src="/Images/improve cash flow.png" />
                <div className={Style.creativ}>
                  <h2>Improved cash flow</h2>
                  <p>
                    By streamlining processes and automating manual tasks,
                    organizations can increase cash flow and improve their
                    financial performance.
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.improdiv}>
              <div className={Style.teamdiv}>
                <img src="/Images/Improved compliance.png" />
                <div className={Style.creativ}>
                  <h2>Improved compliance</h2>
                  <p>
                    BPS helps organizations stay compliant with regulations and
                    industry standards.
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.improdiv}>
              <div className={Style.teamdiv}>
                <img src="/Images/Increased scalability.png" />
                <div className={Style.creativ}>
                  <h2>Increased scalability</h2>
                  <p>
                    BPS helps organizations quickly and easily scale up or down
                    in response to changing customer needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Business;

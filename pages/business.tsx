/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */


import Style from "@/styles/business.module.scss";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import Slider from "./slider";

const Business = () => {
  return (
    <div className={Style.maincontainer}>
      <div className={Style.head1}>
        <div className={Style.ontime}>
          <div className={Style.awesome}>
            <h3>Awesome Service</h3>
            <h6>Ontime Everytime</h6>
          </div>
          <div className={Style.casestudy}>
            <p>
              <a>VIEW CASE STUDY</a>
              <svg
                xmlns="http:/www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"
                  fill=""
                ></path>
              </svg>
            </p>
          </div>
        </div>

        <div className={Style.atyour}>
          <div className={Style.awesome}>
            <h3>Awesome Service</h3>
            <h6>At Your Services</h6>
          </div>
          <div className={Style.casestudy}>
            <p>
              <a>VIEW CASE STUDY</a>
              <svg
                xmlns="http:/www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"
                  fill=""
                ></path>
              </svg>
            </p>
          </div>
        </div>
        <div className={Style.online}>
          <div className={Style.awesome}>
            <h3>Awesome Service</h3>
            <h6>Online Booking</h6>
          </div>
          <div className={Style.casestudy}>
            <p>
              <a>VIEW CASE STUDY</a>
              <svg
                xmlns="http:/www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"
                  fill=""
                ></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className={Style.ourservice}>
        <p>A general set of</p>
        <h6>Our Services</h6>
      </div>

      <section>
        <div className={Style.contdiv}>
          <div className={Style.cont1div}>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="72"
                  height="72"
                >
                  <path d="M11 2.04932V12.9999H21.9506C21.4489 18.0533 17.1853 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932ZM13 2.04932C17.7244 2.51839 21.4816 6.27552 21.9506 10.9999H13V2.04932Z"></path>
                </svg>

                <h3>General Accounting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellent esque dignissim eros a sapien tempus.
                </p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="72"
                  height="72"
                >
                  <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
                </svg>
                <h3>Tax Calculating</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellent esque dignissim eros a sapien tempus.
                </p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="72"
                  height="72"
                >
                  <path d="M15 3C15.5523 3 16 3.44772 16 4V6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H8V4C8 3.44772 8.44772 3 9 3H15ZM8 8H6V19H8V8ZM18 8H16V19H18V8ZM14 5H10V6H14V5Z"></path>
                </svg>
                <h3>Increase Efficience</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellent esque dignissim eros a sapien tempus.
                </p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="72"
                  height="72"
                >
                  <path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z"></path>
                </svg>
                <h3>Reduce Expenditures</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellent esque dignissim eros a sapien tempus.
                </p>
              </li>
            </ul>
          </div>
          <div className={Style.cont2div}>
            <img src="/bussinessimage/filler1-1.jpg" />
          </div>
        </div>
      </section>

      <div className={Style.sectdiv}>
        <div className={Style.img1div}>
          <img src="/bussinessimage/filler2-1-1.jpg" />
        </div>
        <div className={Style.sectdiv1}>
          <div className={Style.awesome2}>
            <p>What we can do?</p>
            <h6>
              20+ Years of Experience in Financial & Business Audit Services
            </h6>
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
                <p>KEEP YOUR SECRECTS SAFELY</p>
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
                <p>WELL TRAINED EXPERTS</p>
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
                <p>FIRST WORKING PROSSES</p>
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
                <p>GROW UP YOUR BUSINESS</p>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent
              esque dignissim eros a sapien tempus.
            </p>
          </div>
        </div>
      </div>

      <div className={Style.ourservice}>
        <p>Our Portfolio</p>
        <h6>Case Study</h6>
      </div>
      <div className={Style.alldevdiv}>
        <ul>
          <li>All</li>
          <li>Development</li>
          <li>Logo Design</li>
          <li>Photography</li>
          <li>Web Design</li>
        </ul>
      </div>
      <div className={Style.imagesdiv}>
        <ul>
          <li>
            <img src="/bussinessimage/gallery-1.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-2.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-3.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-4.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-5.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-6.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-7.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-8.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-9.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-10.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-11.jpg" />
          </li>
          <li>
            <img src="/bussinessimage/gallery-12.jpg" />
          </li>
        </ul>
      </div>
      <div className={Style.workdiv}>
        <p>We are Specialists</p>
        <h6>Work Features</h6>
      </div>
      <div className={Style.specdiv}>
        <div className={Style.imagediv}>
          <img src="/bussinessimage/female-img.jpg" />
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
                    fill="#a0cd4e"
                  ></path>
                </svg>
                <h3>Business Consulting</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Curabtitur vulputate.
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
                    fill="#a0cd4e"
                  ></path>
                </svg>
                <h3>Financial Consulting</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Curabtitur vulputate.
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
                    fill="#a0cd4e"
                  ></path>
                </svg>
                <h3>Market Research</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Curabtitur vulputate.
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
                    fill="#a0cd4e"
                  ></path>
                </svg>
                <h3>Risk Management</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Curabtitur vulputate.
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
                    fill="#a0cd4e"
                  ></path>
                </svg>
                <h3>Mortgage Advisor</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Curabtitur vulputate.
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
                    fill="#a0cd4e"
                  ></path>
                </svg>
                <h3>Savings Money</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                Curabtitur vulputate.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.videobook}>
        <div className={Style.video1}>
          <div className={Style.process}>
            <h6>Our Work Process as Videos</h6>
            <p>
              Range of consulting services, all designed to help your
              organisation
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="72"
              height="72"
            >
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"
                fill="#a0cd4e"
              ></path>
            </svg>
          </div>
          <button>VIEW MORE</button>
        </div>
        <div className={Style.appointment}>
          <div className={Style.bookapt}>
            <p>Free Estimation</p>
            <h6>Book an Appointment</h6>
          </div>
          <form>
            <input type="text" placeholder="Full Name / Company Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
            <select name="role">
              <option value="">Service Required</option>
              <option value="">Service Required 1</option>
              <option value="customer">Service Required 2</option>
              <option value="admin">Service Required 3</option>
            </select>
           
            <span>**Contact our support team if you have any questions.</span>
           
            </form>
            <button>BOOK NOW</button>
        </div>
      </div>
      <div className={Style.ourservice}>
        <p>Well Experienced</p>
        <h6>Our Expert Team</h6>
      </div>
      <div className={Style.expert}>
        <div className={Style.fourimage}>
          <img src="/bussinessimage/new-team1.jpg" width="300" />
          <h3>John Doe</h3>
          <p>Management Team</p>
        </div>
        <div className={Style.fourimage}>
          <img src="/bussinessimage/new-team2.jpg" width="300" />
          <h3>Becky Linch</h3>
          <p>Management Team</p>
        </div>
        <div className={Style.fourimage}>
          <img src="/bussinessimage/new-team3.jpg" width="300" />
          <h3>Shan Michel</h3>
          <p>Management Team</p>
        </div>
        <div className={Style.fourimage}>
          <img src="/bussinessimage/new-team4.jpg" width="300" />
          <h3>Linda Rose</h3>
          <p>Management Team</p>
        </div>
      </div>
      <div className={Style.consultdiv}>
        <div className={Style.consult1}>
         <div className={Style.jhona}>
            <img src="/bussinessimage/author1.jpg" />
            <h2>Jonha Doe</h2>
            <h4>BUSINESS CONSULTANT</h4>
            <p>
              Sed at laoreet odio. Nulla id dolor <br />
              eu augue iaculiqs ultrices sit amet id tellus.
            </p>
          </div>
          <div className={Style.jhona}>
            <img src="/bussinessimage/test-3.jpg" />
            <h2>Jonha Doe</h2>
            <h4>BUSINESS CONSULTANT</h4>
            <p>
              Sed at laoreet odio. Nulla id dolor
              <br />
              eu augue iaculiqs ultrices sit amet id tellus.
            </p>
          </div>
          <div className={Style.jhona}>
            <img src="/bussinessimage/test-6.jpg" />
            <h2>Jonha Doe</h2>
            <h4>BUSINESS CONSULTANT</h4>
            <p>
              Sed at laoreet odio. Nulla id dolor <br /> eu augue iaculiqs
              ultrices sit amet id tellus.
            </p>
          </div>
        </div>
        <div className={Style.consult2}>
          <img src="/bussinessimage/author6.jpg" />
          <img src="/bussinessimage/author2.jpg" />
          <img src="/bussinessimage/author3.jpg" />
          <img src="/bussinessimage/author1.jpg" />
          <img src="/bussinessimage/author4.jpg" />
          <img src="/bussinessimage/author5.jpg" />
        </div>
      </div>
      <div className={Style.ourservice}>
        <p>Our Case Study</p>
        <h6>Recent Blog Posts</h6>
      </div>
      <div className={Style.blogsdiv}>
        <div className={Style.blogs1}>
          <img src="/bussinessimage/blog-1-1.jpg" />
          <div className={Style.blogs2}>
            <h3>Business Accounting Management & Consultancy</h3>
            <h5>JANUARY 20, 2019</h5>
            </div>
            <div className={Style.paradiv} >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus mi facilisis eget....
            </p>
            </div>
          
        </div>
        <div className={Style.blogs1}>
          <img src="/bussinessimage/blog-2-1.jpg" />
          <div className={Style.blogs2}>
            <h3>Inventory Management Tracking System</h3>
            <h5>JANUARY 18, 2019</h5>
            </div>
            <div className={Style.paradiv} >
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus mi facilisis eget....
            </p></div>
          
        </div>
        <div className={Style.blogs1}>
          <img src="/bussinessimage/blog-3-1.jpg" />
          <div className={Style.blogs2}>
            <h3>Tuemin quides mivos</h3>
            <h5>JANUARY 18, 2019</h5>
             </div>
             <div className={Style.paradiv} >
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus mi facilisis eget....
            </p></div>
         
        </div>
      </div>
      <div className={Style.logodiv} >
        <div className={Style.achive} >
        <img src="/bussinessimage/01-partner-carousel-img1.png"/>
        <img src="/bussinessimage/01-partner-carousel-img3.png"/>
        <img src="/bussinessimage/01-partner-carousel-img4.png"/>
        <img src="/bussinessimage/01-partner-carousel-img5.png"/>
        <img src="/bussinessimage/01-partner-carousel-img2.png"/>
        </div>
        <div className={Style.allachive}>
         <a>All Achievements</a>
          </div>
      </div>


      
    </div>
  );
};
export default Business;

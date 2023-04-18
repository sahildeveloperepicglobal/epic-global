import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fc] pt-28 pb-28">
      <div className="container mx-auto  mb-28 ">
        <div className="grid grid-cols-2 items-end ">
          <div className="col ">
            <h3 className="text-4xl font-semibold  text-[#151515] mb-4">
              How can we help you?
            </h3>
            <p className="text-base font-normal text-[#151515]">
              <b>Epic Global</b> always try to provide the best Business
              <br />
              Solutions for Clients to grow up their Business sharply and
              smoothly.
            </p>
          </div>

          <div className="col flex justify-end">
            <button className="rounded-full px-14 py-4  bg-[] font-normal text-lg text-[#151515] border-[#151515] border-2  hover:text-[#fff] hover:bg-[#151515]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="flex ">
          <div className="w-1/3 ">
            <div className="box">
              <div className="logoimage mb-[14px]">
                {" "}
                <img src="/img/logo.webp" alt="" />
              </div>
              <div className="abouttext pr-[100px]">
                <p className="text-[15px] text-base text-[#080b1a] mb-3">
                  We at Epic Global interminably strive for the betterment of IT
                  services as an industry altogether. Keeping up with
                  cutting-edge technology and delivering reliable and secure
                  services to clients
                </p>

                <p className="text-[15px] text-base text-[#080b1a] ">
                  © <b>2023 Epicglobal. All Rights Reserved.</b>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 ">
            <div className="box">
              <h3 className="text-[30px] font-semibold text-[#080b1a] mb-[16px] ">
                Information
              </h3>
              <ul>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">About Us</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Business Process Services</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Project Management</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Design & Development</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Online Marketing</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 ">
            <div className="box">
              <h3 className="text-[30px] font-semibold text-[#080b1a] mb-[16px] ">
                Quick link
              </h3>
              <ul>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">About Us</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Business Process Services</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Project Management</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Design & Development</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Online Marketing</Link>
                </li>
                <li className="text-[15px] font-medium text-[#080b1a] mb-[5px] transition-all hover:ml-[5px]">
                  <Link href="./">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 ">
            <div className="box">
              <h3 className="text-[30px] font-semibold text-[#080b1a] mb-[16px] ">
                Contact us
              </h3>
              <p className="text-[15px] font-medium text-[#080b1a] mb-1">
                B05, <br /> H-140, <br />
                Sector 63, Noida, <br />
                201301
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

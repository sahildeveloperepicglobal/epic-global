import Breadcumb from "@/component/Breadcumb";
import MailIcon from "@/icons/MailIcon";
import MapIcon from "@/icons/MapIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import Link from "next/link";
import React from "react";

function contact() {
  return (
    <>
      <Breadcumb
        heading="Contact Us"
        content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`}
      />

      <section className="bg-[url('../public/img/bg1.jpg')] pt-10 pb-10">
        <div className="container mx-auto   mb-[30px]">
          <div className="flex">
            <div className="w-[100%] ">
              <div className="text-4xl font-semibold  text-[#151515] mb-2 text-center">
                Company Address
              </div>
              <p className="text-base font-normal text-[#151515]  text-center">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5">
          <div className="flex justify-center">
            <div className="w-[70%]">
              <div className="flex gap-8">
                <div className="w-4/12">
                  <div className="group  box text-center pt-[50px] pb-[20px] pl-[20px] pr-[20px] rounded-[8px] transition bg-[#fff] shadow-2xl group-hover:text-white hover:!bg-[#ED2C41]">
                    <div className="img w-[60px] h-[60px] ml-auto mr-auto mb-5">
                      {/* <img src="./svg/phone-line.svg" alt="Phone Number" /> */}
                      <PhoneIcon className="  group-hover:stroke-[#fff] fill-[#fff] stroke-[#ED2C41]" />
                    </div>
                    <h3 className="text-[20px] font-semibold mb-4 group-hover:text-white">
                      Phone Number
                    </h3>
                    <p className="text-[16px] font-normal text[#333] group-hover:text-white">
                      088 (013180 56529)
                    </p>
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="group  box text-center pt-[50px] pb-[20px] pl-[20px] pr-[20px] rounded-[8px] transition bg-[#fff] shadow-2xl group-hover:text-white hover:!bg-[#ED2C41]">
                    <div className="img w-[60px] h-[60px] ml-auto mr-auto mb-5">
                      <MailIcon className="    fill-[#fff] stroke-[#ED2C41]" />
                    </div>
                    <h3 className="text-[20px] font-semibold mb-4 group-hover:text-white">
                      Email Address
                    </h3>
                    <p className="text-[16px] font-normal text[#333] group-hover:text-white">
                      gmail@example.com
                    </p>
                  </div>
                </div>
                <div className="w-4/12">
                  <div className="group  box text-center pt-[50px] pb-[20px] pl-[20px] pr-[20px] rounded-[8px] transition bg-[#fff] shadow-2xl group-hover:text-white hover:!bg-[#ED2C41]">
                    <div className="img w-[60px] h-[60px] ml-auto mr-auto mb-5">
                      <MapIcon className="    fill-[#fff] stroke-[#ED2C41]" />
                    </div>
                    <h3 className="text-[20px] font-semibold mb-4  group-hover:text-white">
                      Office Address
                    </h3>
                    <p className="text-[16px] font-normal text[#333]  group-hover:text-white">
                      B05, H-140, Sector 63, Noida, 201301
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('../public/img/bg03.jpg')] pt-10 pb-10">
        <div className="container mx-auto mt-5">
          <div className="w-[70%] mx-auto">
            <div className="flex   gap-5 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[100%] bg-[rgba(255,255,255,0.2)] h-[60px] transition-all rounded-[5px] focus:outline-none border-[0] text-white placeholder:text-white font-normal px-[20px] py-[6px]"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[100%] bg-[rgba(255,255,255,0.2)] h-[60px] transition-all rounded-[5px] focus:outline-none border-[0] text-white placeholder:text-white font-normal px-[20px] py-[6px]"
                />
              </div>
            </div>
            <div className="flex   gap-5 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-[100%] bg-[rgba(255,255,255,0.2)] h-[60px] transition-all rounded-[5px] focus:outline-none border-[0] text-white placeholder:text-white font-normal px-[20px] py-[6px]"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Website"
                  className="w-[100%] bg-[rgba(255,255,255,0.2)] h-[60px] transition-all rounded-[5px] focus:outline-none border-[0] text-white placeholder:text-white font-normal px-[20px] py-[6px]"
                />
              </div>
            </div>

            <div className="flex   gap-5 mb-4">
              <div className="w-[100%]">
                <input
                  type="text"
                  placeholder="Your Message"
                  className="w-[100%] bg-[rgba(255,255,255,0.2)] h-[100px] transition-all rounded-[5px] focus:outline-none border-[0] text-white placeholder:text-white font-normal px-[20px] py-[6px]"
                />
              </div>
            </div>

            <div className="flex   gap-5 mb-4">
              <button className="bg-white text-[#232323] rounded-[5px] px-[30px] py-[12px] mx-auto hover:bg-[#00247E] hover:text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;

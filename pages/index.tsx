/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { Parallax, useParallax } from "react-scroll-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const parallax = useParallax<HTMLDivElement>({
    scale: [0, 1],
  });
  const sliderSettings = {
    dots: true,
    infinite: true,
    // vertical: true,
    // verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="wapper">
      <div className="bannerhome relative">
        <Slider {...sliderSettings} className="bannerouter !bottom-0">
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="bannerslider relative !flex items-end h-[100vh] pb-40"
            >
              <div className="image absolute w-[100%] top-0 left-0 h-[100vh] z-[-1]">
                <img
                  src={slide.url}
                  alt={slide.url}
                  className="h-[100%] w-[100%]"
                />
              </div>
              <div className="container mx-auto">
                <div className="w-1/2">
                  <h2 className="text-6xl  font-semibold text-[#fff] mb-4 ">
                    {slide.title}
                  </h2>
                  <p className="text-xl font-normal text-[#fff] ">
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="socsection absolute top-[90%] w-[100%]">
          <div className="container mx-auto flex justify-end align-top">
            <ul className="flex gap-5">
              <li className="border-b border-[#5a5858] pb-2 hover:!border-[#fff]">
                <Link href="/">
                  <img
                    src="./svg/facebook.svg"
                    alt="facebook"
                    className="h-8 w-8"
                  />
                </Link>
              </li>
              <li className="border-b border-[#5a5858] pb-2 hover:border-[#fff]">
                <Link href="/">
                  <img
                    src="./svg/instagram.svg"
                    alt="instagram"
                    className="h-8 w-8"
                  />
                </Link>
              </li>

              <li className="border-b border-[#5a5858] pb-2 hover:border-[#fff]">
                <Link href="/">
                  <img
                    src="./svg/linkedin.svg"
                    alt="twitter"
                    className="h-8 w-8"
                  />
                </Link>
              </li>
              <li className="border-b border-[#5a5858] pb-2 hover:border-[#fff]">
                <Link href="/">
                  <img
                    src="./svg/pinterest.svg"
                    alt="linkedin"
                    className="h-8 w-8"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <div
          ref={parallax.ref}
          className="h-[100vh] flex items-center justify-center"
          style={{
            background: "url(/img/roundlogo.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "content",
            backgroundPosition: "center center",
          }}
        >
          <img src="/slider/1.png" alt="roundlogo" />
        </div>
      </section>

      <section className="discoversection pt-10 pb-10">
        <div className="container mx-auto text-center">
          <div className="text-4xl font-semibold  text-[#151515] mb-4">
            Discover Epic Global
          </div>
          <p className="text-base font-normal text-[#151515] text-center">
            We are obsessed with quality. We have an amazing team that is ready
            to conquer any task.
          </p>
        </div>

        <div className="container  mx-auto mt-10">
          <div className="grid">
            <div className="flex gap-5 justify-center">
              <div className="w-1/4 ">
                <div className="box  px-4 py-10  border border-[#0021631c] rounded-[10px]">
                  <div className="flex w-20 h-20 rounded-[100px]  bg-[#ffd3d3]  items-center justify-center mb-4">
                    <img
                      src="./img/quality.png"
                      className="w-14 h-14"
                      alt="Quality & Agile Services"
                    />
                  </div>

                  <div className="text-lg  font-semibold  text-[#fb0100] mb-2">
                    Quality & Agile Services
                  </div>
                  <p className="text-base font-normal text-[#151515]">
                    Epic global is a team of passionate, enthusiastic and
                    perfectionist people, who are always on the go to provide
                    the best possible solutions, products and services. Our
                    projects are backed by an effective and efficient
                    development agile methodology that employs sustainable
                    processes designed for long
                  </p>
                </div>
              </div>
              <div className="w-1/4 ">
                <div className="box  px-4 py-10  border border-[#fe0007] rounded-[10px] bg-[#fe0007]">
                  <div className="flex w-20 h-20 rounded-[100px]  bg-[#fff]  items-center justify-center mb-4">
                    <img
                      src="./img/affordability.png"
                      className="w-14 h-14"
                      alt="Quality & Agile Services"
                    />
                  </div>

                  <div className="text-lg  font-semibold  text-[#fff] mb-2">
                    Affordability
                  </div>
                  <p className="text-base font-normal text-[#fff]">
                    Epic global is a team of passionate, enthusiastic and
                    perfectionist people, who are always on the go to provide
                    the best possible solutions, products and services. Our
                    projects are backed by an effective and efficient
                    development agile methodology that employs sustainable
                    processes designed for long
                  </p>
                </div>
              </div>
              <div className="w-1/4 ">
                <div className="box  px-4 py-10  border border-[#0021631c] rounded-[10px]">
                  <div className="flex w-20 h-20 rounded-[100px]  bg-[#ffd3d3]  items-center justify-center mb-4">
                    <img
                      src="./img/support-system.png"
                      className="w-14 h-14"
                      alt="Quality & Agile Services"
                    />
                  </div>

                  <div className="text-lg  font-semibold  text-[#fb0100] mb-2">
                    Support System
                  </div>
                  <p className="text-base font-normal text-[#151515]">
                    Epic global is a team of passionate, enthusiastic and
                    perfectionist people, who are always on the go to provide
                    the best possible solutions, products and services. Our
                    projects are backed by an effective and efficient
                    development agile methodology that employs sustainable
                    processes designed for long
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const sliderData = [
  {
    id: 1,
    url: "slider/1.png",
    title: "We are obsessed  with quality.",
    content: "We have an amazing team that is ready to conquer any task",
  },
  {
    id: 2,
    url: "slider/2.png",
    title: "We are obsessed with quality.",
    content: "We have an amazing team that is ready to conquer any task",
  },
  {
    id: 3,
    url: "slider/3.png",
    title: "We are obsessed with quality.",
    content: "We have an amazing team that is ready to conquer any task",
  },
];

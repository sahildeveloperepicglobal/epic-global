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
  // const parallax = useParallax<HTMLDivElement>({
  //   scale: [0, 5],
  // });
  const sliderSettings = {
    dots: true,
    infinite: true,
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

      {/* <section>
        <div
          className="h-[100vh] flex items-center justify-center"
          style={{
            background: "url(/slider/1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "content",
            backgroundPosition: "center center",
          }}
        >
          <img src="/img/bg-image.png" ref={parallax.ref} alt="roundlogo" />
        </div>
      </section> */}

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
                <div className="box  px-4 py-10  border border-[#d32020] rounded-[10px] bg-[#d32020]">
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

      <section className="discoversection mt-5  pt-[50px] pb-[60px] bg-[#dfe3e796]">
        <div className="container mx-auto text-center">
          <div className="text-4xl font-semibold  text-[#151515] mb-4">
            Technology Partner{" "}
          </div>
        </div>

        <div className="container  mx-auto mt-10">
          <div className="grid">
            <div className="flex gap-5 justify-center">
              {tsechnology.map((items) => (
                <div key={items.id} className=" w-1/4">
                  <div className="box border p-10 border-[#fff] bg-[#fff] shadow-xl rounded-[10px]">
                    <div className="image w-60 mb-3">
                      <img src={items.url} alt="{items.title}" />
                    </div>
                    <div className="content">
                      <h3 className="text-2xl  mb-3 line-clamp-6">
                        {items.title}
                      </h3>
                      <p className="text-sm line-clamp-4 text-[#333]">
                        {items.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio   pt-[50px] pb-[60px] bg-[#fff]">
        <div className="container mx-auto text-center mb-[30px]">
          <div className="text-4xl font-semibold  text-[#151515] mb-4">
            Our Latest Portfolio
          </div>
          <p className="text-base font-normal text-[#151515] text-center">
            Conveniently reconceptualize high-payoff outside the box thinkin{" "}
            <br />
            markets. Credibly repurpose distinctive content through
          </p>
        </div>

        <div className="container  mx-auto  ">
          <div className="flex justify-center">
            <div className=" w-10/12 flex flex-wrap  gap-5 justify-center">
              {portfolio.map((items) => (
                <div key={items.id} className=" w-1/1 mb-2  ">
                  <div className="box      rounded-[10px]">
                    <div className="image   ">
                      <img
                        src={items.url}
                        alt={items.title}
                        className="rounded-[10px]"
                      />
                    </div>
                    <div className="content overflow-hidden relative mt-[-70px] mx-auto rounded-[10px] bg-white shadow-md hover:shadow-xl w-[78%] pt-5 pl-5 pr-5 pb-1">
                      <h3 className="text-lg font-bold text-[#333]  mb-3 ">
                        {items.title}
                      </h3>
                      <p className="text-base mb-3 text-[#707070] w-2/3">
                        {items.content}{" "}
                      </p>

                      <Link href={items.link}>
                        <span className="absolute pt-4 pl-4  bottom-[-15px] right-[-15px] left-auto  box-decoration-slice bg-gradient-to-r from-[#851010] to-[#5e0a0a] w-[70px] h-[70px] rounded-[100px] ">
                          <img
                            src="/svg/arrow-right-double-line.svg"
                            alt="right double line"
                            className="w-[30px]"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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

const tsechnology = [
  {
    id: 1,
    url: "/img/google-partner.png",
    title: "Google Partner",
    content:
      "Epic Global has maintained an optimisation score of at least 70%, indicating that they've set up their clients' accounts to perform well.",
  },
  {
    id: 2,
    url: "/img/digitalOcean_logo.png",
    title: "DigitalOcean Partner",
    content:
      "Epic Global has partnered with DigitalOcean, a cloud infrastructure provider, to provide a comprehensive cloud-based solution for our customers. The partnership will enable Epic Global customers to leverage DigitalOcean’s cloud infrastructure and services to build and manage their cloud-native applications and services.",
  },
];

const portfolio = [
  {
    id: 1,
    url: "/portfolio/001.jpg",
    title: "Custom Softwares",
    content: "Professionally formulate error free after B2C human it",
    link: "/",
  },
  {
    id: 2,
    url: "/portfolio/port-2.jpg",
    title: "Product Designing",
    content: "Professionally formulate error free after B2C human it",
    link: "/",
  },
  {
    id: 3,
    url: "/portfolio/001.jpg",
    title: "Custom Softwares",
    content: "Professionally formulate error free after B2C human it",
    link: "/",
  },
  {
    id: 4,
    url: "/portfolio/port-4.jpg",
    title: "Product Designing",
    content: "Professionally formulate error free after B2C human it",
    link: "/",
  },
];

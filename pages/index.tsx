/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import { Parallax, useParallax } from "react-scroll-parallax";
import React from "react";
import CaseStudy from "./case-study";

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
  const Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [read, setRead] = React.useState("Readmore");
  const cliked = React.useCallback(() => {
    if (read === "Readmore") {
      setRead("Readless");
    }
    if (read === "Readless") {
      setRead("Readmore");
    }
  }, [read]);

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
          <img src="/img/bg-image.png" ref={Parallax.ref} alt="roundlogo" />
        </div>
      </section> */}

      {/* <section className="discoversection pt-10 pb-10">
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
                    In a cutting-edge environment we focus on ROI based
                    solutions. We believe in offering solutions at right cost
                    that is Customized and Tailored, through the process of
                    Analysis, Design, Development, Implement and Support. We
                    trust in offering affordable solutions for your business.
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
                    Epic Global is a global organization providing cost
                    effective solutions in Analytics and other domain areas. We
                    have a team of experienced professionals who seamlessly
                    blend with your business needs to deliver optimal
                    technologies and processes, which considerably caters to the
                    detailed requirements of organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className={styles.agile}>
          <img src="" />
          {/* <div className={styles.discdiv}>
            <div className={styles.quadiv}>
              <img
                src="./img/quality.png"
                className="w-14 h-14"
                alt="Quality & Agile Services"
              />
              <h2>Quality & Agile Services</h2>
            </div>
            <div>
              <p>
                Epic global is a team of passionate, enthusiastic and
                perfectionist people, who are always on the go to provide the
                best possible solutions, products and services. Our projects are
                backed by an effective and efficient development agile
                methodology that employs sustainable processes designed for long
              </p>
            </div>
          </div> */}
          {/* <div className={styles.discdiv1}>
            <div className={styles.quadiv}>
              <img
                src="./img/affordability.png"
                className="w-14 h-14"
                alt="Quality & Agile Services"
              />
              <h2>Affordability</h2>
            </div>
            <div>
              <p>
                In a cutting-edge environment we focus on ROI based solutions.
                We believe in offering solutions at right cost that is
                Customized and Tailored, through the process of Analysis,
                Design, Development, Implement and Support. We trust in offering
                affordable solutions for your business.
              </p>
            </div>
          </div> */}
          <div className={styles.discdiv2}>
            <div className={styles.quadiv}>
              <img src="./img/support-system.png" width="50px" height="50px" />

              <h2>Support System</h2>
            </div>
            <div>
              <p>
                Epic Global is a global organization providing cost effective
                solutions in Analytics and other domain areas. We have a team of
                experienced professionals who seamlessly blend with your
                business needs to deliver optimal technologies and processes,
                which considerably caters to the detailed requirements of
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="containers">
        <div className={styles.officediv}>
          <div className={styles.picdiv}>
            <img src="/Images/about.85b87a68.jpg" />
          </div>
          <div className={styles.contmain}>
            <div className={styles.providiv}>
              <h6>CAREERS</h6>
              <h2>Join a team with a mission.</h2>
              <h4>Since 2010</h4>
              <p>
                <b>At Epic-Global</b>, we seek talented professionals who are
                passionate about technology and want to make a difference in the
                world. We promote a culture of collaboration, growth, and
                development, and value our employees as our most important
                asset. We offer competitive salaries, benefits, and a variety of
                career paths to fit your individual goals.From entry-level
                positions to executive roles, we have a place for you at Epic
                Global. We are always looking for individuals who share our
                passion for technology and want to work in an environment of
                collaboration, innovation, and growth. If you are interested in
                joining our team, please contact us and we will be happy to
                discuss potential opportunities.
              </p>
              <a>
                More Details <span>{">>"}</span>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bestdiv}>
          <div className={styles.teamdiv}>
            <img src="/Images/download.png" />
            <div className={styles.creativ}>
              <h2>Creative Team</h2>
              <p>We have creative team, they always ready to help you.</p>
            </div>
          </div>
          <div className={styles.teamdiv}>
            <img src="/Images/download (1).png" />
            <div className={styles.creativ}>
              <h2>Best Service</h2>
              <p>We have creative team, they always ready to help you.</p>
            </div>
          </div>
          <div className={styles.teamdiv}>
            <img src="/Images/download (2).png" />
            <div className={styles.creativ}>
              <h2>Online Support</h2>
              <p>We have creative team, they always ready to help you.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="containers">
        <div className={styles.bgdiv}>
          <div className={styles.great}>
            <div className={styles.contediv}>
              <h3>Creative Team</h3>
              <h1>
                We have great <br />
                creative team
              </h1>
              <p>
                <b>Epic-</b> always try to provide the best Business Solutions
                for Clients to grow up their Business sharp and smoothly. We
                voluptatem voluptas aspernatur aut odit fugit, quia consequuur
                magni dolores eos qui ratione.
              </p>
            </div>
            {/* slider */}
            <div className={styles.sliddiv}>
              <div className={styles.blogs1}>
                <img src="/Images/01.a0c47281.jpg" />
                <div className={styles.blogs2}>
                  <h3>Larry Ellison</h3>
                  <h5>CEO & Founder</h5>
                </div>
                <div className={styles.paradiv}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tincidunt nunc lorem, nec faucibus mi facilisis
                    eget....
                  </p>
                </div>
              </div>
              {/* <div className={styles.blogs1}>
                  <img src="/Images/02.4817d3a8.jpg" />
                  <div className={styles.blogs2}>
                    <h3>James Anderson</h3>
                    <h5>HR & Admin</h5>
                  </div>
                  <div className={styles.paradiv}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin tincidunt nunc lorem, nec faucibus mi facilisis
                      eget....
                    </p>
                  </div>
                </div> */}
              {/* <div className={styles.blogs1}>
                  <img src="/Images/03.22822e24.jpg" />
                  <div className={styles.blogs2}>
                    <h3>Thomas Nancy</h3>
                    <h5>Software Engineer</h5>
                  </div>
                  <div className={styles.paradiv}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin tincidunt nunc lorem, nec faucibus mi facilisis
                      eget....
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <section>
       CASE STUDY
      </section> */}

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
                      <h3 className="text-2xl text-[#333]  mb-3 line-clamp-6">
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
            <div className=" w-12/12 flex flex-wrap  gap-5 justify-center">
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

      <section className="pt-[50px] pb-[60px] bg-[url('/img/service-bg.jpg')]">
        <div className="container mx-auto   mb-[30px]">
          <div className="flex">
            <div className="w-10/12 ">
              <div className="text-4xl font-semibold  text-[#151515] mb-2">
                Epic global UPDATE NEWS
              </div>
              <p className="text-base font-normal text-[#151515]  ">
                Uniquely unleash client-centered relationships and world-class{" "}
                <br /> alignments Compellingly impact premier enterprise.
              </p>
            </div>
            <div className="w-2/12 flex justify-end items-start">
              <Link
                href="/"
                className="text-white rounded-md px-3 py-3  box-decoration-slice bg-gradient-to-r from-[#851010] to-[#5e0a0a]"
              >
                All Articles{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="container  mx-auto">
          <div className="flex gap-5 justify-center w-[100%]">
            {bloglist.map((blog, index) => (
              <div key={index} className="box ">
                <div className="image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[300px] object-cover"
                  />
                </div>
                <div className="content overflow-hidden relative mt-[-70px] mx-auto    bg-white shadow-md hover:shadow-xl    pt-5 pl-5 pr-5 pb-5">
                  <h3 className="text-lg font-bold text-[#333]  mb-3 ">
                    {blog.title}
                  </h3>
                  <p className="text-base mb-3 text-[#707070] w-2/3">
                    {blog.title}{" "}
                  </p>

                  <Link
                    href={blog.link}
                    className="flex justify-center items-center rounded-md px-3 py-3  box-decoration-slice bg-gradient-to-r from-[#851010] to-[#5e0a0a] w-[100px] h-[40px] "
                  >
                    <img
                      src="/svg/arrow-right-double-line.svg"
                      alt="right double line"
                      className="w-[20px]"
                    />
                  </Link>
                </div>
              </div>
            ))}
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

const bloglist = [
  {
    id: "1",
    image: "/blog/blog1.jpg",
    date: "September 20, 2021",
    title: "Top 15 Secrete Business  Ideas Next Levels",
    link: "/",
  },
  {
    id: "2",
    image: "/blog/blog2.jpg",
    date: "September 20, 2021",
    title: "Premium Supply Chains is Network turnkey",
    link: "/",
  },
  {
    id: "3",
    image: "/blog/blog3.jpg",
    date: "September 20, 2021",
    title: "Diverse Intellectual Capital  Before Distinctive",
    link: "/",
  },
  {
    id: "4",
    image: "/blog/blog3.jpg",
    date: "September 20, 2021",
    title: "Diverse Intellectual Capital  Before Distinctive",
    link: "/",
  },
];

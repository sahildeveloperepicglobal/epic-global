import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <Slider
          speed={3000}
          autoplaySpeed={3000}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        ></Slider> */}

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          // slidesToScroll={1}
          // vertical={true}
          // verticalSwiping={true}
          autoplay={true}
          speed={3000}
          autoplaySpeed={3000}
        >
          {teamslider.map((items) => (
            <div key={items.id} className=" w-1/1 mb-2">
              <div className="box      rounded-[10px]">
                <div className="image   ">
                  <img
                    src={items.url}
                    alt={items.name}
                    className="rounded-[10px]"
                  />
                </div>
                <div className="content overflow-hidden relative mt-[-70px] mx-auto rounded-[10px] bg-white shadow-md hover:shadow-xl w-[78%] pt-5 pl-5 pr-5 pb-1">
                  <h3 className="text-lg font-bold text-[#333]  mb-3 ">
                    {items.name}
                  </h3>
                  <p className="text-base mb-3 text-[#707070] w-2/3">
                    {items.designation}{" "}
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
        </Slider>
      </div>
    );
  }
}
export default AsNavFor;

const teamslider = [
  {
    id: 1,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
  {
    id: 2,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
  {
    id: 3,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
  {
    id: 4,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
  {
    id: 5,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
  {
    id: 6,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
  {
    id: 7,
    url: "/Images/01.a0c47281.jpg",
    name: "Larry Ellison",
    designation: "CEO & Founder",
    content: "We have an amazing team that is ready to conquer any task",
    link: "/",
  },
];

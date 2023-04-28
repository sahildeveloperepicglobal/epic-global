/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scroll ? "scroll" : ""
      } absolute header top-0 z-10 w-[100%] z-[99]`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-4 pb-4">
          <div>
            <div className="headerlogo">
              <Link href="/">
                <img src="/img/logo.webp" alt="" />
              </Link>
            </div>
          </div>
          <div>
            <ul className="flex gap-5 ">
              {navmenu.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={nav.link}
                    className="text-[15px] font-light link "
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const navmenu = [
  {
    id: 1,
    link: "business-process-services",
    title: "Business Process Services",
  },
  {
    id: 2,
    link: "project-management",
    title: "Project Management",
  },
  {
    id: 3,
    link: "design-evelopment",
    title: "Design & Development",
  },
  {
    id: 4,
    link: "online-marketing",
    title: "Online Marketing",
  },
  {
    id: 5,
    link: "carrier",
    title: "Carrier",
  },
  {
    id: 6,
    link: "contact",
    title: "Contact Us",
  },
];

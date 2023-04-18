import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
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
      } absolute header top-0 z-10 w-[100%]`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-4 pb-4">
          <div>
            <div className="headerlogo">
              <img src="/img/logo.webp" alt="" />
            </div>
          </div>
          <div>
            <ul className="flex gap-5 ">
              {navmenu.map((nav) => (
                <li key={nav.id}>
                  <Link href="/" className="text-[15px] font-light link ">
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
    link: "./",
    title: "Business Process Services",
  },
  {
    id: 2,
    link: "./",
    title: "Project Management",
  },
  {
    id: 3,
    link: "./",
    title: "Design & Development",
  },
  {
    id: 4,
    link: "./",
    title: "Online Marketing",
  },
  {
    id: 5,
    link: "./",
    title: "Carrier",
  },
  {
    id: 6,
    link: "./",
    title: "Contact Us",
  },
];

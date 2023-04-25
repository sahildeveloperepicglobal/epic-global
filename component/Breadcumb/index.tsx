import Link from "next/link";
import React from "react";

type FAQComponentProps = {
  heading?: string;
  content?: string;
};

const Breadcumb = ({ content, heading }: FAQComponentProps) => {
  return (
    <section className="flex items-center  before:content-[''] before:block before:absolute relative before:bg-[#121B51] before:opacity-[0.8] before:w-[100%] before:h-[100%] h-[450px] before:top-0 before:left-0   bg-[url('/breadcumb/bg-4.jpg')]">
      <div className="container   mx-auto">
        <div className="content mt-20 relative z-10 ">
          <h1 className="text-[40px] font-semibold text-white">{heading}</h1>
          <p className="text-[20px] font-light text-white w-[500px]">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Breadcumb;

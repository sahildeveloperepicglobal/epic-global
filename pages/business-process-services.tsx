import Breadcumb from "@/component/Breadcumb";
import React from "react";
import Business from "./business";

const BusinessProcessServices = () => {
  return (
    <>
      <div className="text-[#fff]">
        <Breadcumb
          content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`}
          heading="Business Process Services"
        />

      </div>
      <Business/>
    </>
  );
};

export default BusinessProcessServices;

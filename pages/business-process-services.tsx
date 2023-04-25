import Breadcumb from "@/component/Breadcumb";
import React from "react";
import Bussiness from "./bussiness";

const BusinessProcessServices = () => {
  return (
    <>
      <div className="text-[#fff]">
        <Breadcumb
          content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`}
          heading="Business Process Services"
        />

      </div>
      <Bussiness/>
    </>
  );
};

export default BusinessProcessServices;

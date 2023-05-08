import Breadcumb from "@/component/Breadcumb";
import React from "react";
import Business from "./business";

const BusinessProcessServices = () => {
  return (
    <>
      <div className="text-[#fff]">
        <Breadcumb
          content={`Epic Global is a leading provider of Business Process Services (BPS).`}
          heading="Business Process Services"
        />

      </div>
      <Business/>
    </>
  );
};

export default BusinessProcessServices;

import Breadcumb from "@/component/Breadcumb";
import React from "react";
import Business from "./business";

const BusinessProcessServices = () => {
  return (
    <>
      <div className="text-[#fff]">
        <Breadcumb
          content={`Epic Global is a leading provider of Business Process Services (BPS). Our comprehensive suite of services covers the entire range of business needs.`}
          heading="Business Process Services"
        />

      </div>
      <Business/>
    </>
  );
};

export default BusinessProcessServices;

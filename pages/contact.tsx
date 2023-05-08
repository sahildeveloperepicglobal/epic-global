import Breadcumb from "@/component/Breadcumb";
import ContactUs from "@/component/contact-us";
import MailIcon from "@/icons/MailIcon";
import MapIcon from "@/icons/MapIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <>
      <Breadcumb
        heading="Contact Us"
        content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`} />
     
     <ContactUs />
        </>
  );
};

export default Contact;

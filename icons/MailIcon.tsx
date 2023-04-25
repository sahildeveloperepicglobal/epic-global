import React from "react";

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
      <rect
        x="48"
        y="96"
        width="416"
        height="320"
        rx="40"
        ry="40"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        d="M112 160l144 112 144-112"
      />
    </svg>
  );
};

export default MailIcon;

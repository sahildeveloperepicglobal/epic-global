/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Style from "styles/contact.module.scss";

const ContactUs = () => {
  
  const Handlesubmit={

  }
  
  return (
    <>
      <div className={Style["aboutus"]}>
        <div className="containers">
          <section>
            <div className={Style.headform}>
              <div className={Style.send}>
                <h2> Send us a message </h2>
                <form>
                  <div className={Style.indiv}>
                    <div className={Style.in1}>
                      <label htmlFor="Name">Name *</label>
                      <input type="text" placeholder="Your name"/>
                    </div>
                    <div className={Style.in1}>
                      <label htmlFor="Email">Email *</label>
                      <input type="email" name="name" placeholder="Your mail" />
                    </div>
                  </div>
                  <div className={Style.in2div}>
                    <div className={Style.in1}>
                      <label htmlFor="Phone">Phone *</label>
                      <input type="number" placeholder="Your number"/>
                    </div>
                    <div className={Style.in1}>
                      <label htmlFor="Company">Company</label>
                      <input type="text" placeholder="Company name" />
                    </div>
                  </div>
                  <div className={Style.in3div}>
                    <label htmlFor="Message" >Message *</label>
                    <textarea name="Write your message" id="" cols={10} rows={5} placeholder={"Write your message"}></textarea>
                  </div>
                </form>
                <button onClick={(e)=>Handlesubmit}>
                  SEND MESSAGE
                  </button>
              </div>
              <div className={Style.abtsec}>
                <div className={Style.info}>
                  <h2> Contact Information </h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aperiam, consequuntur.
                  </p>
                </div>
                <div className={Style.loct}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                    </svg>
                  </span>
                  <p>B05, H-140, Sector 63, Noida, 201301</p>
                </div>
                <div className={Style.phonediv}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                    </svg>
                  </span>
                  <a href="">088 (013180 56529)</a>
                </div>
                <div className={Style.maildiv}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                    </svg>
                  </span>
                  <a href="">gmail@example.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default ContactUs;

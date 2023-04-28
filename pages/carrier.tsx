import Breadcumb from "@/component/Breadcumb";
import React from "react";
import styles from "@/styles/carrier.module.scss";

const Carrier = () => {
  return (
    <>
      <div>
        <Breadcumb
          content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`}
          heading="Carrier"
        />
      </div>
      <div className="containers">
        <div className={styles.containdiv}>
        <div className={styles.hotvacan}>
          <h2>HOT VACANCIES</h2>
          <p>Refer a friend</p>
        </div>
        <div className={styles.vacandetail}>
          <ul>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a> Middle .NET with Ext.js</a>

                  <span>HOT</span>
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Argentina</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Software Engineering, .NET</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Senior Test Automation Engineer</a>

                  <span>HOT</span>
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Poland, Croatia</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Software Engineering, Quality Assurance, Automation</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Middle Python Developer</a>
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Poland, Croatia</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Software Engineering, Python</p>
                </div>
              </div>
            </li>
            <li> 
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Senior Full-Stack (.NET+ExtJS) Software Developer</a>

               
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Argentina</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Software Engineering, .NET</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Middle/Senior/Lead Developer with Ext.js knowledge</a>

                
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Argentina</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Software Engineering, JavaScript</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Senior Project Manager (mining industry)</a>

                
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>
                    Poland, Ternopil, Ivano-Frankivsk, Lviv, Estonia, Croatia,
                    Uzhhorod, Chernivtsi
                  </p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Management Positions</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Senior PHP (Symfony) Developer</a>

                
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Poland, Estonia, Croatia</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Software Engineering, PHP</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Dr  - Product Implementation Analyst</a>

                
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Lviv</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Dr </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.netdiv}>
                <div className={styles.headdiv}>
                  <a>Trainee/ Junior Information Analyst</a>

                
                </div>
                <div className={styles.locatdiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                  </svg>
                  <p>Ternopil, Ivano-Frankivsk, Lviv, Kyiv, Remote, Uzhhorod</p>
                </div>
                <div className={styles.softwarediv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path>
                  </svg>
                  <p>Information Development</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.buttdiv}>
          <button>ALL VACANCIES</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Carrier;

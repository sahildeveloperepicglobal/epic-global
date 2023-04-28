/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Breadcumb from "@/component/Breadcumb";
import styles from "@/styles/carrier.module.scss";

const Vacancies = () => {
  return (
    <>
      <div>
        <Breadcumb
          content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`}
          heading="Carrier"
        />
      </div>
      <div className="containers">
        <div className={styles.contediv}>
          <div className={styles.sec1div}>
            <div className={styles.devildiv}>
              <p>
                Epic-global<a> Software Engineering and Development Office</a>{" "}
                is looking for a Middle Test Automation Engineer in Ukraine,
                Poland, Romania, Croatia, Bulgaria.
              </p>
              <p>
                Our customer has been developing innovative solutions in the
                home improvement sector on behalf of the nation’s largest
                retailers for over 20 years. They are customized programs that
                allow retailers to offer home improvement products and services
                to their customers on a nationwide basis, with minimal
                investment or operational responsibility.
              </p>
            </div>
            <div className={styles.respon}>
              <h2>REQUIREMENTS</h2>
              <ul>
                <li>At least 2,5 years+ of JavaScript automation experience</li>
                <li>Experience with Cypress test framework</li>
                <li>Experience with UI and API</li>
                <li>Experience with manual testing</li>
                <li>
                  Knowledge and experience in work and integration with CI
                </li>
                <li>
                  Knowledge of software testing techniques and methodologies
                </li>
                <li>
                  Good understanding of test automation goals, areas of
                  applicability, activities, deliverables
                </li>
                <li>
                  Strong written and verbal communication, presentation, and
                  technical writing skills
                </li>
                <li>
                  Team player, technology-passionate, and self-motivated
                  individual
                </li>
                <li>Intermediate level of English</li>
              </ul>
            </div>
            <div className={styles.respon}>
              <h2>RESPONSIBILITIES</h2>
              <ul>
                <li>Creation and maintenance of automation tests</li>
                <li>Setting up the test environment</li>
                <li>Connecting plugins, page objects</li>
                <li>Analyzing test execution, bug reports, and test cases</li>
                <li>Running tests in Cypress Test Runner</li>
                <li>Running tests from the command line</li>
                <li>
                  Running tests on CI, using AzureDevops to create releases and
                  pay plans
                </li>
                <li>
                  Understanding Business Requirements and design architecture
                  according to business needs
                </li>
                <li>
                  Collaboration with team members to follow best practices and
                  requirements
                </li>
                <li>Communication with the customer side</li>
              </ul>
            </div>
            <div className={styles.respon}>
              <h2>WHAT WILL YOU GET WITH Epic-global</h2>
              <ul>
                <li>Close cooperation with a customer</li>
                <li>Challenging tasks</li>
                <li>Competence development</li>
                <li>Team of professionals</li>
                <li>Dynamic environment with a low level of bureaucracy</li>
              </ul>
            </div>
            <div className={styles.abtdiv}>
              <h2>
                ABOUT<a> Epic-global</a>
              </h2>
              <p>
                Epic-global is a custom software development company. We deliver
                value to our clients, thanks to our expertise and experience
                gained from working as a software innovation partner since 1991.
              </p>
              <p>
                Our 2000+ professionals located in the Delivery Centers across
                Eastern Europe and sales offices in Europe and North America,
                provide our clients with a full range of software engineering
                services. These include product development, QA, R&D, design,
                technology consulting and dedicated teams.
              </p>
            </div>
            <div className={styles.finddiv}>
              <h2>YOU MAY FIND INTERESTING</h2>
            </div>
          </div>
          <div className={styles.sec2div}>
            <div className={styles.imgsdiv}>
              <img src="/Images/diana.kubrak-150x150.jpg" />
              <h2>Diana Kubrak</h2>
              <p>Recruiter Contacts</p>

              <div className={styles.mailhr}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                </svg>
                <a>diana.kubrak@Epic-global.com</a>
              </div>
            </div>
            <div className={styles.appdiv}>
              <button className={styles.apply}>APPLY</button>
              <button className={styles.linkedin}>APPLY VIA LINKEDIN</button>
              <span>
                or <a>refer a friend</a>
              </span>
            </div>
            <div className={styles.share}>
              <h2>Share this vacancy</h2>
              <div className={styles.facelin}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vacancies;

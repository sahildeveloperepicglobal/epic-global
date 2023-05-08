/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Breadcumb from "@/component/Breadcumb";
import React from "react";
import styles from "@/styles/design.module.scss";

const DesignEvelopment = () => {

  const [read, setRead] = React.useState("Readmore");
  const cliked = React.useCallback(() => {
    if (read === "Readmore") {
      setRead("Readless");
    }
    if (read === "Readless") {
      setRead("Readmore");
    }
  }, [read]);


  const [readed, setReaded] = React.useState("Readmore");
  const clicked = React.useCallback(() => {
    if (readed === "Readmore") {
      setReaded("Readless");
    }
    if (readed === "Readless") {
      setReaded("Readmore");
    }
  }, [readed]);

  
  return (
    <>
      <div>
        <Breadcumb
          content={`We specialize in creating beautiful, effective, and user-friendly websites, applications, and other digital products.`}
          heading="Design Evelopment"
        />
      </div>
      <div className="containers">
        <section>
          <div className={styles.picmain}>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/filler2-1-1.jpg"
                width="550px"
                height="300px"
              />
            </div>
            <div className={styles.cont11div}>
              <h2>How We Meet Your Needs?</h2>
              <p>
                We understand that every business has its own unique needs and
                requirements, which is why we strive to provide custom solutions
                to meet those needs. Our specialized design and development
                services include web and mobile development, custom
                applications,
                <span>
                  {readed === "Readless" && (
                    <span>
                      {" "}
                      website design and development, content management
                      systems, e-commerce solutions, and search engine
                      optimization. We are also experienced in the creation of
                      digital media such as videos, animations, and graphics.
                    </span>
                  )}
                  <a onClick={clicked}>{readed}</a>
                </span>
              </p>
              {/* <div className={styles.contactdiv}>
                <button>Contact Us</button>
              </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className={styles.pic1main}>
            <div className={styles.cont11div}>
              <h2>Committed to Excellence</h2>
              <p>
                At Epic Global, we take great pride in our work, and always
                strive to deliver the highest quality results. We aim to provide
                our clients with an efficient, effective, and cost-efficient
                solution that meets and exceeds their expectations. We believe
                in working closely with our customers and providing them with
                timely feedback and updates throughout the entire process.
              </p>
              {/* <div className={styles.contactdiv}>
                <button>Contact Us</button>
              </div> */}
            </div>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/blog-3-1.jpg"
                width="550px"
                height="300px"
              />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.picmain}>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/blog-1-1.jpg"
                width="550px"
                height="300px"
              />
            </div>
            <div className={styles.cont11div}>
              <h2>Expert Team, Tailored Designs</h2>
              <p>
                Our experienced team of professionals is committed to providing
                the best possible service and results. We use the latest
                technologies to create beautiful and effective designs that are
                tailored to the specific needs and goals of our clients. We also
                offer a wide range of other services such as SEO, online
                marketing, web hosting, and more.
              </p>
              {/* <div className={styles.contactdiv}>
                <button>Contact Us</button>
              </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className={styles.pic1main}>
            <div className={styles.cont11div}>
              <h2>Customer Service & Support</h2>
              <p>
                At Epic Global, we take great care in creating a successful,
                long-term relationship with our clients. We offer personalized
                customer service and support, and are always available to answer
                any questions or concerns. We strive to provide our customers
                with the best possible experience and results.
                <span>
                  {read === "Readless" && (
                    <span>
                      {" "}
                      If you are looking for a reliable and experienced design
                      and development team to create an effective and
                      user-friendly website, application, or other digital
                      product, then look no further than Epic Global. We are
                      committed to providing our clients with the best possible
                      service and results. Contact us today to learn more about
                      our services and how we can help you achieve your business
                      goals.
                    </span>
                  )}
                  <a onClick={cliked}>{read}</a>
                </span>
              </p>

              {/* <div className={styles.contactdiv}>
                <button>Contact Us</button>
              </div> */}
            </div>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/gallery-12.jpg"
                width="550px"
                height="300px"
              />
            </div>
          </div>
        </section>
      </div>

      {/* <div className="containers">
      <span>{read === "Readless" && <span> "text anything" </span>}<a onClick = {cliked}>{read}</a></span>
        <div className={styles.contediv}>
          <h1>How We Meet Your Needs?</h1>
          <p>
            We understand that every business has its own unique needs and
            requirements, which is why we strive to provide custom solutions to
            meet those needs. Our specialized design and development services
            include web and mobile development, custom applications, website
            design and development, content management systems, e-commerce
            solutions, and search engine optimization. We are also experienced
            in the creation of digital media such as videos, animations, and
            graphics.
          </p>
        </div>
        <div className={styles.contediv}>
          <h2>Committed to Excellence</h2>
          <p>
            At Epic Global, we take great pride in our work, and always strive
            to deliver the highest quality results. We aim to provide our
            clients with an efficient, effective, and cost-efficient solution
            that meets and exceeds their expectations. We believe in working
            closely with our customers and providing them with timely feedback
            and updates throughout the entire process.
          </p>
        </div>
        <div className={styles.contediv}>
          <h2>Expert Team, Tailored Designs</h2>
          <p>
            Our experienced team of professionals is committed to providing the
            best possible service and results. We use the latest technologies to
            create beautiful and effective designs that are tailored to the
            specific needs and goals of our clients. We also offer a wide range
            of other services such as SEO, online marketing, web hosting, and
            more.
          </p>
        </div>
        <div className={styles.customerdiv}>
          <h1>Customer Service & Support</h1>
          <p>
            At Epic Global, we take great care in creating a successful,
            long-term relationship with our clients. We offer personalized
            customer service and support, and are always available to answer any
            questions or concerns. We strive to provide our customers with the
            best possible experience and results.
          </p>
          <p>
            If you are looking for a reliable and experienced design and
            development team to create an effective and user-friendly website,
            application, or other digital product, then look no further than
            Epic Global. We are committed to providing our clients with the best
            possible service and results. Contact us today to learn more about
            our services and how we can help you achieve your business goals.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default DesignEvelopment;

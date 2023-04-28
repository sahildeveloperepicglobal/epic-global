/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "styles/about.module.scss";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Sliders = () => {
  return (
    <>
      <div className={styles.main}>
        <Swiper pagination={true} autoplay={true} modules={[Pagination]} className="mySwiper">
{/* {Swiper{
Autoplay=true;
}} */}
        <div className={styles.form2div}>
          <SwiperSlide>
           
            <div className={styles.subform2}>
              <div className={styles.intcomdiv}> ''</div>
              <div className={styles.paradiv}>
                <p>
                  ELEKS has been involved in the development of a number of our
                  consumer-facing websites and mobile applications that allow
                  our customers to easily track their shipments, get the
                  information they need as well as stay in touch with us. We’ve
                  appreciated the level of ELEKS’ expertise, responsiveness and
                  attention to details.
                </p>
                <div className={styles.img2div}>
                  <img src="/Images/samer-awajan.jpg" />{" "}
                </div>
                <strong>
                  Samer Ajawan
                  <br />
                  CTO, Aramex
                </strong>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.subform2}>
              <div className={styles.intcomdiv}> ''</div>
              <div className={styles.paradiv}>
                <p>
                  ELEKS has been involved in the development of a number of our
                  consumer-facing websites and mobile applications that allow
                  our customers to easily track their shipments, get the
                  information they need as well as stay in touch with us. We’ve
                  appreciated the level of ELEKS’ expertise, responsiveness and
                  attention to details.
                </p>
                <div className={styles.img2div}>
                  <img src="/Images/sam-fleming.jpg" />
                </div>
                <strong>
                  Sam Fleming
                  <br />
                  President, Fleming-AOD
                </strong>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.subform2}>
              <div className={styles.intcomdiv}> ''</div>
              <div className={styles.paradiv}>
                <p>
                 
                  ELEKS has been involved in the development of a number of our
                  consumer-facing websites and mobile applications that allow
                  our customers to easily track their shipments, get the
                  information they need as well as stay in touch with us. We’ve
                  appreciated the level of ELEKS’ expertise, responsiveness and
                  attention to details.
                </p>
                <div className={styles.img2div}>
                  <img src="/Images/caroline-aumeran-1.jpg" />
                </div>
                <strong>
                  Caroline Aumeran
                  <br />
                  Head of Product Development, appygas
                </strong>
              </div>
            </div>
          </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default Sliders;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Style from "@/styles/about.module.scss";

const Swiper = () => {
    return (
      <>
      <div className={Style.swipermySwiper}>
    <div className={Style.swiperwrapper}>
      <div className={Style.swiperslide}>
      <div className={Style.jhona}>
            <img src="/bussinessimage/author1.jpg" />
            <h2>Jonha Doe</h2>
            <h4>BUSINESS CONSULTANT</h4>
            <p>
              Sed at laoreet odio. Nulla id dolor <br />
              eu augue iaculiqs ultrices sit amet id tellus.
            </p>
          </div>
        </div>
      <div className={Style.swiperslide}>
      <div className={Style.jhona}>
            <img src="/bussinessimage/test-3.jpg" />
            <h2>Jonha Doe</h2>
            <h4>BUSINESS CONSULTANT</h4>
            <p>
              Sed at laoreet odio. Nulla id dolor
              <br />
              eu augue iaculiqs ultrices sit amet id tellus.
            </p>
          </div>
        </div>
      <div className={Style.swiperslide}>
      <div className={Style.jhona}>
            <img src="/bussinessimage/test-6.jpg" />
            <h2>Jonha Doe</h2>
            <h4>BUSINESS CONSULTANT</h4>
            <p>
              Sed at laoreet odio. Nulla id dolor <br /> eu augue iaculiqs
              ultrices sit amet id tellus.
            </p>
          </div>
        </div>
    </div>
    <div className={Style.swiperpagination}></div>
  </div>
      </>
    );
};
export default Swiper;
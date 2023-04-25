import Style from "@/styles/about.module.scss";

const Swiper = () => {
    return (
      <>
      <div className={Style.swipermySwiper}>
    <div className={Style.swiperwrapper}>
      <div className={Style.swiperslide}>
        Slide 1
        </div>
      <div className={Style.swiperslide}>
        Slide 2
        </div>
      <div className={Style.swiperslide}>
        Slide 3
        </div>
    </div>
    <div className={Style.swiperpagination}></div>
  </div>
      </>
    );
};
export default Swiper;
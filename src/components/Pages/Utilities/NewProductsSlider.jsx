import React from "react";
import headset from "../../../assets/images/headset.png";
import latestlaptop from "../../../assets/images/latestlaptop.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="swiper"
      >
        <SwiperSlide className="row">
          <div className="text-content">
            <p>New Products</p>
            <h2>Latest Laptop</h2>

            <button className="btn" type="button">
              SHOP NOW
            </button>
          </div>
          <div className="img-cont">
            <img src={latestlaptop} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="row">
          <div className="text-content">
            <p>New Products</p>
            <h2>Bluetooth Headset</h2>

            <button className="btn" type="button">
              SHOP NOW
            </button>
          </div>
          <div className="img-cont">
            <img src={headset} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="row">
          <div className="text-content">
            <p>New Products</p>
            <h2>Latest iPhone 14 Pro Max</h2>

            <button className="btn" type="button">
              SHOP NOW
            </button>
          </div>
          <div className="img-cont">
            <img
              src="https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_14_Pro_Max_deep_purple-full-product-front-600.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="row">
          <div className="text-content">
            <p>New Products</p>
            <h2>Samsung Galaxy S22 Ultra</h2>

            <button className="btn" type="button">
              SHOP NOW
            </button>
          </div>
          <div className="img-cont">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/ph/2202/gallery/ph-galaxy-s22-ultra-s908-sm-s908ezkhphl-530760679?$650_519_PNG$"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

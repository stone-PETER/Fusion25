
// import React from "react";
// import avatarIImg from "./assets/1.jpg";
// import avatarIIImg from "./assets/2.jpg";
// import avatarIIIImg from "./assets/3.jpg";
// import avatarIVImg from "./assets/4.png";
// import avatarVImg from "./assets/5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./sessions.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import SessionCard from "./sessionCard";


export default function Sessions() {
    SwiperCore.use([Autoplay]);
  return (
    <>
      <section>
        <div className="main">
          <div className="head-p">
            <span style={{ paddingRight: "5px" }}>GET AN </span>
            <span style={{ color: "#1D8BA0" }}> OPINION</span>
          </div>
          <div className="head">TESTIMONIALS</div>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="swiper-slide">
              <SessionCard/>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
            <SessionCard/>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
            <SessionCard/>
            </SwiperSlide>

            <SwiperSlide className=" ">
            <SessionCard/>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
            <SessionCard/>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Comic1 from "../../assets/img/serial/image_manhwa1.jpg";
import Comic2 from "../../assets/img/serial/image_manhwa2.jpg";
import Comic3 from "../../assets/img/serial/image_manhwa3.jpg";
import Comic4 from "../../assets/img/serial/image_manhwa4.jpg";
import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Genre() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{Comic1}</SwiperSlide>
        <SwiperSlide>{Comic2}</SwiperSlide>
        <SwiperSlide>{Comic3}</SwiperSlide>
        <SwiperSlide>{Comic4}</SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
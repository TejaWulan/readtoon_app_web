import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Comic1 from "../../assets/img/serial/image_manhwa1.jpg";
import Comic2 from "../../assets/img/serial/image_manhwa2.jpg";
import Comic3 from "../../assets/img/serial/image_manhwa3.jpg";
import Comic4 from "../../assets/img/serial/image_manhwa4.jpg";
import Comic5 from "../../assets/img/serial/image_manhwa5.jpg";
import Comic6 from "../../assets/img/serial/image_manhwa6.jpg";


import { FreeMode, Pagination } from 'swiper/modules';

export default function Genre_temp() {
  return (
    <Swiper
      slidesPerView={2}          // mobile default
      spaceBetween={12}
      freeMode={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 3, spaceBetween: 15 },  // tablet
        1024: { slidesPerView: 4, spaceBetween: 20 }, // desktop
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper px-4"
    >
      {[Comic1, Comic2, Comic3, Comic4, Comic5, Comic6].map((img, index) => (
        <SwiperSlide key={index}>
          <img 
            src={img}
            alt={`Comic ${index + 1}`}
            className="
              w-full object-cover rounded-lg

              max-h-[90px]      / Mobile /
              sm:max-h-[110px]  / Small devices/
              md:max-h-[130px]  / Tablet /
              lg:max-h-[250px]  / Desktop /
            "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

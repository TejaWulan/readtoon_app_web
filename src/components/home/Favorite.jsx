import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Comic1 from "../../assets/img/serial/image_manhwa1.jpg";
import Comic2 from "../../assets/img/serial/image_manhwa2.jpg";
import Comic3 from "../../assets/img/serial/image_manhwa3.jpg";
import Comic4 from "../../assets/img/serial/image_manhwa4.jpg";
import Comic5 from "../../assets/img/serial/image_manhwa5.jpg";
import Comic6 from "../../assets/img/serial/image_manhwa6.jpg";


export default function Genre_temp() {
  
  // Menggabungkan judul dan Swiper ke dalam satu elemen <div /> yang dikembalikan
  return (
    <div className="py-8"> {/* Tambahkan padding vertikal */}
      
      {/* 1. Judul (Sekarang ada di dalam return) */}
      <div className="mt-10 text-center mb-8 px-4">
        <h1 className="text-3xl text-[#66c7ff] font-bold tracking-tight">
          Favorite Comic
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Pilihan terbaik dari koleksi kami yang paling dicintai.
        </p>
      </div>

      {/* 2. Swiper Carousel */}
      <Swiper
        slidesPerView={2.2} // Dibuat sedikit lebih dari 2 agar ada preview slide berikutnya
        spaceBetween={16} // Ditingkatkan sedikit
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3.2, spaceBetween: 20 }, // tablet
          1024: { slidesPerView: 5.5, spaceBetween: 30 }, // desktop (menampilkan lebih banyak)
        }}
        modules={[FreeMode, Pagination]}
        // Padding horizontal di Swiper dihapus agar konten bisa menyentuh tepi layar (untuk estetika carousel)
        className="mySwiper w-full h-full"
      >
        {[Comic1, Comic2, Comic3, Comic4, Comic5, Comic6].map((img, index) => (
          <SwiperSlide key={index}>
            <img 
              src={img}
              alt={`Comic ${index + 1}`}
              className="
                w-full object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02] 
                shadow-xl cursor-pointer 
                
                max-h-[150px]      / Mobile /
                sm:max-h-[200px]  / Tablet /
                lg:max-h-[300px]  / Desktop /
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
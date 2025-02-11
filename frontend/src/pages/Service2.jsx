import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-screen h-screen  bg-white dark:bg-gray-800"
      >
        <SwiperSlide><img src="./images/7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/8.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

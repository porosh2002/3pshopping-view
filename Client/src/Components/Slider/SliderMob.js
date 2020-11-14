import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
// Import Swiper styles

export default function SliderMob() {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 0</SwiperSlide>
        <SwiperSlide>Slide 0</SwiperSlide>
        ...
      </Swiper>
    )
}

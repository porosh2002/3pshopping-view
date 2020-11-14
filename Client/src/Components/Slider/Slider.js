import React, { Component } from "react";
import SwiperCore, { Autoplay , Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay,Navigation]);
export default class Slider extends Component {
  Scroll = () => {
    if (window.innerWidth > 900) {
      return 4;
    } else {
      return 2;
    }
  };
  render() {
    return (
<div>
<Swiper navigation
        spaceBetween={30}
        slidesPerView='1'
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
 <SwiperSlide>

        </SwiperSlide>
                <SwiperSlide>

        </SwiperSlide>
      </Swiper>
</div>
    );
  }
}
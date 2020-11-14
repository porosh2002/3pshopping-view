import React, { Component } from "react";
import SwiperCore, { Autoplay , Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image_2 from "../../Images/sd1.jpg";
import Image_4 from "../../Images/sd1.jpg";
import {SliderImage} from '../../Styled'
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
          <SliderImage
            src={Image_2}
            alt="company-logo"
          ></SliderImage>
        </SwiperSlide>
                <SwiperSlide>
          <SliderImage
            src={Image_4}
            alt="company-logo"
          ></SliderImage>
        </SwiperSlide>
      </Swiper>
</div>
    );
  }
}
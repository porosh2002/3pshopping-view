import React, { Component } from "react";
import SwiperCore, { Autoplay , Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image_2 from "../../Images/";
import Image_4 from "../../Image/3p.png";
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
<div className='slider-ct slider-company'>
<p className="title title-ct">Clients & Partners</p>
<Swiper navigation
        spaceBetween={30}
        slidesPerView={this.Scroll()}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
                <SwiperSlide>
          <img
            src={Image_2}
            alt="company-logo"
            className="trust-company-logo"
          ></img>
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={Image_4}
            alt="company-logo"
            className="trust-company-logo"
          ></img>
        </SwiperSlide>
      </Swiper>
</div>
    );
  }
}
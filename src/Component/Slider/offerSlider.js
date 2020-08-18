import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SwiperCore, { Autoplay ,EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay , EffectFade]);
export default class Slider extends Component {
    render() {
        return (
            <div className='slider-main'>
               <Swiper  effect="fade"
      spaceBetween={30}  
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay:3000,
        disableOnInteraction:false
    }}
    >
      <SwiperSlide>
          <Link to=''>
          <div>
              <img className='offer-slider' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/563014d8-2c85-495f-9b61-9b4ae4ea09b41597417752779-Freecharge_desktop-strips.jpg' alt='image' />
          </div>
          </Link>
      </SwiperSlide>
      <SwiperSlide>
          <Link to=''>
          <div>
              <img className='offer-slider' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/65f8c96e-2c3d-412a-904c-06435a10662a1597381975341-fedral-bank.jpg' alt='image' />
          </div>
          </Link>
      </SwiperSlide>
    </Swiper>
            </div>
        )
    }
}

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
          <img className='slider-img' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/baba2c89-c706-44b1-a7d8-abbad4649fe41597683284959-women-footwear-dk.jpg' alt='company-logo'></img>
          </Link>
      </SwiperSlide>
      <SwiperSlide>
          <Link to=''>
          <img className='slider-img' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/1b9af71b-64ee-4736-9ee7-1209740a3f4b1597683284668-MnH_Desk.jpg' alt='company-logo'></img>
          </Link>
      </SwiperSlide>
    </Swiper>
            </div>
        )
    }
}

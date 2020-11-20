import React from 'react'
import {Link} from 'react-router-dom'
export default function Slider() {
  return (
<div className='slider-image'>
<div className='slider'>
  <div className='slider-txt-wraper'>
<p className='slider-txt'>Get up to 15x extra for winning a Bet</p>
<Link className='cta-btn' to='/signup'>Join Now</Link>
  </div>
</div>
</div>
  )
}

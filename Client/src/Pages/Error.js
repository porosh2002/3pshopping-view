import React from 'react'
import EImage from '../Images/404.gif'
import {Link} from 'react-router-dom'
import { ErrorDiv} from '../Styles/Styled'
export default function Error() {
  return (
    <ErrorDiv>
      <img className='ErrorImage' src={EImage} alt='404' />
      <br></br>
      <Link to='/' className='ErrorBtn'>Back to Home</Link>
    </ErrorDiv>
  )
}

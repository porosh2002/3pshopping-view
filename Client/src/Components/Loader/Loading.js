import React from 'react'
import { Loader,LoaderImage } from '../../Styles/Styled'
import LoadingImg from '../../Images/Loader.svg'
import './Loading.css'
export default function Loading() {
    return (
        <Loader>
        <div className='CenterAbs LoaderContent'>
           <span>Loading...</span>

           <LoaderImage src={LoadingImg} alt='Loading...' />
        </div>
        </Loader>
    )
}
